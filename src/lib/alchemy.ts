import "server-only";

import { Alchemy, AlchemySettings, Network } from "alchemy-sdk";
import { headers } from "next/headers";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:3000`;

const alchemySettings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_SEPOLIA,
  connectionInfoOverrides: {
    // need to do this to properly setup ethers.js in serverside
    // https://github.com/alchemyplatform/alchemy-sdk-js/issues/400#issuecomment-2151351091
    // https://github.com/ethers-io/ethers.js/issues/4469#issuecomment-1932145334
    fetchOptions: {
      referrer: baseUrl,
    },
  },
} satisfies AlchemySettings;

export const alchemy = new Alchemy(alchemySettings);
