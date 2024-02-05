import bannerImage from '../../assets/banner.png'
import {Container, TextContent, Title, TitleHighlight} from './styles';
import {Button} from "../../components/Button";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../routes";

export const Home = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente <br/>
                    </TitleHighlight>
                    o seu futuro global agora!</Title>
                <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu
                    novo
                    desafio profissional, evoluindo em comunidade com os melhores experts.</TextContent>
                <Button title="Começar agora" $variant="SECONDARY" onClick={() => navigate(ROUTES.LOGIN)}/>
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal do site."/>
            </div>
        </Container>

    );
}