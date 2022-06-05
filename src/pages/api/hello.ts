import type { NextApiRequest, NextApiResponse } from "next";
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../../core/config/firebase";

type Data = {
  // message: string;
  [key: string]: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    res.status(200).json({ data });
    // res.status(200).json({ message: `Document written with ID: ${docRef.id}` });
  } catch (e) {
    res.status(401).json({ e });
  }
}
