import React from 'react'

import {ButtonContainer} from './styles';
import {ButtonProps} from "../../types/components/Button";

const Button = ({title, $variant = "PRIMARY", ...rest}: ButtonProps) => {
    return (
        <ButtonContainer $variant={$variant} {...rest}>{title}</ButtonContainer>
    )
}

export {Button}