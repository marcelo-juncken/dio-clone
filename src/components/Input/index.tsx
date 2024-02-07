import React, {useCallback, useState} from 'react'

import {ErrorText, InputContainer, InputText, LeftIconContainer, RightIconContainer} from './styles';
import {IInput} from "./types";
import {useController} from 'react-hook-form';


export const Input = ({name, control, leftIcon, rightIcon, errorMessage, onRightIconClick, ...rest}: IInput) => {

    const {field} = useController({name, control});

    const {type} = rest;

    const [inputType, setInputType] = useState(type);

    const togglePasswordVisibility = useCallback(() => {
        setInputType(prevType => prevType === 'password' ? 'text' : 'password');
    }, []);

    const handleRightIconClick = () => {
        if (name === 'password') {
            togglePasswordVisibility()
        } else if (onRightIconClick) {
            onRightIconClick();
        }
    }

    return (
        <>
            <InputContainer>
                {leftIcon && (<LeftIconContainer>{leftIcon}</LeftIconContainer>)}
                <InputText {...field} {...rest} type={inputType}/>
                {rightIcon && (
                    <RightIconContainer onClick={handleRightIconClick}
                                        aria-label="Toggle password visibility">
                        {rightIcon}
                    </RightIconContainer>
                )}
            </InputContainer>
            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    );
};
