import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import db from "../../core/config/firebase";
import * as S from "./style";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function CadastrarVenda() {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState({
    visual: "R$ 0",
    value: 0,
  });
  const addVenda = () => {};

  return (
    <>
      <S.Title>Cadastrar Venda</S.Title>

      <S.Container>
        <S.FormContainer>
          <Input
            value={title}
            onChange={(value) => setTitle(value)}
            label="Título"
            placeholder="Digite do título da venda"
            name="title"
            mask="none"
          />

          <Input
            value={date}
            onChange={(value) => setDate(value)}
            label="Data da venda"
            placeholder="Digite a data da venda"
            name="date"
            mask="none"
            type="datepicker"
          />
        </S.FormContainer>

        <S.FormContainer>
          <Input
            value={description}
            onChange={(value) => setDescription(value)}
            label="Descrição"
            placeholder="Digite da venda"
            name="description"
            mask="none"
            type="textarea"
          />

          <Input
            value={value.visual}
            onChange={(value) => {
              console.log(value);
              setValue(value);
            }}
            label="Valor arrecadado"
            name="value"
            mask="currency"
          />
        </S.FormContainer>

        <S.Buttons>
          <Button color="primary" name="Adicionar" onClick={() => addVenda()} />
          <Button
            color="primary"
            outlined
            name="Cancelar"
            onClick={() => router.back()}
          />
        </S.Buttons>
      </S.Container>
    </>
  );
}
