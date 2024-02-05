import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    $variant?: ButtonContainerType
}

export type ButtonContainerType = 'PRIMARY' | 'SECONDARY';