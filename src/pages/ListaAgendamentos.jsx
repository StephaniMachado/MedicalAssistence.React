import React, { useEffect, useState } from 'react';
import './ListaAgendamentos.css'; // Crie esse CSS se quiser estilizar

export default function ListaAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  // Aqui você pode trocar por um fetch de API real depois
  useEffect(() => {
    // Exemplo de dados simulados
    const dadosFake = [
      {
        id: 1,
        paciente: 'Maria Silva',
        email: 'maria@gmail.com',
        medico: 'Dra. Ana Paula',
        data: '2025-06-10',
        horario: '10:30',
        telefone: '(11) 98765-4321',
      },
      {
        id: 2,
        paciente: 'João Pedro',
        email: 'joao@gmail.com',
        medico: 'Dr. Marcos',
        data: '2025-06-12',
        horario: '14:00',
        telefone: '(11) 91234-5678',
      },
    ];
    setAgendamentos(dadosFake);
  }, []);

  return (
    <div>
      <h2>Lista de Agendamentos</h2>
      <table className="tabela-agendamentos">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Email</th>
            <th>Médico</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Telefone</th>
            <th>-</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos.map((item) => (
            <tr key={item.id}>
              <td>{item.paciente}</td>
              <td>{item.email}</td>
              <td>{item.medico}</td>
              <td>{item.data}</td>
              <td>{item.horario}</td>
              <td>{item.telefone}</td>
              <td><button>Editar</button></td>
              <td><button>Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
