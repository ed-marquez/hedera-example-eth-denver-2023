const hre = require("hardhat");
const hethers = require("@hashgraph/hethers");

module.exports = async () => {
	const provider = new hre.ethers.providers.JsonRpcProvider(process.env.RELAY_ENDPOINT);
	const wallet = new hre.ethers.Wallet(process.env.OPERATOR_PRIVATE_KEY, provider);

	const payableAmount = hre.ethers.utils.parseEther("15.1");
	const gasLimit = 4000000;

	const myContract = await hre.ethers.getContractFactory("TokenFaucetContract", wallet);
	const contractDeployTx = await myContract.deploy({ value: payableAmount, gasLimit });
	const contractDeployRx = await contractDeployTx.deployTransaction.wait();
	const contractAddress = contractDeployRx.contractAddress;

	console.log(`\n- Deployed the contract (token faucet). Here's the contract address: \n${contractAddress}`);

	return contractAddress;
};
