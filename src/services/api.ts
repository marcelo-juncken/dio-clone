import axios from 'axios';
import {LoginData, RegisterData} from "../types/FormTypes";

const apiBaseUrl = 'http://localhost:3001'

export const fetchEmail = async (email: string) => {
    return axios.get(`${apiBaseUrl}/users?email=${email}`);
}

export const fetchUsers = async ({email, password}: LoginData) => {
    return axios.get(`${apiBaseUrl}/users?email=${email}&password=${password}`);
}

export const createUser = async (userData: RegisterData) => {
    return axios.post(`${apiBaseUrl}/users`, userData)
}