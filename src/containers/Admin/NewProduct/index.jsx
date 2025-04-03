import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../../services/api.js';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';

import {
  Container,
  Form,
  InputGroup,
  Input,
  InputLabel,
  Label,
  LabelUpload,
  Select,
  SubmitButton,
  ErrorMessage,
  OfferCheckBox
} from './styles.js';
import { toast } from 'react-toastify';

const schema = yup.object({
  name: yup.string().required('Escolha um nome válido'),
  price: yup
    .number()
    .positive()
    .required('Digite o valor do produto')
    .typeError('Digite o valor do produto'),
  category: yup.object().required('Escolha uma categoria para o produto'),
  offer: yup.bool(),
  file: yup
    .mixed()
    .test(
      'required',
      'Escolha uma imagem do produto para continuar',
      (value) => {
        return value && value.length > 0;
      }
    )
    .test('fileSize', 'A imagem deve ter menos de 50MB', (value) => {
      return value && value.length > 0 && value[0].size <= 50000000;
    })
    .test('type', 'A imagem deve ser do tipo PNG ou JPEG', (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
      );
    })
});

export function NewProducts() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append('name', data.name);
    productFormData.append('price', data.price * 100);
    productFormData.append('category_id', data.category.id);
    productFormData.append('file', data.file[0]);
    productFormData.append('offer', data.offer);

    await toast.promise(api.post('/products', productFormData), {
      pending: 'Um momento, cadastrando produto',
      success: 'Produto cadastrado com sucesso',
      error: '🥶 Erro ao adicionar o produto! Tente novamente'
    });
    setTimeout(() => {
      navigate('/admin/produtos');
    }, 2000);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLabel>Nome</InputLabel>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <InputLabel>Preço</InputLabel>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <Image />
            <input
              type="file"
              {...register('file')}
              accept="image/png, image/jpeg"
              onChange={(imageFile) => {
                setFileName(imageFile.target.files[0]?.name);
                register('file').onChange(imageFile);
              }}
            />
            {fileName || 'Nenhum arquivo selecionado'}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>

          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                menuPortalTarget={document.body}
                placeholder="Categorias"
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <OfferCheckBox>
            <input type="checkbox" {...register('offer')} />
            <Label>Produto em oferta?</Label>
          </OfferCheckBox>
        </InputGroup>

        <SubmitButton type="submit">Adicionar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
