import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ListaAgendamentos from './pages/ListaAgendamentos';
import CadastroFuncionarios from './pages/CadastroFuncionarios';
import RegistroAgendamentos from './pages/RegistroAgendamentos';
import HistoricoPacientes from './pages/HistoricoPacientes';
import Exames from './pages/Exames';
import DisponibilidadeHorarios from './pages/DisponibilidadeHorarios';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="main-content" style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<ListaAgendamentos />} />
            <Route path="/cadastro-funcionarios" element={<CadastroFuncionarios />} />
            <Route path="/registro-agendamentos" element={<RegistroAgendamentos />} />
            <Route path="/historico-pacientes" element={<HistoricoPacientes />} />
            <Route path="/exames" element={<Exames />} />
            <Route path="/disponibilidade-horarios" element={<DisponibilidadeHorarios />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
