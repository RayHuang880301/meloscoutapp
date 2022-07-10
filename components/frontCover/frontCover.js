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
import { useSigner , useContract , chain, useAccount, useConnect, useEnsName, useDisconnect, useNetwork } from 'wagmi';
import { useContractWrite, useContractRead } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import Swal from 'sweetalert2';

const FrontCover = () => {
	const { data: account } = useAccount();
	const { data: ensName } = useEnsName({ address: account?.address });
	const { data: connectData, connect, error } = useConnect({
		connector: new InjectedConnector(),
	});
	const { disconnect } = useDisconnect();
	const [profile, setProfile] = useState(null);
	const [mintNum, setMintNum] = useState(1);
	const { data: signer } = useSigner();
	const { chains, switchNetwork } = useNetwork();
	let connectedChainId = connectData?.chain.id;
	let validChainId = chain.mainnet.id;

	// const contract = useContract({
	//   addressOrName: CONTACT_ADDRESS,
	//   contractInterface: CONTACT_ABI,
	//   signerOrProvider: signer,
	// })

	const [totalSupply, setTotalSupply] = useState('???');
	// useEffect(() => {

	//   (async () => {
	//     if(account && signer && connectedChainId==validChainId) {
	//       const r = await contract.totalSupply();
	//       setTotalSupply(r.toString())
	//     }
	//   })();
	// }, [signer, contract,account]);
  
	const price = '0.38';
	const { data, isError, isLoading, writeAsync } = useContractWrite(
		{
			addressOrName: CONTACT_ADDRESS,
			contractInterface: CONTACT_ABI,
		},
		'publicMint',{
			args: mintNum,
			overrides: {
				value: ethers.utils.parseEther(price).mul(mintNum),
			},
		}
	);

	// const mint = async () => {
	//   if(connectedChainId==validChainId) {
	//   try {
	//     const receipt = await writeAsync();
	//     const tx = receipt?.hash.slice(0,6) + `...` + receipt?.hash.slice(-4);
	//     Swal.fire({
	//       icon: 'success',
	//       title: 'Success',
	//       html:
	//       'Send transaction successfully.<br/>' +
	//       `your tx: <a style="color: blue;" href="https://etherscan.io/tx/${receipt.hash}">${tx}</a> `,
	//       confirmButtonColor: '#FFF732',
	//       customClass: {
	//         confirmButton: 'confirm-button-class'
	//       },

	//     })
	//   } catch (error) {
	//     console.error(error)
	//     Swal.fire({
	//       title: 'Error',
	//       text: web3ErrorToMsg(error),
	//       icon: 'error',
	//       confirmButtonColor: '#FFF732',
	//       customClass: {
	//         confirmButton: 'confirm-button-class'
	//       },
	//     })
	//   }
	// }
	// }
	const comingSoon = async () => {
		Swal.fire({
			icon: 'info',
			title: 'Coming Soon...',
			confirmButtonColor: '#FFF732',
			customClass: {
				confirmButton: 'confirm-button-class'
			},
		});
	};

	const connectError = () => {
		Swal.fire({
			icon: 'warning',
			title: 'Need to install Metamask Wallet',
			confirmButtonColor: '#FFF732',
			customClass: {
				confirmButton: 'confirm-button-class'
			},
		});
	};
	useEffect(() => {
		if(account) {
			let str = account?.address.slice(0,6) + '...' + account?.address.slice(-4);
			setProfile(str);
		}
	}, [account]);

	useEffect(() => {
		if(connectedChainId != validChainId) {
			switchNetwork?.(validChainId);
		}
	}, [connectData]);

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
					<Link href="/"><a><Image src={osLogo} width={50} height={50} alt=''/></a></Link>
				</div>
			</div>
			{account && <button className={styles.profile} onClick={() => disconnect()}>{ensName ?? profile}</button>} 
			<div className={styles.imgBox}>
				<Image src={logo} width={394} height={246} alt=''/>
			</div>
			{!account && <button className={styles.btn} onClick={() => connect()}>Connect</button>}
			{error && <div {...connectError()}></div>}
			{account && 
			<div className={styles.mintCard}>
				<div className={styles.mintCounter}>
					<button className={styles.countBtn} onClick={() => subMintNum()}><Image src={min} width={15} height={10} alt=''/></button>
					<div className={styles.countNum}>{mintNum}</div>
					<button className={styles.countBtn} onClick={() => addMintNum()}><Image src={add} width={20} height={15} alt=''/></button>
				</div>
				<button className={styles.mintBtn} onClick={() => comingSoon()}>Mint</button>
				<div className={styles.mintData}>{totalSupply}/888 minted <br/>{price} ETH</div>
			</div>
			}
		</div>
	);
};

function web3ErrorToMsg(error) {
	if (!error) {
		return '';
	}
	return error.error?.message || error.message || error.message || 'Something went wrong';
}


export default FrontCover;
