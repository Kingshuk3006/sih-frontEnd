import { doc, updateDoc } from "firebase/firestore";
import IUser from "../../../Interfaces/userInterface";
import { db } from "../../../lib/firebaseConfig";
import IReport from "../../../Interfaces/reportInterface";

export default async function updateUserData(
  reportId: string | undefined,
  data: Partial<IReport>
) {
  try {
    const userDocRef = doc(db, `report/${reportId}`);
    await updateDoc(userDocRef, data);
  } catch (err) {
    console.log(err);
  }
}