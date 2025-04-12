import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { formatDate } from '../../../../utils/formatDate';
import { Label, ProductImg, SelectStatus, Td, Tr, Value } from './styles';
import { orderStatusOptions } from './orderStatus';
import { api } from '../../../../services/api';
import { useState } from 'react';

export function Row({ orders, setOrders, row }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function newStatusOrder(id, status) {
    try {
      setLoading(true);
      await api.put(`orders/${id}`, { status });

      const newOrders = orders.map((order) =>
        order._id === id ? { ...order, status } : order
      );

      setOrders(newOrders);
    } catch (err) {
      console.error(
        'Erro ao atualizar status:',
        err.response?.data || err.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell>{row.name}</TableCell>
        <TableCell>{formatDate(row.date)}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>

              <SelectStatus
                options={orderStatusOptions.filter((status) => status.id !== 0)}
                placeholder="Status"
                defaultValue={orderStatusOptions.find(
                  (status) => status.value === row.status || null
                )}
                onChange={(status) => newStatusOrder(row.orderId, status.value)}
                setLoading={loading}
                menuPortalTarget={document.body}
              />

              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.products.map((product) => (
                    <Tr key={product.id}>
                      <Td>
                        <Label>Produto:</Label>
                        <Value>{product.name}</Value>
                      </Td>

                      <Td>
                        <Label>Categoria:</Label>
                        <Value>{product.category}</Value>
                      </Td>

                      <Td>
                        <Label>Imagem:</Label>
                        <ProductImg src={product.url} alt={product.name} />
                      </Td>
                    </Tr>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  orders: PropTypes.array.isRequired,
  setOrders: PropTypes.func.isRequired,
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired,
    status: PropTypes.string.isRequired
  }).isRequired
};
