export const BLOCK_CONFIRMATION = 6;
export const deploymentChains = ["hardhat", "localhost"];

export interface INetworkConfig {
    name: string,
    tokenName: string,
    tokenSymbol: string,
    initialSupply: string,
}

export interface INetworkChains {
    [key :number]: INetworkConfig
}

export const networkConfig: INetworkChains = {
    5: {
        name: "Goerli",
        tokenName: "Srihari",
        tokenSymbol: "Sri",
        initialSupply: (10*1e18).toString(),
    },
    31337: {
        name: "local",
        tokenName: "TestToken",
        tokenSymbol: "Test",
        initialSupply: (10*1e18).toString(),
    }
}