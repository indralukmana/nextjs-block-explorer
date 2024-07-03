import { TransactionResponse } from "alchemy-sdk";

export type BlockItem = {
  number: number;
  transactions: TransactionItem[];
};

export type TransactionItem = Pick<
  TransactionResponse,
  "blockNumber" | "from" | "to" | "value" | "hash"
>;
