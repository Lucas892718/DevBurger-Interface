import React from 'react';
import { useUser } from '../../hooks/UserContext';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';
import { Logout } from './styles';

export default function LeaveButton() {
  const { logout } = useUser();
  const navigate = useNavigate();
  const submit = () => {
    confirmAlert({
      title: 'Você clicou em sair',
      message:
        'Parece que você está querendo deslogar-se de sua conta, tem certeza?',
      buttons: [
        {
          label: 'Sim, quero sair',
          onClick: () => {
            logout();
            navigate('/login');
          },
        },
        {
          label: 'Não, quero ficar',
          close: true,
        },
      ],
    });
  };
  return (
    <>
      <Logout onClick={submit}>sair</Logout>
    </>
  );
}
