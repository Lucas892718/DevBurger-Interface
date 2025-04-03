import React, { useEffect, useState } from 'react';
import { api } from '../../../services/api.js';
import { Container, ProductImage, EditButton } from './styles.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pencil, XCircle } from '@phosphor-icons/react';
import { formatPrice } from '../../../utils/currenyFormat';
import { CheckBox } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { SearchProduct } from '../../../components/SearchProduct';

export function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');

      setProducts(data);
      setFilteredProducts(
        data
      ); /* Inicializa filteredProducts com todos os produtos */
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="table-row">
              <TableCell className="table-cell">Nome</TableCell>

              <TableCell className="table-cell" align="center">
                Preço
              </TableCell>

              <TableCell className="table-cell" align="center">
                Produtos em Oferta
              </TableCell>

              <TableCell className="table-cell" align="center">
                Imagem do produto
              </TableCell>

              <TableCell className="table-cell" align="center">
                Editar produto
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredProducts.map((products) => (
              <TableRow
                key={products.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {products.name}
                </TableCell>
                <TableCell align="center">
                  {formatPrice(products.price)}
                </TableCell>
                <TableCell align="center">{ifOffer(products.offer)}</TableCell>
                <TableCell align="center">
                  <ProductImage src={products.url} />
                </TableCell>

                <TableCell align="center">
                  <EditButton onClick={() => editProduct(products)}>
                    <Pencil />
                  </EditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
