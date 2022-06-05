import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Button from "../../components/Button";
import db from "../../core/config/firebase";
import { useAlert } from "../../core/context/AlertContext";
import PizzaModel from "../../core/models/Pizzas";
import ListPizza from "./components/list";
import * as S from "./style";

export default function Vendas({ data }: any) {
  const router = useRouter();
  const [pizzas, setPizzas] = useState<PizzaModel[]>([]);
  const { setMessage, setType, setToggle } = useAlert();

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
      <S.Title>Pizzas</S.Title>
      <ListPizza data={pizzas} deletePizza={deletePizza} />

      <S.Container>
        <Button
          color="primary"
          name="Adicionar Pizza"
          onClick={() => router.push("/pizzas/create")}
        />
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
