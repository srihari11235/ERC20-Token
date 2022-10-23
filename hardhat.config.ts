import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import * as dotenv from 'dotenv';
dotenv.config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_APIKEY = process.env.ETHERSCAN_APIKEY;

const config: HardhatUserConfig = {
  solidity:  {
    compilers: [
      {
        version: "0.8.7"
      },
      {
        version: "0.8.0"
      }
    ]
  },
  defaultNetwork: "hardhat",
  networks: {
    //connect to testnet by configuring the RPC url and providing private key of account with which we can connect.
    //command to specify network 'npx hardhat deploy --network <name>' 
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337      
    },   
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
    player: {
      default: 1
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_APIKEY
  },
};

export default config;
