import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { api } from '../../../../services/api.js';
import { useEffect, useState } from 'react';
import { orderStatusOptions } from './orderStatus.js';
import { Filter, FilteredOptions, Container } from './styles';
export function OrdersMobile() {
  const [orders, setOrders] = useState([]); /* BackUp */
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState([0]);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function LoadOrders() {
      const { data } = await api.get('orders');

      setOrders(data);
      setFilteredOrders(data);
    }
    LoadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      setFilteredOrders(newOrders);
    }
    setActiveStatus(status.id);
  }

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const statusIndex = orderStatusOptions.findIndex(
        (item) => item.id === activeStatus
      );

      if (statusIndex === -1) {
        setFilteredOrders([]);
        return;
      }

      const newFilteredOrders = orders.filter(
        (order) => order.status === orderStatusOptions[statusIndex].value
      );

      setFilteredOrders(newFilteredOrders);
    }
  }, [orders, activeStatus]);

  useEffect(() => {
    handleStatus(orderStatusOptions[0]);
  }, []);

  return (
    <Container>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilteredOptions
            onClick={() => {
              handleStatus(status);
            }}
            key={status.id}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </FilteredOptions>
        ))}
      </Filter>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                orders={orders}
                setOrders={setOrders}
                row={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
