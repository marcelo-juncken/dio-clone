import React, {createContext, useEffect, useState} from 'react';
import {IAuthContext, IAuthContextProvider} from "../types/AuthContext";
import {User} from "../types/User";
import {createUser, fetchEmail, fetchUsers} from "../services/api";
import {ROUTES} from "../routes";
import {useLocation, useNavigate} from "react-router-dom";
import {LoginData, RegisterData} from "../types/FormTypes";
import {clearSession, getSession, saveSession} from "../services/sessionStorage";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProvider) => {

    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate();

    const currentPage = useLocation().pathname

    const isAuthenticated = !!user

    useEffect(() => {
        const storedUser = getSession();
        if (storedUser) {
            setUser(storedUser);
        }
    }, [])

    useEffect(() => {

        const shouldNavigateToFeed = isAuthenticated && currentPage !== ROUTES.FEED;
        const shouldNavigateToLogin = !isAuthenticated && currentPage === ROUTES.FEED;

        if (shouldNavigateToLogin) {
            navigate(ROUTES.LOGIN);
        } else if (shouldNavigateToFeed) {
            navigate(ROUTES.FEED)
        }

    }, [currentPage, isAuthenticated, navigate])


    const signIn = async (loginData: LoginData) => {
        try {
            const {data} = await fetchUsers(loginData);

            if (data.length) {
                saveUserSession(data[0]);
                navigate(ROUTES.FEED);
            } else {
                alert('Usuário ou senha inválido')
            }

        } catch (e: any) {
            alert("Error: " + e.message);
        }
    }

    const saveUserSession = (user: User) => {
        const {id, name, email} = user;
        const sessionData = {id, name, email};
        setUser(sessionData);
        saveSession(sessionData)
    }

    const signUp = async (registerData: RegisterData) => {
        try {
            const {data} = await fetchEmail(registerData.email);
            const emailAlreadyExists = data.length;

            if (emailAlreadyExists) {
                alert('E-mail já cadastrado!');
                return;
            }

            const userData = await createUser(registerData);

            saveUserSession(userData.data);
        } catch (e: any) {
            alert("Error: " + e.message);
        }
    }
    const signOut = () => {
        setUser(null);
        clearSession();
        navigate(ROUTES.HOME);
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    );
};
