import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import { orderStatusOptions } from './orderStatus';
import { Filter, FilteredOptions } from './styles';

import { useMediaQuery } from 'react-responsive';
import { OrdersMobile } from './MobileOrdersLayout';

export function Orders() {
  const [orders, setOrders] = useState([]); /* BackUp */
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [rows, setRows] = useState([]);

  const [activeStatus, setActiveStatus] = useState([0]);

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

  const isMobileDevice = useMediaQuery({ minWidth: 200, maxWidth: 1000 });
  useEffect(() => {
    const table = document.getElementById('tableData');

    if (table) {
      table.style.display = isMobileDevice ? 'none' : 'table';
    }
  }, [isMobileDevice]);
  if (isMobileDevice) {
    return <OrdersMobile />;
  }
  return (
    <>
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
        <Table aria-label="collapsible table" id="tableData">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedidos</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
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
    </>
  );
}
