import { ReactNode } from "react";
import { useSidebar } from "../../core/context/SidebarContext";
import Sidebar from "../Sidebar";
import * as S from "./style";

interface Props {
  children: ReactNode;
}

export default function LayoutMain({ children }: Props) {
  const { toggle } = useSidebar();

  return (
    <S.Wrapper>
      {toggle && <Sidebar />}
      <S.Container showSidebar={toggle}>{children}</S.Container>
    </S.Wrapper>
  );
}
