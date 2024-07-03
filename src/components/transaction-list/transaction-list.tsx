import { TransactionResponse } from "alchemy-sdk";
import { TransactionItem } from "~/components/types/block";

export function TransactionList({
  transactions,
  blockNumber,
}: {
  transactions: TransactionItem[];
  blockNumber: number;
}) {
  return (
    <div className="border-2 border-slate-600 rounded-lg p-4">
      <h2>Latest 10 transactions of block {blockNumber}</h2>
      {transactions.map((transaction, index) => {
        if (index < 10) {
          return (
            <div key={transaction.hash}>
              {transaction.hash.slice(0, 5)}...{transaction.hash.slice(-5)}
            </div>
          );
        }
      })}
    </div>
  );
}
