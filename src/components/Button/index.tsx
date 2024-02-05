import React from 'react'

import {ButtonContainer} from './styles';
import {IButton} from "./types";

const Button = ({title, $variant = "PRIMARY", ...rest}: IButton) => {
    return (
        <ButtonContainer $variant={$variant} {...rest}>{title}</ButtonContainer>
    )
}

export {Button}