import React from 'react'
import logo from '../../assets/logo-dio.png';
import {useNavigate} from "react-router-dom";
import {Button} from '../Button';

import {Container, Logout, Menu, MenuRight, Row, SearchInputContainer, UserName, Wrapper} from './styles';
import {Avatar} from "../Avatar";
import {ROUTES} from "../../routes";
import {useAuth} from "../../hooks/useAuth";

export const Header = () => {

    const {isAuthenticated, user, signOut} = useAuth();
    const navigate = useNavigate();

    const handleLogoClick = () => {
        if (isAuthenticated) {
            navigate(ROUTES.FEED)
        } else {
            navigate(ROUTES.HOME)
        }
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img onClick={handleLogoClick} src={logo} alt="Logo da dio"/>
                    {isAuthenticated &&
                        (<>
                            <SearchInputContainer>
                                <input placeholder='Buscar...'/>
                            </SearchInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>)
                    }
                </Row>
                <Row>
                    {isAuthenticated && !!user ? (
                        <>
                            <UserName>{user.name}</UserName>
                            <Avatar/>
                            <Logout onClick={signOut}>Sair</Logout>
                        </>

                    ) : (
                        <>
                            <MenuRight onClick={() => navigate(ROUTES.HOME)}>Home</MenuRight>
                            <Button onClick={() => navigate(ROUTES.LOGIN)} title="Entrar"/>
                            <Button onClick={() => navigate(ROUTES.REGISTER)} title="Cadastrar"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}
