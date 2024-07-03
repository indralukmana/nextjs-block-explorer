"use client";

import { createContext, useState } from "react";

interface BlockTransactionContextType {
  blockIndex: number;
  setBlockIndex: (blockNumber: number) => void;
}

export const BlockTransactionContext =
  createContext<BlockTransactionContextType>({
    blockIndex: 0,
    setBlockIndex: () => {},
  });

export function BlockTransactionProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [blockIndex, setBlockIndex] = useState(0);

  return (
    <BlockTransactionContext.Provider value={{ blockIndex, setBlockIndex }}>
      {children}
    </BlockTransactionContext.Provider>
  );
}
