import axios from "axios";
import { IExternalCredential } from "../interfaces/externCrerdential";

const API_URL = process.env.REACT_APP_API_EXT_CREDENTIAL;

export const saveExtCredentials = (ext_credent: IExternalCredential) => {
    return axios.post(API_URL + "externo", { ...ext_credent});
}