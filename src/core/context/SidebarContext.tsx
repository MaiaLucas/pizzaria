import React, { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SidebarContext = createContext<any>(null);

export function useSidebar() {
  return useContext(SidebarContext);
}

export function SidebarConsumer({ children }: Props) {
  const [toggle, setToggle] = useState(true);
  const [curPage, setCurPage] = useState(0);

  const value = {
    toggle,
    setToggle,
    curPage,
    setCurPage,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}
