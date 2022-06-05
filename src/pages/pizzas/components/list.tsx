import { BiTrashAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import { Item, List, ListTitle } from "../../../components/Table";
import { maskCurrency } from "../../../core/helpers/maks";
import PizzaModel from "../../../core/models/Pizzas";

interface Props {
  data: PizzaModel[];
  deletePizza: (id: string) => void;
}

export default function ListPizza({ data, deletePizza }: Props) {
  const grid = [7, 6, 2, 1];

  return (
    <>
      <List>
        <ListTitle grid={grid}>
          <span>ID</span>
          <span>PIZZA</span>
          <span>VALOR</span>
          <span></span>
        </ListTitle>
        {data.map((el, idx) => {
          const { visual } = maskCurrency(el.value.toString());
          return (
            <Item grid={grid} key={idx}>
              <span>{el.id}</span>
              <span>{el.name}</span>
              <span>{visual}</span>
              <span className="actions">
                <BiTrashAlt
                  onClick={() => {
                    Swal.fire({
                      title: "Tem certeza que deseja deletar esta pizza?",
                      showCancelButton: true,
                      confirmButtonText: "Deletar",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        deletePizza(el.dbId as string);
                      }
                    });
                  }}
                  color="#FF003C"
                />
              </span>
            </Item>
          );
        })}
      </List>
    </>
  );
}
