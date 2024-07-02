import { Button } from "~/components/ui/button";
import { alchemy } from "~/lib/alchemy";

export default async function Home() {
  let blockTagOrHash = "latest";
  let blockWithTransactions = await alchemy.core.getBlockWithTransactions(
    blockTagOrHash
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Initiate</Button>
      {blockWithTransactions.transactions.map((transaction) => {
        return <div key={transaction.hash}>{transaction.hash}</div>;
      })}
    </main>
  );
}
