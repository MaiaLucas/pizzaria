import React, { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import Alert from "../../components/Alert";

type Props = {
  children: ReactNode;
};

export const AlertContext = createContext<any>(null);

export function useAlert() {
  return useContext(AlertContext);
}

export function AlertConsumer({ children }: Props) {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("error");

  const value = {
    toggle,
    setToggle,
    type,
    setType,
    message,
    setMessage,
  };

  return (
    <AlertContext.Provider value={value}>
      <Alert />
      {children}
    </AlertContext.Provider>
  );
}
