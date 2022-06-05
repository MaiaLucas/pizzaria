import * as S from "./style";

interface Props {
  name: string;
  onClick: (e: any) => void;
  color: "primary" | "secondary";
  outlined?: boolean;
}

export default function Button({ name, onClick, outlined, color }: Props) {
  return (
    <S.Button outlined={!!outlined} color={color} onClick={onClick}>
      {name}
    </S.Button>
  );
}
