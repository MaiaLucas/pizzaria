import React, { useEffect, useState } from "react";
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
import { Item, List, ListTitle, SubList } from "../../../components/Table";
import { maskCurrency } from "../../../core/helpers/maks";
import VendasModel from "../../../core/models/Vendas";

interface Props {
  data: VendasModel[];
}

export default function ListVendas({ data }: Props) {
  const grid = [1, 7, 6, 2];

  return (
    <>
      <List>
        <ListTitle grid={grid}>
          <span></span>
          <span>ID</span>
          <span>DATA</span>
          <span>VALOR</span>
        </ListTitle>
        {data.map((el, idx) => {
          return (
            <React.Fragment key={idx}>
              <DetailList data={el} grid={grid} />
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
}

function DetailList({
  data,
  grid,
}: {
  data: VendasModel;
  grid: Array<number>;
}) {
  const [toggle, setToggle] = useState(true);
  const { visual } = maskCurrency(data.value.toString());
  return (
    <>
      <Item grid={grid}>
        <span className="actions">
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <BiCaretRight /> : <BiCaretDown />}
          </div>
        </span>
        <span>{data.id}</span>
        <span>{data.date}</span>
        <span>{visual}</span>
      </Item>
      {data.pizzas && (
        <>
          <SubList hidden={toggle}>
            <ListTitle grid={[4, 1, 1]}>
              <span>PIZZA</span>
              <span>VALOR</span>
              <span>QTD</span>
            </ListTitle>
            {data.pizzas.map((item, idx) => {
              const { visual } = maskCurrency(item.pizza.value.toString());
              return (
                <Item grid={[4, 1, 1]} key={idx}>
                  <span>{item.pizza.name}</span>
                  <span>{visual}</span>
                  <span>{item.qtd}</span>
                </Item>
              );
            })}
          </SubList>
        </>
      )}
    </>
  );
}
