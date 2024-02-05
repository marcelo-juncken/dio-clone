import React from 'react'

import {ErrorText, InputContainer, InputText, LeftIconContainer, RightIconContainer} from './styles';
import {IInput} from "./types";
import {useController} from 'react-hook-form';


export const Input = ({name, control, leftIcon, rightIcon, errorMessage, onRightIconClick, ...rest}: IInput) => {

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
