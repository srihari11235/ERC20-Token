import { network } from "hardhat";
import {DeployFunction} from "hardhat-deploy/types"
import { BLOCK_CONFIRMATION, deploymentChains, networkConfig } from "../hardhat-helper";
import verify from "../utils/verify";

const deployToken : DeployFunction = async ({getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts();
    const { deploy , log } = deployments;
    const chainId = network.config?.chainId || 31337;

    const args = [networkConfig[chainId].tokenName, networkConfig[chainId].tokenSymbol, networkConfig[chainId].initialSupply];

    const waitBlockConfirmations = deploymentChains.includes(network.name)
        ? 1
        : BLOCK_CONFIRMATION

    const token = await deploy('Token', {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations:waitBlockConfirmations
    });

    log("Deployed successfully.");

    if(!deploymentChains.includes(network.name) && process.env.ETHERSCAN_APIKEY) {
    //   await verify(token.address, args);
    }

}

export default deployToken;
deployToken.tags = ["all", "token"];