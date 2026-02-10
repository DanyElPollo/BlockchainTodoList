import { createConfig, http } from "wagmi";
import { metisSepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
    chains: [metisSepolia],
    connectors: [
        injected(), // metamask
    ],
    transports: {
        [metisSepolia.id]: http(),
    },
});
