require("dotenv").config();
const hre = require("hardhat");
const { expect } = require("chai");

describe("Testing TokenFaucetContract...", function () {
	let contractAddress;
	let txBlockHash;

	it("Should be able to deploy a contract that creates a Hedera token", async function () {
		contractAddress = await hre.run("deploy-contract");

		expect(contractAddress).to.not.be.null;
	});

	//

	it("Should be able to make a contract call to claim fungible tokens", async function () {
		txBlockHash = await hre.run("transfer-tokens", { contractAddress });

		expect(txBlockHash).to.not.be.null;
	});
});
