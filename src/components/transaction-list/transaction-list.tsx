import { TransactionResponse } from "alchemy-sdk";
import { TransactionItem } from "~/components/types/block";
import { Separator } from "~/components/ui/separator";

export function TransactionList({
  transactions,
  blockNumber,
}: {
  transactions: TransactionItem[];
  blockNumber: number;
}) {
  console.log(transactions);
  return (
    <div className=" flex flex-col gap-2">
      <h2 className="p-4">Latest 10 transactions of block {blockNumber}</h2>
      <div
        className="
      flex flex-col bg-secondary border border-secondary rounded divide-y divide-secondary-foreground items-center "
      >
        {transactions.map((transaction, index) => {
          if (index < 10) {
            return (
              <div
                key={transaction.hash}
                className="p-4 w-full flex flex-col  justify-between"
              >
                <p>
                  hash: <span className="text-sm">{transaction.hash}</span>
                </p>
                <Separator />
                <p>
                  from: <span className="text-sm">{transaction.from}</span>
                </p>
                <Separator />
                <p>
                  to: <span className="text-sm">{transaction.to}</span>
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
