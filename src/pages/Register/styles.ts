import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 120px auto 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`


export const Column = styled.div`
    flex: 1;
`

export const Wrapper = styled.div`
    max-width: 350px;
`

export const Title = styled.h2`
    font-family: Open Sans,serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0;
    text-align: left;
    color: #FFFFFF;
    max-width: 20rem;
    
`
export const TitleRegister = styled.p`
    font-family: Open Sans,serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 8px;
    
`

export const SubTitleRegister = styled.p`
    font-family: Open Sans,serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0;
    text-align: left;
    color: #FFFFFF;


    margin-bottom: 35px;    
`

export const PrivacyDeclaration = styled.p`
    font-family: Open Sans,serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 16px;
    
`

export const AlreadyHaveAccountText = styled.p`
    font-family: Open Sans,serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0;
    text-align: left;
    color: #FFFFFF;
    
`

export const LoginText = styled.span`
    font-family: Open Sans,serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0;
    text-align: left;
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
    color: #23DD7A;
    cursor: pointer;
    
    &:hover{
        text-decoration:  underline;
    }
`