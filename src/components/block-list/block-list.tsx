import { BlockWithTransactions } from "alchemy-sdk";
import { ChevronRightIcon, ChevronsLeftRight } from "lucide-react";
import { BlockItem } from "~/components/types/block";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

export function BlockList({
  blocks,
  blockIndex,
  setBlockIndex,
}: {
  blocks: BlockItem[];
  blockIndex: number;
  setBlockIndex: (number: number) => void;
}) {
  return (
    <div className=" flex flex-col gap-2 h-full">
      <h2 className="p-4">Latest 10 Blocks</h2>
      {blocks.map((block, index) => {
        return (
          <div
            key={block.number}
            className="flex flex-col h-full  justify-start"
          >
            <div className=" flex justify-between">
              <div
                className={cn(
                  "border-2 border-r-0 border-muted rounded-l-md p-2 w-full h-full",
                  {
                    "bg-muted": blockIndex === index,
                  }
                )}
              >
                <p>Block: {block.number}</p>
                <Separator />
                <p>
                  Hash: <span className="text-sm">{block.hash}</span>
                </p>
                <Separator />
                <p>Timestamp: {block.timestamp}</p>
              </div>
              <Button
                onClick={() => setBlockIndex(index)}
                className="h-full rounded-none rounded-r-md"
                variant={blockIndex === index ? "secondary" : "outline"}
              >
                <ChevronRightIcon size={24} />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
