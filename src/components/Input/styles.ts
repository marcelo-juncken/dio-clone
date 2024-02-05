import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display:flex;
    align-items: center;
    margin-bottom: 8px;
`

export const LeftIconContainer = styled.div`
    margin-right: 10px;
    color: #8647AD;
`

export const RightIconContainer = styled.div`
    cursor: pointer;
    margin-right: 4px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    flex:1;
    border: 0;
    height: 30px;
    margin-right: 8px;
    padding: 0 10px;

`

export const ErrorText = styled.p`
    color: #e14040;
    font-size: 12px;
    margin: 10px 0;
`