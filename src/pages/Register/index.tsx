import React, {useState} from 'react';
import {
    AlreadyHaveAccountText,
    Column,
    Container,
    LoginText,
    PrivacyDeclaration,
    SubTitleRegister,
    Title,
    TitleRegister,
    Wrapper
} from "./styles";
import {Input} from "../../components/Input";
import {MdEmail, MdLock, MdPerson, MdRemoveRedEye} from "react-icons/md";
import {Button} from "../../components/Button";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import {RegisterData} from "../../types/FormTypes";
import {useAuth} from "../../hooks/useAuth";
import {ROUTES} from "../../routes";
import Spinner from "../../components/Spinner";

const schema = yup.object({
    name: yup.string().min(3, 'No mínimo 3 carácteres').required('Campo obrigatório.'),
    email: yup.string().email('Email inválido.').required('Campo obrigatório.'),
    password: yup.string().min(3, 'No mínimo 3 carácteres').required('Campo obrigatório.'),
}).required()

const Register = () => {

    const [isLoading, setIsLoading] = useState(false);
    const {handleRegister} = useAuth();
    const navigate = useNavigate();

    const {control, handleSubmit, formState: {errors}} = useForm<RegisterData>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    });

    const onSubmit = async (formData: RegisterData) => {
        setIsLoading(true);
        await handleRegister(formData);
        setIsLoading(false);
    };

    return (
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais
                    rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleRegister>Comece agora grátis</TitleRegister>
                    <SubTitleRegister>Crie sua conta e make the change._</SubTitleRegister>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input control={control} errorMessage={errors.name?.message} name={"name"} placeholder={"Nome"}
                               leftIcon={<MdPerson/>}/>
                        <Input control={control} errorMessage={errors.email?.message} name={"email"}
                               placeholder={"E-mail"}
                               leftIcon={<MdEmail/>}/>
                        <Input control={control} errorMessage={errors.password?.message} name={"password"}
                               placeholder={"Senha"} leftIcon={<MdLock/>} rightIcon={<MdRemoveRedEye/>}
                               type={"password"}/>
                        <Button disabled={isLoading} title={"Criar minha conta"} $variant={"SECONDARY"}
                                type={"submit"}/>
                    </form>
                    {isLoading && <Spinner/>}
                    <PrivacyDeclaration>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de
                        Privacidade e os Termos de Uso da DIO.</PrivacyDeclaration>
                    <AlreadyHaveAccountText>Já tenho conta. <LoginText onClick={() => navigate(ROUTES.LOGIN)}>Fazer
                        login</LoginText></AlreadyHaveAccountText>
                </Wrapper>
            </Column>
        </Container>
    );
};

export default Register;