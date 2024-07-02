import { Alchemy, AlchemySettings, Network } from "alchemy-sdk";

const alchemySettings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_SEPOLIA,
  connectionInfoOverrides: {
    // need to do this to properly setup ethers.js in serverside https://github.com/alchemyplatform/alchemy-sdk-js/issues/400#issuecomment-2151351091
    skipFetchSetup: true,
  },
} satisfies AlchemySettings;

export const alchemy = new Alchemy(alchemySettings);
