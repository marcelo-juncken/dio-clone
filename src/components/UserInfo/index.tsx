
import { Container, NameText, Progress} from './styles';
import {Avatar} from "../Avatar";
import {UserInfoProps} from "../../types/components/UserInfo";

const UserInfo = ({name, percentual} : UserInfoProps) => {
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