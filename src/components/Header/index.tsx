import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { useSidebar } from "../../core/context/SidebarContext";
import * as S from "./styles";

export default function Header() {
  const { setToggle, toggle } = useSidebar();
  const isDesktopOrLaptop = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    setToggle(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    <S.Header>
      {!isDesktopOrLaptop && (
        <S.Icon
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <BiMenu />
        </S.Icon>
      )}
      <S.Title>King Pizza</S.Title>
    </S.Header>
  );
}
