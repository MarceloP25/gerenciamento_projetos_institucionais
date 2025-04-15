import { useState } from 'react';
import './styles.css';

export default function ProjectEvaluatorPage() {
  const [selectedMenu, setSelectedMenu] = useState('Visão Geral');
  const [evaluator, setEvaluator] = useState({
    name: 'Nome completo',
    email: 'email_institucional@ifsudestemg.edu.br',
    campus: 'campus',
    area: 'área temática',
    lines: 'linhas de extensão'
  });
  
  const [projects, setProjects] = useState([
    'Nome projeto', 
    'Nome projeto'
  ]);

  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="menu-header">Visão Geral</div>
        
        <div 
          className={`menu-item ${selectedMenu === 'Projetos' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Projetos')}
        >
          Projetos
        </div>
        
        <div 
          className={`menu-item ${selectedMenu === 'Orçamentos' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Orçamentos')}
        >
          Orçamentos
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="page-title">Setor de Projetos IFSMG - RP</div>
        
        <div className="profile-container">
          <h2 className="profile-title">Perfil Avaliador</h2>
          
          <div className="profile-grid">
            {/* Left Column */}
            <div className="profile-column">
              <div className="profile-section">
                <h3 className="section-title">Nome</h3>
                <p>{evaluator.name}</p>
              </div>
              
              <div className="profile-section">
                <h3 className="section-title">Email</h3>
                <p>{evaluator.email}</p>
              </div>
              
              <div className="profile-section">
                <h3 className="section-title">Campus de Origem</h3>
                <p>{evaluator.campus}</p>
              </div>
              
              <div className="profile-section">
                <h3 className="section-title">Área Temática de Interesse</h3>
                <p>{evaluator.area}</p>
              </div>
              
              <div className="profile-section">
                <h3 className="section-title">Linhas de Extensão</h3>
                <p>{evaluator.lines}</p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="profile-column">
              <div className="profile-section">
                <h3 className="section-title">Edital</h3>
                <p>edital 2025/1</p>
              </div>
              
              <div className="profile-section">
                <h3 className="section-title">Projetos Avaliados</h3>
                <ul className="projects-list">
                  {projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}