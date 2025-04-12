import React from 'react';
import { useCart } from '../../hooks/CartContext';
import { Table } from './mobileTable.jsx';
import { Wrapper } from './mobileStylesTable.js';
import { ButtonGroup, ProductImage } from './styles.js';
export function TableForMobile() {
  const { cartProducts, increaseProduct, decreaseProduct } = useCart();

  return (
    <Wrapper>
      <Table.Root>
        <Table.Header>
          <Table.Tr>
            <Table.Th>Imagem</Table.Th>
            <Table.Th>Produtos</Table.Th>
            <Table.Th>Quantidade</Table.Th>
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
                <Table.Td>
                  <ButtonGroup>
                    <button onClick={() => decreaseProduct(product.id)}>
                      -
                    </button>
                    {product.quantity}
                    <button onClick={() => increaseProduct(product.id)}>
                      +
                    </button>
                  </ButtonGroup>
                </Table.Td>
              </Table.Tr>
            ))
          ) : (
            <Table.Tr>
              <Table.Td>Seu carrinho esta vázio</Table.Td>
            </Table.Tr>
          )}
        </Table.Body>
      </Table.Root>
    </Wrapper>
  );
}
