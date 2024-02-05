import React, {useCallback, useEffect, useState} from 'react';
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
import {createUser, fetchUsers} from "../../services/api";
import * as yup from "yup";
import {IRegisterFormInput} from "../../types/FormTypes";
import {useAuth} from "../../hooks/useAuth";
import {ROUTES} from "../../routes";
import {LoadingSpinner} from "../../components/Spinner";

const schema = yup.object({
    name: yup.string().min(3, 'No mínimo 3 carácteres').required('Campo obrigatório.'),
    email: yup.string().email('Email inválido.').required('Campo obrigatório.'),
    password: yup.string().min(3, 'No mínimo 3 carácteres').required('Campo obrigatório.'),
}).required()

export const Register = () => {

    const [isLoading, setIsLoading] = useState(false);
    const {login, isAuthenticated} = useAuth();
    const navigate = useNavigate();

    const [inputType, setInputType] = useState("password");

    const {control, handleSubmit, formState: {errors}} = useForm<IRegisterFormInput>({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        if (isAuthenticated) {
            navigate(ROUTES.FEED);
        }
    })


    const onSubmit = async (formData: IRegisterFormInput) => {
        try {
            setIsLoading(true);
            const response = await fetchUsers(formData);
            const usersWithEmail = response.data;

            if (usersWithEmail.length > 0) {
                alert('E-mail já cadastrado!');
                setIsLoading(false);
                return;
            }

            await createUser(formData);

            login();
            navigate(ROUTES.FEED);
        } catch (e: any) {
            console.error("Erro ao criar usuário: ", e);
            setIsLoading(false);
            alert("Error: " + e.message);
        }
    };


    const togglePasswordVisibility = useCallback(() => {
        setInputType(prevType => prevType === 'password' ? 'text' : 'password');
    }, []);

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
                               leftIcon={<MdPerson/>}></Input>
                        <Input control={control} errorMessage={errors.email?.message} name={"email"}
                               placeholder={"E-mail"}
                               leftIcon={<MdEmail/>}></Input>
                        <Input control={control} errorMessage={errors.password?.message} name={"password"}
                               placeholder={"Senha"} leftIcon={<MdLock/>} type={inputType} rightIcon={<MdRemoveRedEye/>}
                               onRightIconClick={togglePasswordVisibility}></Input>
                        <Button disabled={isLoading} title={"Criar minha conta"} $variant={"SECONDARY"}
                                type={"submit"}/>
                    </form>
                    {isLoading && <LoadingSpinner/>}
                    <PrivacyDeclaration>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de
                        Privacidade e os Termos de Uso da DIO.</PrivacyDeclaration>
                    <AlreadyHaveAccountText>Já tenho conta. <LoginText onClick={() => navigate(ROUTES.LOGIN)}>Fazer
                        login</LoginText></AlreadyHaveAccountText>
                </Wrapper>
            </Column>
        </Container>
    );
};