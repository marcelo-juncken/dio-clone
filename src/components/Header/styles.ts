import styled from "styled-components";


export const Wrapper = styled.header`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center
`

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`
export const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    
    & img:hover{
        cursor: pointer;
        background-color: #333;
    }
`;

export const SearchInputContainer = styled.div`
    width: 275px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    display: flex;

    & input {
        background: transparent;
        flex: 1;
        border: 0;
        color: #FFFFFF;
    }
`

export const Logout = styled.span`
    color: #ff5555;
    cursor: pointer;
    margin-right: 16px;
    font-family: 'Open Sans',serif;
    
    &:hover {
        text-decoration: underline;
    }
`
export const Menu = styled.a`
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;


    &:hover{
        text-decoration:  underline;
    }
`
