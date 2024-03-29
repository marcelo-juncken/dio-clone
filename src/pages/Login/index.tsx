import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {MdEmail, MdLock, MdRemoveRedEye} from "react-icons/md";
import {useForm} from "react-hook-form"


import {
    Column,
    Container,
    CreateAccountText,
    ForgotPasswordText,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper
} from './styles';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import {useAuth} from "../../hooks/useAuth";
import {ROUTES} from "../../routes";
import {LoginData} from "../../types/FormTypes";
import Spinner from "../../components/Spinner";

const schema = yup.object({
    email: yup.string().email('Email inválido.').required('Campo obrigatório.'),
    password: yup.string().min(3, 'No mínimo 3 carácteres').required('Campo obrigatório.')
}).required();

const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {signIn} = useAuth();

    const {control, handleSubmit, formState: {errors}} = useForm<LoginData>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (formData: LoginData) => {
        setIsLoading(true);
        await signIn(formData)
        setIsLoading(false);
    }


    return (
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input control={control} errorMessage={errors.email?.message} name="email" placeholder="E-mail"
                               leftIcon={<MdEmail/>}/>
                        <Input control={control} errorMessage={errors.password?.message} name="password"
                               placeholder="Senha"
                               leftIcon={<MdLock/>}
                               rightIcon={<MdRemoveRedEye/>}
                               type={"password"}/>
                        <Button disabled={isLoading} title="Entrar" $variant="SECONDARY" type="submit"/>
                    </form>
                    {isLoading && <Spinner/>}
                    <Row>
                        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        <CreateAccountText onClick={() => navigate(ROUTES.REGISTER)}>Criar Conta</CreateAccountText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    )
}

export default Login;