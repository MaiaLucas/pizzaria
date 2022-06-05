import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Item, List, ListTitle } from "../../components/Table";
import db from "../../core/config/firebase";
import { useAlert } from "../../core/context/AlertContext";
import { maskCurrency } from "../../core/helpers/maks";
import PizzaModel from "../../core/models/Pizzas";
import ListPizza from "./components/list";
import * as S from "./style";

export default function CadastrarVenda({ data }: any) {
  const router = useRouter();
  const grid = [7, 6, 2, 1];
  const { setMessage, setType, setToggle } = useAlert();
  const [pizza, setPizza] = useState("");
  const [pizzas, setPizzas] = useState<PizzaModel[]>([]);
  const [value, setValue] = useState({
    visual: "R$ 20",
    value: 20,
  });

  const addPizza = async () => {
    if (!pizza.length) return;

    const data = {
      name: pizza,
      value: value.value,
    };
    try {
      const snapshot = await fetch("/api/pizza", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await snapshot.json();
      setToggle(true);
      setMessage(result.message);
      setType("success");
      getPizzas();
    } catch (error) {
      setToggle(true);
      setMessage("Não foi possível cadastrar a pizza");
      setType("error");
    }
  };

  const deletePizza = async (id: string) => {
    if (!id) return;

    try {
      const snapshot = await fetch(`/api/pizza/${id}`, {
        method: "DELETE",
      });
      const result = await snapshot.json();
      console.log(result);
      setToggle(true);
      setMessage(result.message);
      setType("warning");
      getPizzas();
    } catch (error) {
      setToggle(true);
      setMessage("Não foi possível cadastrar a pizza");
      setType("error");
    }
  };

  const getPizzas = useCallback(async () => {
    const snapshot = await fetch("/api/pizza");
    const result = await snapshot.json();
    setPizzas(result.data);
  }, [pizzas]);

  useEffect(() => {
    setPizzas(data);
  }, []);

  return (
    <>
      <S.Title>Cadastrar Pizza</S.Title>

      <S.Container>
        <S.FormContainer>
          <Input
            value={pizza}
            onChange={(value) => setPizza(value)}
            label="Nome da Pizza"
            placeholder="Digite o nome da pizza"
            name="name"
            mask="none"
          />

          <Input
            value={value.visual}
            onChange={(value) => {
              console.log(value);
              setValue(value);
            }}
            label="Valor da Pizza"
            name="value"
            mask="currency"
          />
        </S.FormContainer>

        <S.Buttons>
          <Button color="primary" name="Adicionar" onClick={() => addPizza()} />
          <Button
            color="primary"
            outlined
            name="Cancelar"
            onClick={() => router.back()}
          />
        </S.Buttons>

        <ListPizza data={pizzas} deletePizza={deletePizza} />
      </S.Container>
    </>
  );
}

export async function getServerSideProps() {
  const data: PizzaModel[] = [];

  const querySnapshot = await getDocs(collection(db, "pizzas"));
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), dbId: doc.id } as PizzaModel);
  });

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
