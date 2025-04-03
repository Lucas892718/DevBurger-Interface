import * as yup from 'yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

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
  Title,
} from './styles';

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('O nome é Obrigatório'),
      email: yup
        .string()
        .email('digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve conter pelo menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        toast.success('Usuário cadastrado com sucesso!😉');

        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else if (status === 400) {
        toast.error('Este email já existe!😶 Faça login para continuar');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('🥶 Erro no servidor! Tente novamente');
    }
  };
  return (
    <Container>
      <LeftContainer>
        <img src={LogoBurger} alt="Logo-DevBurger" />
      </LeftContainer>

      <RightContainer>
        <Title>Criar conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register('name')}></input>
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Email</label>
            <input
              type="email"
              {...register('email')}
              autoComplete="email"
            ></input>
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')}></input>
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Confirme a senha</label>
            <input type="password" {...register('confirmPassword')}></input>
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Registrar-se</Button>
        </Form>

        <p>
          já possui conta ? <Link to="/login">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
