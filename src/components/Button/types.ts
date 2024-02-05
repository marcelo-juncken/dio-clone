import React from "react";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    $variant?: ButtonContainerType
}

export type ButtonContainerType = 'PRIMARY' | 'SECONDARY';