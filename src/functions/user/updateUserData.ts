import { doc, updateDoc } from 'firebase/firestore';
import IUser from '../../../Interfaces/userInterface';
import { db } from '../../../lib/firebaseConfig';

export default async function updateUserData(
  userid: string | undefined,
  data: Partial<IUser>
) {
  try {
    const userDocRef = doc(db, `users/${userid}`);
    await updateDoc(userDocRef, data);
  } catch (err) {
    console.log(err);
  }
}
