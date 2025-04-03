import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  InputSearch,
  ContainerItemsFiltred,
  CardProduct,
  ProductNotFound
} from './styles.js';

export const SearchProduct = ({ products, setFilteredProducts }) => {
  // 1. Verificação de props
  if (!products || !setFilteredProducts) {
    console.error(
      'Os props "products" e "setFilteredProducts" devem ser fornecidos.'
    );
  }

  // 2. Estado
  const [searchText, setSearchText] = useState(''); // Texto de pesquisa

  // 3. Função de busca
  const handleSearch = (nameValue) => {
    const searchValue = nameValue.toLowerCase();
    setSearchText(searchValue); // Atualiza o texto da pesquisa

    if (searchValue === '') {
      setFilteredProducts(products); // Exibe todos os produtos se o input estiver vazio
    } else {
      const filteredItems = products.filter((product) =>
        product.name?.toLowerCase().includes(searchValue)
      );
      setFilteredProducts(filteredItems);
    }
  };

  // 4. JSX/Renderização
  return (
    <Container>
      <InputSearch
        placeholder="Pesquisar o nome do produto"
        value={searchText} // Valor que o usuário digita
        onChange={(product) => handleSearch(product.target.value)}
      />

      <ContainerItemsFiltred>
        {products.length > 0 ? (
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        ) : (
          <ProductNotFound>Produto nao encontrado</ProductNotFound>
        )}
      </ContainerItemsFiltred>
    </Container>
  );
};

SearchProduct.propTypes = {
  products: PropTypes.array.isRequired,
  setFilteredProducts: PropTypes.func.isRequired
};
