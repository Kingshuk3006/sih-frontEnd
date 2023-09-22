export default interface IReport{
    patientId: string;
    patientName: string;
    patientAge: number;
    suspectedDisease: string;
    diseaseImage: string;
    isVerifiedByDoc: boolean;
    symptoms: string[];
}


