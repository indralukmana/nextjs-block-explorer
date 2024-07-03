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

  const shownBlock = latest10Blocks[0].number;

  const shownTransactions = latest10Blocks[0].transactions;

  return (
    <main className="min-h-screen grid grid-rows-2 gap-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-slate-600 rounded-lg p-4">
          <h2>Latest 10 Blocks</h2>
          {latest10Blocks.map((block) => {
            return <div key={block.number}>Block {block.number}</div>;
          })}
        </div>
        <div className="border-2 border-slate-600 rounded-lg p-4">
          <h2>Latest 10 transactions of block {shownBlock}</h2>
          {shownTransactions.map((transaction, index) => {
            if (index < 10) {
              return (
                <div key={transaction.hash}>
                  {transaction.hash.slice(0, 5)}...{transaction.hash.slice(-5)}
                </div>
              );
            }
          })}
        </div>
      </div>
    </main>
  );
}
