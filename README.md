# How to Deploy Contracts on Hedera Using Hardhat

This project shows how developers can deploy contracts and work with native tokens on the Hedera network using EVM tools and libraries, like Hardhat. A "native" token in this case, is one created and managed using the Hedera Token Service (HTS).

The example contract being tested mimics a faucet for a fungible token (users must pay 5 HBAR to claim 100 tokens). Here's an explanation of the files and flow in this example:

- `TokenFaucetContract.js` is the file used to test that all tasks being automated are performed as expected. This test file uses the Hardhat Runtime Environment (HRE) to run the tasks defined in the `hardhat.config.js` file
- `hardhat.config.js`defines the tasks to perform and points to the relevant scripts for each task. In this file we also specify the custom RPC URL for our network (Hedera Mainnet/Testnet/Previewnet) and a default gas value for transactions
- `deployContract.js` and `transferTokens.js` are scripts that use the HRE to perform those respective contract actions and obtain confirmations from the network
- `TokenFaucetContract.sol` (see contracts folder) uses a libraries of Hedera contracts (precompiles) to create a new fungible token upon contract deployment. The contract also has a function for transferring 100 of those fungible tokens upon receiving 5 HBAR from the contract caller

## Run the Example

Fork the repository to get your own copy! That way you'll be able to make any changes you want to fit your needs.
Be sure to check any requirements for running Hardhat (here)[https://hardhat.org/tutorial/setting-up-the-environment]
You will need to (get a Testnet Hedera account)[https://portal.hedera.com/register]. Be sure to use the credentials for the account with ECDSA keys.

Once ready, use the following commands:

```
npm install
npx hardhat test
```

If the example runs as expected, you should see the following output in the console:

```
  Testing TokenFaucetContract...

- Deployed the contract (token faucet). Here's the contract address:
0xe8828BbB5D484599b12ca637D7BDF2F9E928Cf76
    ✔ Should be able to deploy a contract that creates a Hedera token (17685ms)

- Transferred the tokens. Here's the block hash:
0x8ebf5e22c772f391a37b921690e2c760d2849a5e9689a60380e21db0fead8377
    ✔ Should be able to make a contract call to claim fungible tokens (6422ms)


  2 passing (24s)
```

## Resources

- (Hedera Documentation)[https://docs.hedera.com/hedera/core-concepts/smart-contracts]
- (Hashio)[https://swirldslabs.com/hashio/] hosted by Swirlds Labs
- The following tasks may be helpful to get familiar with Hardhat:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
