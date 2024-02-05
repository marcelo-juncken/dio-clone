import React from "react";
import {User} from "./User";
import {LoginData, RegisterData} from "./FormTypes";

export interface IAuthContext {
    user: User | null
    isAuthenticated: boolean
    handleLogin: (loginData: LoginData) => Promise<void>
    handleRegister: (loginData: RegisterData) => Promise<void>
    handleLogout: () => void
}

export interface IAuthContextProvider {
    children: React.ReactNode
}