import { BlockWithTransactions } from "alchemy-sdk";
import { BlockItem } from "~/components/types/block";
import { Button } from "~/components/ui/button";

export function BlockList({
  blocks,
  setBlockIndex,
}: {
  blocks: BlockItem[];
  setBlockIndex: (number: number) => void;
}) {
  return (
    <div className="border-2 border-slate-600 rounded-lg p-4">
      <h2>Latest 10 Blocks</h2>
      {blocks.map((block, index) => {
        return (
          <div key={block.number}>
            <p>Block {block.number}</p>
            <Button onClick={() => setBlockIndex(index)}>
              View Transactions
            </Button>
          </div>
        );
      })}
    </div>
  );
}
