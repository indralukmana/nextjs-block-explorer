"use server";

import { BlocksTransactions } from "~/components/blocks-transactions/blocks-transactions";
import { BlockTransactionProvider } from "~/components/contexts/block-transaction-context";
import { BlockItem, TransactionItem } from "~/components/types/block";
import { alchemy } from "~/lib/alchemy";

export default async function Home() {
  const latestBlockNumber = await alchemy.core.getBlockNumber();

  const latest10BlocksNumber = new Array(10)
    .fill(0)
    .map((_, index) => latestBlockNumber - index);

  const latest10Blocks = await Promise.all(
    latest10BlocksNumber.map((blockNumber) =>
      alchemy.core.getBlockWithTransactions(blockNumber)
    )
  );

  const blocks = latest10Blocks.map((latestBlock) => {
    const transactions = latestBlock.transactions.map<TransactionItem>(
      (transaction) => {
        return {
          hash: transaction.hash,
          blockNumber: transaction.blockNumber,
          from: transaction.from,
          to: transaction.to,
          value: transaction.value,
        };
      }
    );

    return {
      number: latestBlock.number,
      transactions,
    };
  });

  return (
    <main className="min-h-screen grid grid-rows-2 gap-4 p-4">
      <BlockTransactionProvider>
        <BlocksTransactions blocks={blocks} />
      </BlockTransactionProvider>
    </main>
  );
}
