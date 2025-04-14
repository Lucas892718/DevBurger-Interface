import React, { useEffect } from 'react';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/currenyFormat.js';
import { Table } from '../index.js';
import { TableForMobile } from '../MobileTableCheckout/index.jsx'; // Tabela para mobile
import { useMediaQuery } from 'react-responsive';
import { ButtonGroup, ProductImage, TrashSvg } from './styles.js';
import trashIcon from '../../assets/trash.svg';
export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
    useCart();

  const isMobileDevice = useMediaQuery({ minWidth: 200, maxWidth: 700 });

  useEffect(() => {
    const table = document.getElementById('rootTable');

    if (table) {
      table.style.display = isMobileDevice ? 'none' : 'table';
    }
  }, [isMobileDevice]);
  if (isMobileDevice) {
    return <TableForMobile />;
  }

  return (
    <Table.Root id="rootTable">
      <Table.Header>
        <Table.Tr>
          <Table.Th>Imagem</Table.Th>
          <Table.Th>Produtos</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>

      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt={product.name} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>

                  {product.quantity}
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <div style={{ fontWeight: 'bold' }}>
                  {formatPrice(product.quantity * product.price)}
                </div>
              </Table.Td>
              <Table.Td>
                <TrashSvg
                  src={trashIcon}
                  alt="lixeira"
                  onClick={() => deleteProduct(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td
              style={{
                textAlign: 'center',
                fontSize: '20px'
              }}
              colSpan="5"
            >
              Nenhum produto no carrinho.
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  );
}
