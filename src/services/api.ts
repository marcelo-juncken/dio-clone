import axios from 'axios';
import {ILoginFormInput, IRegisterFormInput} from "../types/FormTypes";

const apiBaseUrl = 'http://localhost:3001'

export const fetchUsers = async ({email, password}: ILoginFormInput) => {
    return axios.get(`${apiBaseUrl}/users?email=${email}&password=${password}`);
}

export const createUser = async (userData: IRegisterFormInput) => {
    return axios.post(`${apiBaseUrl}/users`, userData)
}