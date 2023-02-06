import axios from "axios";

const API_URL = process.env.REACT_APP_API_BOOT;

interface IRecoverPasswor {
    id_user: number,
    id_credencial: number,
}

export const sendSMS = (pasword_recover: IRecoverPasswor) => {
    return axios.post(API_URL + "sms", { ...pasword_recover});
}
export const sendEmail = (pasword_recover: IRecoverPasswor,sandboxMode: boolean) => {
    return axios.post(API_URL + "email", { ...pasword_recover,sandboxMode});
}