import {User} from "../types/User";

const userKey = 'user'
export const saveSession = (user: User) => {
    localStorage.setItem(userKey, JSON.stringify(user));
};

export const getSession = () => {
    const user = localStorage.getItem(userKey);
    return user ? JSON.parse(user) : null;
};

export const clearSession = () => {
    localStorage.removeItem(userKey);
};