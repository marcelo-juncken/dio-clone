import React from 'react'

import {ErrorText, InputContainer, InputText, LeftIconContainer, RightIconContainer} from './styles';
import {InputProps} from "../../types/components/Input";
import {useController} from 'react-hook-form';


export const Input = ({name, control, leftIcon, rightIcon, errorMessage, onRightIconClick, ...rest}: InputProps) => {

    const {field} = useController({name, control});

    return (
        <>
            <InputContainer>
                {leftIcon && (<LeftIconContainer>{leftIcon}</LeftIconContainer>)}
                <InputText {...field} {...rest} />
                {rightIcon && (
                    <RightIconContainer onClick={onRightIconClick}
                                        aria-label="Toggle password visibility">
                        {rightIcon}
                    </RightIconContainer>
                )}
            </InputContainer>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    );
};
