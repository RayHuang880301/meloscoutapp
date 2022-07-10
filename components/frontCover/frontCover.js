import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from './frontCover.module.css';
import logo from '../../assets/logo.png';
import dcLogo from '../../assets/dcLogo.svg';
import twLogo from '../../assets/twLogo.svg';
import osLogo from '../../assets/osLogo.svg';
import add from '../../assets/add.svg';
import min from '../../assets/min.svg';
import Image from 'next/image';
import { utils, BigNumber, ethers} from 'ethers';
import { CONTACT_ADDRESS, CONTACT_ABI } from '../../config';
import { useSigner , useContract , chain, useAccount, useConnect, useEnsName, useDisconnect, useNetwork, useContractWrite, useSwitchNetwork } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import Swal from 'sweetalert2';
import { getMerkle, getAllowedItemProof, connectError, web3ErrorToMsg } from './helper';
const json = require('../../assets/whitelist.json');
const keccak256 = require('keccak256');

const whiteList = json.whitelist;
const leafs = whiteList.map(addr => keccak256(addr));
const tree = getMerkle(leafs);

const FrontCover = () => {
	const { address } = useAccount();
	const { data: ensName } = useEnsName({ address });
	const { data: connectData, connect, error } = useConnect({
		connector: new InjectedConnector(),
	});
	const { disconnect } = useDisconnect();
	const [profile, setProfile] = useState(null);
	const [mintNum, setMintNum] = useState(1);
	const [totalSupply, setTotalSupply] = useState('???');
	const [proof, setProof] = useState(null);
	const { data: signer } = useSigner();
	const { chains, switchNetwork } = useSwitchNetwork();
	let connectedChainId = connectData?.chain.id;
	let validChainId = chain.mainnet.id;


	const contract = useContract({
	  addressOrName: CONTACT_ADDRESS,
	  contractInterface: CONTACT_ABI,
	  signerOrProvider: signer,
	});

	useEffect(() => {
	  (async () => {
	    if(address && signer && connectedChainId==validChainId) {
	      const r = await contract.totalSupply();
	      setTotalSupply(r.toString());
	    }
	  })();
	}, [address, signer]);

	useEffect(() => {
		if(address) {
			let str = address.slice(0,6) + '...' + address.slice(-4);
			setProfile(str);
			const root = `0x${tree.getRoot().toString('hex')}`;
			// console.log('root', root);
			const proof = getAllowedItemProof(tree, address);
			setProof(proof);
			// console.log('proof', proof);
		}
	}, [address]);

	useEffect(() => {
		if(connectedChainId != validChainId) {
			switchNetwork?.(validChainId);
		}
	}, [connectData]);

  
	const price = '0.38';
	const { data, isError, isLoading, writeAsync } = useContractWrite(
		{
			addressOrName: CONTACT_ADDRESS,
			contractInterface: CONTACT_ABI,
			functionName: 'preSaleMint',
			args: [proof],
			overrides: {
				value: ethers.utils.parseEther(price),
			},
		}
	);

	// const price = '0.4';
	// const { data, isError, isLoading, writeAsync } = useContractWrite(
	// 	{
	// 		addressOrName: CONTACT_ADDRESS,
	// 		contractInterface: CONTACT_ABI,
	// 	},
	// 	'publicMint',{
	// 		args: [mintNum],
	// 		overrides: {
	// 			value: ethers.utils.parseEther(price).mul(mintNum),
	// 		},
	// 	}
	// );

	const mint = async () => {
	  if(connectedChainId==validChainId) {
	  try {
	    const receipt = await writeAsync();
	    const tx = receipt?.hash.slice(0,6) + '...' + receipt?.hash.slice(-4);
	    Swal.fire({
	      icon: 'success',
	      title: 'Success',
	      html:
	      'Send transaction successfully.<br/>' +
	      `your tx: <a style="color: blue;" href="https://etherscan.io/tx/${receipt.hash}">${tx}</a> `,
	      confirmButtonColor: '#FFF732',
	      customClass: {
	        confirmButton: 'confirm-button-class'
	      },
	    });
	  } catch (error) {
	    console.error(error);
	    Swal.fire({
	      title: 'Error',
	      text: web3ErrorToMsg(error),
	      icon: 'error',
	      confirmButtonColor: '#FFF732',
	      customClass: {
	        confirmButton: 'confirm-button-class'
	      },
	    });
	  }
		}
	};

	// const comingSoon = async () => {
	// 	Swal.fire({
	// 		icon: 'info',
	// 		title: 'Coming Soon...',
	// 		confirmButtonColor: '#FFF732',
	// 		customClass: {
	// 			confirmButton: 'confirm-button-class'
	// 		},
	// 	});
	// };

	const subMintNum = () => {
		if(mintNum > 1)
			setMintNum(mintNum-1);
	};

	const addMintNum = () => {
		if(mintNum < 5)
			setMintNum(mintNum+1);
	};

	return (
		<div className={styles.section}>
			<div className={styles.header}>
				<Image className={styles.logo} src={logo} width={98.5} height={61.5} alt=''/>
				<div className={styles.mediaBox}>
					<Link href="https://twitter.com/meloscout_nft"><a target="_blank" rel="noreferrer"><Image src={twLogo} width={50} height={50} alt=''/></a></Link>
					<Link href="https://discord.com/invite/dM4bdgkRAK"><a target="_blank" rel="noreferrer"><Image src={dcLogo} width={50} height={50} alt=''/></a></Link>
					<Link href="https://opensea.io/collection/meloscoutnft"><a><Image src={osLogo} width={50} height={50} alt=''/></a></Link>
				</div>
			</div>
			{address && <button className={styles.profile} onClick={() => disconnect()}>{ensName ?? profile}</button>} 
			<div className={styles.imgBox}>
				<Image src={logo} width={394} height={246} alt=''/>
			</div>
			{!address && <button className={styles.btn} onClick={() => connect()}>Connect</button>}
			{error && <div {...connectError()}></div>}
			{address && 
			<div className={styles.mintCard}>
				<div className={styles.mintCounter}>
					<button className={styles.countBtn}><Image src={min} width={15} height={10} alt=''/></button>
					<div className={styles.countNum}>{mintNum}</div>
					<button className={styles.countBtn}><Image src={add} width={20} height={15} alt=''/></button>
				</div>
				<button className={styles.mintBtn} onClick={() => mint()}>Mint</button>
				<div className={styles.mintData}>{totalSupply}/888 minted <br/>
					<br/>Presale 0.38 ETH
					<br/>Public sale 0.4 ETH
				</div>
			</div>
			}
		</div>
	);
};

export default FrontCover;
