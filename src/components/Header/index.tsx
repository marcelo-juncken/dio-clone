import React from 'react'
import logo from '../../assets/logo-dio.png';
import {useNavigate} from "react-router-dom";
import {Button} from '../Button';

import {Container, Logout, Menu, MenuRight, Row, SearchInputContainer, Wrapper} from './styles';
import {Avatar} from "../Avatar";
import {ROUTES} from "../../routes";
import {useAuth} from "../../hooks/useAuth";

export const Header = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        auth.logout();
        navigate(ROUTES.HOME);
    }

    const handleLogoClick = () => {
        if (auth.isAuthenticated) {
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
                    {auth.isAuthenticated &&
                        <>
                            <SearchInputContainer>
                                <input placeholder='Buscar...'/>
                            </SearchInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    }
                </Row>
                <Row>
                    {auth.isAuthenticated ? (
                        <>
                            <Logout onClick={handleLogOut}>Logout</Logout>
                            <Avatar/>
                        </>

                    ) : (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <Button onClick={() => navigate(ROUTES.LOGIN)} title="Entrar"/>
                            <Button onClick={() => navigate(ROUTES.REGISTER)} title="Cadastrar"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}
