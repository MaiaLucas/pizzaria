import PizzaModel from "./Pizzas";

export default interface VendasModel {
  id?: string;
  dbId?: string;
  date: string;
  value: number;
  pizzas: Array<{ pizza: PizzaModel; qtd: number }>;
}
