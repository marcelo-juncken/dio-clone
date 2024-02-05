import React from "react";
import {IUser} from "./User";
import {ILoginData, IRegisterData} from "./FormTypes";

export interface IAuthContext {
    user: IUser | null
    isAuthenticated: boolean
    handleLogin: (loginData: ILoginData) => Promise<void>
    handleRegister: (loginData: IRegisterData) => Promise<void>
    handleLogout: () => void
}

export interface IAuthContextProvider {
    children: React.ReactNode
}