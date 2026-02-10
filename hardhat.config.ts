import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import { configVariable, defineConfig } from "hardhat/config";
import hardhatVerify from "@nomicfoundation/hardhat-verify";
import { localhost, metis, metisSepolia } from "viem/chains";

const privateKey = "miPrivateKey"
const privateKeyLocal = "privateKeyLocal" // Solo usar si se maneja localhost con: npx hardhat node

export default defineConfig({
    plugins: [
        hardhatToolboxViemPlugin,
        hardhatVerify,
    ],

    solidity: {
        profiles: {
            default: {
                version: "0.8.28",
                settings: {
                    evmVersion: "london",
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                }
            },
            production: {
                version: "0.8.28",
                settings: {
                    evmVersion: "london",
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        },
    },

    networks: {
        localhost: {
            type: "http",
            url: localhost.rpcUrls.default.http[0],
            chainId: 31337,
            accounts: [privateKeyLocal]
        },
        metis: {
            type: "http",
            url: "https://andromeda.metis.io/?owner=1088",
            chainId: 1088,
            accounts: [privateKey]
        },
        metisSepolia: {
            type: "http",
            url: metisSepolia.rpcUrls.default.http[0],
            chainId: metisSepolia.id,
            accounts: [privateKey]
        }
    },
    verify: {
        etherscan: {
            apiKey: process.env.ETHERSCAN_API_KEY || "",
            enabled: true,
        }
    },

    chainDescriptors: {
        1088: {
            name: "Metis Andromeda Mainnet",
            blockExplorers: {
                etherscan: {
                    name: "Andromeda Explorer",
                    url: "https://andromeda-explorer.metis.io/",
                    apiUrl: "https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan/api",
                },
            },
        },
        59902: {
            name: "Metis Sepolia Testnet",
            blockExplorers: {
                etherscan: {
                    name: "Metis Sepolia Explorer",
                    url: "https://sepolia-explorer.metis.io/",
                    apiUrl: "https://api.routescan.io/v2/network/testnet/evm/59901/etherscan/api",
                },
            },
        }
    }
});