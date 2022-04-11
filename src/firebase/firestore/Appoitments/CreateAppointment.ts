import '../../config/firebaseClient';
import { doc, setDoc } from 'firebase/firestore';
import IAppoitment from '../../../Entities/Appoitment';
import database from '../DataBase';


const createAppointment = async (Appointment: IAppoitment) => {
  await setDoc(doc(database, "Appointments", Appointment.id as string), Appointment);
}

export default createAppointment;
