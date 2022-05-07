require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");

const privateKey =
  process.env.PRIVATE_KEY ||
  "0x0000000000000000000000000000000000000000000000000000000000000000";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "matic",
  networks: {
    localhost: {
      timeout: 50000,
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com/v1/d424b1c48f4ff156b7233d4c65d982e9aa3e16b7",
      accounts: [privateKey],
    },
  },
  // etherscan: {
  //   apiKey: process.env.POLYGONSCAN_API_KEY
  // },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
