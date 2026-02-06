import { http, createConfig } from 'wagmi';
import { baseSepolia, base } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

const chainId = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '84532');
const chain = chainId === 8453 ? base : baseSepolia;

export const config = createConfig({
  chains: [chain],
  connectors: [
    coinbaseWallet({
      appName: process.env.NEXT_PUBLIC_PROJECT_NAME || 'NFT Mint Mini App',
    }),
  ],
  ssr: true,
  transports: {
    [chain.id]: http(),
  },
});

export { chain };
