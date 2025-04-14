import React, { useEffect, useState } from 'react';
import { api } from '../../../../services/api';
import {
  Container,
  ProductImage,
  EditButton,
  InfoGrid,
  InfoItem,
  Label,
  TdImage
} from './styles';
import Table from '@mui/material/Table';

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Pencil, XCircle } from '@phosphor-icons/react';
import { formatPrice } from '../../../../utils/currenyFormat';
import { CheckBox } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { SearchProduct } from '../../../../components/SearchProduct';
import { Value } from '../../Orders/MobileOrdersLayout/styles';
import { TableBodyProducts, Td, Tr } from './styles';

export function ProductsMobileLayout() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');

      setProducts(data);
      setFilteredProducts(data);
    }
    loadProducts();
  }, []);

  function ifOffer(offer) {
    if (offer) {
      return <CheckBox style={{ color: 'green', fontSize: '25px' }} />;
    } else {
      return <XCircle style={{ color: 'red', fontSize: '25px' }} />;
    }
  }

  function editProduct(product) {
    navigate('/admin/editar-produtos', { state: { product } });
  }

  return (
    <Container>
      <SearchProduct
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <TableContainer component={Paper} className="tableContainer">
        <Table
          sx={{ width: '100%', maxWidth: '100%' }}
          aria-label="simple table"
        >
          <TableBodyProducts>
            {filteredProducts.map((products) => (
              <Tr key={products.id}>
                <Td>
                  <InfoGrid>
                    <InfoItem>
                      <Label>Nome:</Label>
                      <Value>{products.name}</Value>
                    </InfoItem>

                    <InfoItem>
                      <Label>Categoria:</Label>
                      <Value>{products.category.name}</Value>
                    </InfoItem>

                    <InfoItem>
                      <Label>Preço:</Label>
                      <Value>{formatPrice(products.price)}</Value>
                    </InfoItem>

                    <InfoItem>
                      <Label>Oferta:</Label>
                      <Value>{ifOffer(products.offer)}</Value>
                    </InfoItem>
                  </InfoGrid>
                </Td>

                <TdImage>
                  <ProductImage src={products.url} />
                  <div>
                    <EditButton onClick={() => editProduct(products)}>
                      <Pencil />
                    </EditButton>
                  </div>
                </TdImage>
              </Tr>
            ))}
          </TableBodyProducts>
        </Table>
      </TableContainer>
    </Container>
  );
}
