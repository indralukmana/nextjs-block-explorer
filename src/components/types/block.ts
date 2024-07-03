import { TransactionResponse } from "alchemy-sdk";

export type BlockItem = {
  number: number;
  hash: string;
  timestamp: number;
  transactions: TransactionItem[];
};

export type TransactionItem = Pick<
  TransactionResponse,
  "blockNumber" | "from" | "to" | "hash"
>;
