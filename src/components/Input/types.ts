import React from "react";
import {Control} from "react-hook-form";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    name: "name" | "email" | "password";
    control: Control<any>;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    errorMessage?: string;
    onRightIconClick?: () => void;
}