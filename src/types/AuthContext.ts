import React from "react";
import {User} from "./User";
import {LoginData, RegisterData} from "./FormTypes";

export interface IAuthContext {
    user: User | null
    isAuthenticated: boolean
    signIn: (loginData: LoginData) => Promise<void>
    signUp: (loginData: RegisterData) => Promise<void>
    signOut: () => void
}

export interface IAuthContextProvider {
    children: React.ReactNode
}