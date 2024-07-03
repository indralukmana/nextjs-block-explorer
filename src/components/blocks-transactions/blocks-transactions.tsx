"use client";

import { BlockWithTransactions, TransactionResponse } from "alchemy-sdk";
import { useContext } from "react";
import { BlockList } from "~/components/block-list/block-list";
import { BlockTransactionContext } from "~/components/contexts/block-transaction-context";
import { TransactionList } from "~/components/transaction-list/transaction-list";
import { BlockItem } from "~/components/types/block";

interface BlocksTransactionsProps {
  blocks: BlockItem[];
}

export function BlocksTransactions({ blocks }: BlocksTransactionsProps) {
  const { blockIndex, setBlockIndex } = useContext(BlockTransactionContext);

  const blockNumber = blocks[blockIndex]?.number ?? 0;

  const transactions = blocks[blockIndex]?.transactions ?? [];

  return (
    <div className="grid grid-cols-2 gap-4">
      <BlockList blocks={blocks} setBlockIndex={setBlockIndex} />
      <TransactionList transactions={transactions} blockNumber={blockNumber} />
    </div>
  );
}
