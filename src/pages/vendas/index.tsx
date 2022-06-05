import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import db from "../../core/config/firebase";
import VendasModel from "../../core/models/Vendas";
import ListVendas from "./components/list";
import * as S from "./style";

export default function Vendas({ data }: any) {
  const router = useRouter();
  // vendas do dia
  //vendas dos ultimos 7 dias
  //vendas dos ultimos 30 dias

  const valueToCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <>
      <S.Title>Vendas</S.Title>
      <S.Detail>
        <S.Card>
          <h3>Vendas dos dia</h3>
          <span>{valueToCurrency(1000)}</span>
        </S.Card>
        <S.Card>
          <h3>Vendas dos últimos 7 dias</h3>
          <span>{valueToCurrency(1000)}</span>
        </S.Card>
        <S.Card>
          <h3>Vendas dos últimos 30 dias</h3>
          <span>{valueToCurrency(1000)}</span>
        </S.Card>
      </S.Detail>

      <S.Container>
        <Button
          color="primary"
          name="Cadastrar venda"
          onClick={() => router.push("/vendas/create")}
        />

        <ListVendas data={data} />
      </S.Container>
    </>
  );
}

export async function getServerSideProps() {
  const data: VendasModel[] = [
    {
      id: "id",
      dbId: "dbId",
      value: 2000,
      date: "10/03/2022",
      pizzas: [
        {
          pizza: {
            id: "0ebd157c-404c-4775-b1c0-f8f5859e465a",
            value: 20,
            name: "Portuguesa",
          },
          qtd: 20,
        },
      ],
    },
    {
      id: "id",
      dbId: "dbId",
      value: 2000,
      date: "10/03/2022",
      pizzas: [
        {
          pizza: {
            id: "0ebd157c-404c-4775-b1c0-f8f5859e465a",
            value: 20,
            name: "Portuguesa",
          },
          qtd: 20,
        },
      ],
    },
  ];
  // const vendasDia: any[] = [];
  // const vendas7Dias: any[] = [];
  // const vendas30Dias: any[] = [];
  try {
    // const querySnapshot = await getDocs(collection(db, "vendas"));
    // querySnapshot.forEach((doc) => {
    //   data.push(doc.data());
    // });
  } catch (e) {}
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
