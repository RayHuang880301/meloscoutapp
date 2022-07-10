import { MerkleTree } from 'merkletreejs';
import Swal from 'sweetalert2';
const keccak256 = require('keccak256');

export const getMerkle = (leafs) => {
	const tree = new MerkleTree(leafs, keccak256, {
		sortPairs: true
	});
	return tree;
};

export const getAllowedItemProof = (tree, address) => {
	const hash =  keccak256(address);
	return getProof(tree, hash);
};

function getProof(tree, leaf) {
	return tree.getProof(leaf).map(x => `0x${x.data.toString('hex')}`);
}

export const connectError = () => {
	Swal.fire({
		icon: 'warning',
		title: 'Need to install Metamask Wallet',
		confirmButtonColor: '#FFF732',
		customClass: {
			confirmButton: 'confirm-button-class'
		},
	});
};


export const web3ErrorToMsg = (error) => {
	if (!error) {
		return '';
	}
	return error.error?.message || error.message || error.message || 'Something went wrong';
};