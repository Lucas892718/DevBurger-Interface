import React from 'react';
import { useCart } from '../../hooks/CartContext';
import { Table } from '../index.js';
import { formatPrice } from '../../utils/currenyFormat.js';
import { ButtonGroup, EmptyMessage, ProductImage, TrashSvg } from './styles.js';
import trashIcon from '../../assets/trash.svg';
export function CartItems() {
  const {
    cartProducts,
    increaseProduct,
    decreaseProduct,
    deleteProduct,
    upDateLocalStorage
  } = useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
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
          <EmptyMessage />
        )}
      </Table.Body>
    </Table.Root>
  );
}
