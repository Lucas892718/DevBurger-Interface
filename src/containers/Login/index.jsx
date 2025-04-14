import * as Yup from 'yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api.js';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

import { toast } from 'react-toastify';
import { Button } from '../../components/Button';
import LogoBurger from '../../assets/LogoDevBurger.png';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title
} from './styles.js';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = Yup.object({
    email: Yup.string()
      .email('digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('Digite uma senha')
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/sessions', {
        email: data.email,
        password: data.password
      }),

      {
        pending: 'Verificando os dados',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate('/admin/produtos');
              } else {
                navigate('/');
              }
            }, 1000);
            return 'Seja Bem-vindo(a)😁';
          }
        },
        error: 'Email ou Senha Incorretos🤕'
      }
    );

    putUserData(userData);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={LogoBurger} alt="Logo-DevBurger" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burger!</span>
          <br />
          Acesse com seu <span> Login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')}></input>
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')}></input>
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>

        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
        <p>
          Entre como Administrador: <span>AdminProject@gmail.com </span>- Senha:{' '}
          <span>DevClub2025</span>
        </p>
      </RightContainer>
    </Container>
  );
}
