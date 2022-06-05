import type { NextApiRequest, NextApiResponse } from "next";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
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
  if (req.method === "DELETE") del(req, res);
  else put(req, res);
}

async function del(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;
  try {
    await deleteDoc(doc(db, "pizzas", id as string));

    return res.status(200).json({ message: "Pizza Removida" });
  } catch (e) {
    return res.status(400);
  }
}
async function put(req: NextApiRequest, res: NextApiResponse<Data>) {
  const querySnapshot = await getDocs(collection(db, "pizzas"));
  const data: PizzaModel[] = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data() as PizzaModel);
  });

  return res.status(200).json({ data });
}
