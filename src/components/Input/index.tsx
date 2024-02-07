import React, {useCallback, useState} from 'react'

import {ErrorText, InputContainer, InputText, LeftIconContainer, RightIconContainer} from './styles';
import {IInput} from "./types";
import {useController} from 'react-hook-form';


export const Input = ({name, control, leftIcon, rightIcon, errorMessage, type = "text", onRightIconClick, ...rest}: IInput) => {

    const {field} = useController({name, control});

    const [inputType, setInputType] = useState(type);

    const handleRightIconClick = useCallback(() => {
        if (type === 'password') {
            setInputType(currentType => currentType === 'password' ? 'text' : 'password');
        } else if (onRightIconClick) {
            onRightIconClick();
        }
    },[onRightIconClick, type]);

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
