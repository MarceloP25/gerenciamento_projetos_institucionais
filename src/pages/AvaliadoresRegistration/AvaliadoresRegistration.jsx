import { useState } from 'react';
import './style.css'; // Certifique-se de criar este arquivo CSS

export default function Avaliadores() {
  const [editalFilter, setEditalFilter] = useState('2025/1');
  
  // Dados de exemplo para os avaliadores
  const avaliadores = [
    { id: 1, nome: "Nome completo", email: "email_intitucional@ifsudestemg.edu.br", campus: "campus", area: "área temática", edital: "edital 2025/1" },
    { id: 2, nome: "Nome completo", email: "email_intitucional@ifsudestemg.edu.br", campus: "campus", area: "área temática", edital: "edital 2025/1" },
    { id: 3, nome: "Nome completo", email: "email_intitucional@ifsudestemg.edu.br", campus: "campus", area: "área temática", edital: "edital 2025/1" },
    { id: 4, nome: "Nome completo", email: "email_intitucional@ifsudestemg.edu.br", campus: "campus", area: "área temática", edital: "edital 2025/1" }
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="menu-item">Visão Geral</div>
        <div className="menu-item active">Projetos</div>
        <div className="menu-item">Orçamentos</div>
      </div>
      
      <div className="main-content">
        <h1 className="title">Setor de Projetos IFSMG - RP</h1>
        
        <div className="evaluators-container">
          <h2 className="subtitle">Avaliadores</h2>
          
          <div className="evaluators-header">
            <div className="filter-container">
              <label className="filter-label">Edital</label>
              <input 
                type="text" 
                className="filter-input" 
                value={editalFilter}
                onChange={(e) => setEditalFilter(e.target.value)}
              />
            </div>
            
            <button className="register-button">Cadastrar Avaliadores</button>
          </div>
          
          <div className="evaluators-list">
            {avaliadores.map((avaliador) => (
              <div key={avaliador.id} className="evaluator-item">
                <div className="evaluator-field nome">{avaliador.nome}</div>
                <div className="evaluator-field email">{avaliador.email}</div>
                <div className="evaluator-field campus">{avaliador.campus}</div>
                <div className="evaluator-field area">{avaliador.area}</div>
                <div className="evaluator-field edital">{avaliador.edital}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}