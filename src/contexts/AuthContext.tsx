import React, {createContext, useEffect, useState} from 'react';
import {IAuthContext, IAuthContextProvider} from "../types/AuthContext";
import {User} from "../types/User";
import {createUser, fetchUsers} from "../services/api";
import {ROUTES} from "../routes";
import {useLocation, useNavigate} from "react-router-dom";
import {LoginData, RegisterData} from "../types/FormTypes";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProvider) => {

    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate();

    const currentPage = useLocation().pathname

    useEffect(() => {

        const onlyLoggedInUsersPages = [ROUTES.FEED]

        if (onlyLoggedInUsersPages.includes(currentPage) && user === null) {
            navigate(ROUTES.LOGIN);
        } else if (!onlyLoggedInUsersPages.includes(currentPage) && user !== null) {
            navigate(ROUTES.FEED)
        }

    }, [currentPage, user, navigate])

    const isAuthenticated = user !== null

    const handleLogin = async (loginData: LoginData) => {
        try {
            const {data} = await fetchUsers(loginData);

            if (data.length) {
                setUser(data[0])
                navigate(ROUTES.FEED);
            } else {
                alert('Usuário ou senha inválido')
            }

        } catch (e: any) {
            alert("Error: " + e.message);
        }
    }

    const handleRegister = async (registerData: RegisterData)  => {
        try {
            const {data} = await fetchUsers(registerData);
            const hasUsersWithSameEmail = data.length > 0;

            if (hasUsersWithSameEmail) {
                alert('E-mail já cadastrado!');
                return;
            }

            const userData  = await createUser(registerData);
            const user = userData.data;

            setUser(user)
        } catch (e: any) {
            console.error("Erro ao criar usuário: ", e);
            alert("Error: " + e.message);
        }
    }
    const handleLogout = () => {
        setUser(null);
        navigate(ROUTES.HOME);
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, handleLogin, handleLogout, handleRegister}}>
            {children}
        </AuthContext.Provider>
    );
};
