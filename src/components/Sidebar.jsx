import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu-icon">&#9776;</div>
      <ul>
        <li><Link to="/">Agendamentos</Link></li>
        <li><Link to="/cadastro-funcionarios">Cadastro de Funcionários</Link></li>
        <li><Link to="/registro-agendamentos">Registro de Agendamentos</Link></li>
        <li><Link to="/historico-pacientes">Histórico de Pacientes</Link></li>
        <li><Link to="/exames">Exames</Link></li>
        <li><Link to="/disponibilidade-horarios">Disponibilidade de Horários</Link></li>
      </ul>
      <div style={{ marginTop: 'auto' }}>
        <i className="fas fa-user"></i> Administrador<br />
        <i className="fas fa-sign-out-alt"></i> Logout<br />
      </div>
    </div>
  );
}
