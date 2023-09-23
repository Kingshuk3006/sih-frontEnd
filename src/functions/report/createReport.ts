import IReport from '../../../Interfaces/reportInterface';
import { db } from '../../../lib/firebaseConfig';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';

const createIssue = async (report: IReport) => {
  try{
    await addDoc(collection(db, 'report'), report);
  }catch(err){
    console.log("There was an error");
    console.error(err);
  }
};

export default createIssue;