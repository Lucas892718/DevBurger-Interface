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
  if (!products || !setFilteredProducts) {
    console.error(
      'Os props "products" e "setFilteredProducts" devem ser fornecidos.'
    );
  }

  const [searchText, setSearchText] = useState('');

  const handleSearch = (nameValue) => {
    const searchValue = nameValue.toLowerCase();
    setSearchText(searchValue);

    if (searchValue === '') {
      setFilteredProducts(products);
    } else {
      const filteredItems = products.filter((product) =>
        product.name?.toLowerCase().includes(searchValue)
      );
      setFilteredProducts(filteredItems);
    }
  };

  return (
    <Container>
      <InputSearch
        placeholder="Pesquisar algum produto?"
        value={searchText}
        onChange={(product) => handleSearch(product.target.value)}
      />

      <ContainerItemsFiltred>
        {products.length > 0 ? (
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        ) : (
          <ProductNotFound>Produto não encontrado</ProductNotFound>
        )}
      </ContainerItemsFiltred>
    </Container>
  );
};

SearchProduct.propTypes = {
  products: PropTypes.array.isRequired,
  setFilteredProducts: PropTypes.func.isRequired
};
