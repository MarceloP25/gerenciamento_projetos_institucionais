import { useState } from 'react';
import './style.css'; // Certifique-se de criar este arquivo CSS

export default function HomeProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [editalFilter, setEditalFilter] = useState('2025/1');
  
  // Dados de exemplo para os projetos
  const projetos = [
    { id: 1, nome: "Nome projeto", coordenador: "Nome coordenador", campus: "campus", area: "área temática", edital: "edital 2025/1" },
    { id: 2, nome: "Nome projeto", coordenador: "Nome coordenador", campus: "campus", area: "área temática", edital: "edital 2025/1" },
    { id: 3, nome: "Nome projeto", coordenador: "Nome coordenador", campus: "campus", area: "área temática", edital: "edital 2025/1" },
    { id: 4, nome: "Nome projeto", coordenador: "Nome coordenador", campus: "campus", area: "área temática", edital: "edital 2025/1" }
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
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="buttons-container">
          <button className="action-button">Cadastrar novo projeto</button>
          <button className="action-button">Avaliadores</button>
        </div>
        
        <div className="filter-container">
          <label className="filter-label">Edital</label>
          <input 
            type="text" 
            className="filter-input" 
            value={editalFilter}
            onChange={(e) => setEditalFilter(e.target.value)}
          />
        </div>
        
        <div className="projects-list">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="project-item">
              <div className="project-field">{projeto.nome}</div>
              <div className="project-field">{projeto.coordenador}</div>
              <div className="project-field">{projeto.campus}</div>
              <div className="project-field">{projeto.area}</div>
              <div className="project-field">{projeto.edital}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}