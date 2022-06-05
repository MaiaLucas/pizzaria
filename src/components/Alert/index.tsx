import { useEffect, useState } from "react";
import { useAlert } from "../../core/context/AlertContext";
import * as S from "./style";
interface Props {
  type: "success" | "error" | "info" | "warning";
  message: string;
}

export default function Alert() {
  const { toggle, setToggle, type, message } = useAlert();

  useEffect(() => {
    if (toggle) {
      setTimeout(() => {
        setToggle(false);
      }, 1500);
    }
  }, [toggle]);

  if (!toggle) return null;
  return <S.Alert type={type}>{message}</S.Alert>;
}
