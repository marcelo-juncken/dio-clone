import styled, {css}  from 'styled-components';
import {ButtonContainerType} from "../../types/components/Button";

export const ButtonContainer = styled.button<{$variant : ButtonContainerType}>`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 22px;
    position: relative;

    color: ${({ theme }) => theme.colors.text};
    
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    ${({$variant}) => $variant !== "PRIMARY" && css`
        min-width: 167px;
        height: 33px;

        background-color: ${({ theme }) => theme.colors.secondary};
        
        margin: 16px 0;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`