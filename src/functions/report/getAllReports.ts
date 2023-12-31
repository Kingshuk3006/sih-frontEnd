import { collection, getDocs, query, where } from 'firebase/firestore';
import IReport from '../../../Interfaces/reportInterface';
import { db } from '../../../lib/firebaseConfig';

export default async function getAllReports() {
  let reportDataAll: Partial<IReport>[]= [];
  try {
     {
      const q = query(
        collection(db, `report`),
       
      );
      const reportDataSnap = await getDocs(q);
      if (reportDataSnap.empty) {
        return null;
      } else {
        reportDataSnap.forEach((doc) => {
          reportDataAll.push({...doc.data()})
        });
        return reportDataAll;
      }
    }
  } catch (err) {
    console.log(err);
  }
}