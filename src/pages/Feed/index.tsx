import React, {useMemo} from 'react'
import {Card} from '../../components/Card';

import {Column, Container, Title, TitleHighlight} from './styles';
import {UserInfo} from "../../components/UserInfo";

const Feed = () => {

    const mockedCards = useMemo(() => {
        const randomNumber = Math.floor(Math.random() * 5) + 3;
        return Array.from({length: randomNumber}, (_, index) => <Card key={`card${index}`}/>);
    }, []);

    const mockedUsers = useMemo(() => {
        const usersNumber = 5
        return Array.from({length: usersNumber}, (_, index) => {
            const randomPercentual = Math.floor(Math.random() * 100);
            return <UserInfo key={`userInfo${index}`} name="Marcelo Juncken" percentual={randomPercentual}/>;
        });
    }, []);

    return (
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                {mockedCards}
            </Column>
            <Column flex={1}>
                <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                {mockedUsers}
            </Column>
        </Container>
    )
}

export {Feed};