import axios from 'axios';
import {ILoginData, IRegisterData} from "../types/FormTypes";

const apiBaseUrl = 'http://localhost:3001'

export const fetchUsers = async ({email, password}: ILoginData) => {
    return axios.get(`${apiBaseUrl}/users?email=${email}&password=${password}`);
}

export const createUser = async (userData: IRegisterData) => {
    return axios.post(`${apiBaseUrl}/users`, userData)
}