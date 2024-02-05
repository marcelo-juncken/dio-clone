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
import React, {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import {useAuth} from "../../hooks/useAuth";
import {ROUTES} from "../../routes";
import {LoadingSpinner} from "../../components/Spinner";
import {ILoginData} from "../../types/FormTypes";

const schema = yup.object({
    email: yup.string().email('Email inválido.').required('Campo obrigatório.'),
    password: yup.string().min(3, 'No mínimo 3 carácteres').required('Campo obrigatório.')
}).required();
export default function Login() {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {handleLogin} = useAuth();

    const {control, handleSubmit, formState: {errors}} = useForm<ILoginData>({
        resolver: yupResolver(schema),
    });

    const [inputType, setInputType] = useState("password");

    const onSubmit = async (formData: ILoginData) => {
        setIsLoading(true);
        await handleLogin(formData)
        setIsLoading(false);
    }

    const togglePasswordVisibility = useCallback(() => {
        setInputType(prevType => prevType === 'password' ? 'text' : 'password');
    }, []);

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
                               placeholder="Senha" type={inputType}
                               leftIcon={<MdLock/>}
                               rightIcon={<MdRemoveRedEye/>} onRightIconClick={togglePasswordVisibility}/>
                        <Button disabled={isLoading} title="Entrar" $variant="SECONDARY" type="submit"/>
                    </form>
                    {isLoading && <LoadingSpinner/>}
                    <Row>
                        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        <CreateAccountText onClick={() => navigate(ROUTES.REGISTER)}>Criar Conta</CreateAccountText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    )
}