const hre = require("hardhat");
const hethers = require("@hashgraph/hethers");

module.exports = async (contractAddress) => {
	const provider = new hre.ethers.providers.JsonRpcProvider(process.env.RELAY_ENDPOINT);
	const wallet = new hre.ethers.Wallet(process.env.OPERATOR_PRIVATE_KEY, provider);

	const payableAmount = hre.ethers.utils.parseEther("5.1");

	const myContract = await hre.ethers.getContractAt("TokenFaucetContract", contractAddress, wallet);
	const tokenSendTx = await myContract.claimTokens({ value: payableAmount });
	const tokenSendRx = await tokenSendTx.wait();
	const txBlockHash = tokenSendRx.blockHash;

	console.log(`\n- Transferred the tokens. Here's the block hash: \n${txBlockHash}`);

	return txBlockHash;
};
