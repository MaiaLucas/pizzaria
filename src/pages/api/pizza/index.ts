import type { NextApiRequest, NextApiResponse } from "next";
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../../../core/config/firebase";
import { v4 as uuidv4 } from "uuid";
import PizzaModel from "../../../core/models/Pizzas";

interface Data {
  message?: string;
  data?: any;
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") post(req, res);
  else get(req, res);
}

async function post(req: NextApiRequest, res: NextApiResponse<Data>) {
  const pizza = JSON.parse(req.body);
  console.log(pizza);

  const data: PizzaModel = {
    id: uuidv4(),
    name: pizza.name,
    value: pizza.value,
  };
  try {
    const docRef = await addDoc(collection(db, "pizzas"), data);

    return res.status(200).json({ message: "Pizza Cadastrada" });
  } catch (e) {
    return res.status(400);
  }
}
async function get(req: NextApiRequest, res: NextApiResponse<Data>) {
  const querySnapshot = await getDocs(collection(db, "pizzas"));
  const data: PizzaModel[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), dbId: doc.id } as PizzaModel);
  });

  return res.status(200).json({ data });
}
