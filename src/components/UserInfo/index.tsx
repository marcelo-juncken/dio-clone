
import { Container, NameText, Progress} from './styles';
import {Avatar} from "../Avatar";
import {IUserInfo} from "./types";

const UserInfo = ({name, percentual} : IUserInfo) => {
    return (
        <Container>
            <Avatar/>
            <div>
                <NameText>{name}</NameText>
                <Progress percentual={percentual} />
            </div>
        </Container>
    )
}

export { UserInfo }