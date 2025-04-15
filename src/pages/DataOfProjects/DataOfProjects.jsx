import React from 'react';
import './style.css';

function DataOfProjects() {
  return (
    <div className="page-container">
      {/* Menu lateral */}
      <aside className="sidebar">
        <div className="sidebar-logo">IFSMG</div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#visao-geral">Visão Geral</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#orcamentos">Orçamentos</a></li>
          </ul>
        </nav>
      </aside>
      
      {/* Conteúdo principal */}
      <main className="main-content">
        <header className="main-header">
          <h1>Detalhes do Projeto</h1>
        </header>
        
        <section className="project-section">
          <h2 className="section-title">Dados de Projeto</h2>
          
          {/* Linha 1: Edital, Ano, Período e Abrangência */}
          <div className="input-row">
            <div className="input-group">
              <label>Selecione o Edital</label>
              <input type="text" value="Edital 2025" readOnly />
            </div>

            <div className="input-group">
              <label>Ano</label>
              <input type="text" value="2025" readOnly />
            </div>

            <div className="input-group">
              <label>Período de Realização</label>
              <input type="text" value="2025/1" readOnly />
            </div>

            <div className="input-group">
              <label>Abrangência</label>
              <input type="text" value="Estadual" readOnly />
            </div>
          </div>

          {/* Linha 2: Nome da Ação, Coordenador, Email */}
          <div className="input-row">
            <div className="input-group">
              <label>Nome da Ação</label>
              <input type="text" value="Projeto de Extensão" readOnly />
            </div>

            <div className="input-group">
              <label>Nome do Coordenador</label>
              <input type="text" value="João da Silva" readOnly />
            </div>

            <div className="input-group">
              <label>Email do Coordenador</label>
              <input type="email" value="joao.silva@ifsmg.edu.br" readOnly />
            </div>
          </div>

          {/* Linha 3: Públicos Alvo */}
          <div className="input-row">
            <div className="input-group">
              <label>Discriminar Público Alvo Interno</label>
              <input type="text" value="Alunos, Professores" readOnly />
            </div>

            <div className="input-group">
              <label>Discriminar Público Alvo Externo</label>
              <input type="text" value="Comunidade local" readOnly />
            </div>
            
            <div className="input-group">
              <label>Quantificar Público Alvo Interno</label>
              <input type="text" value="120" readOnly />
            </div>

            <div className="input-group">
              <label>Quantificar Público Alvo Externo</label>
              <input type="text" value="80" readOnly />
            </div>
          </div>

          {/* Linha 4: Local de Realização */}
          <div className="input-row">
            <div className="input-group">
              <label>Espaço de Realização</label>
              <input type="text" value="Auditório Central" readOnly />
            </div>

            <div className="input-group">
              <label>Endereço</label>
              <input type="text" value="Av. Exemplo, 123" readOnly />
            </div>

            <div className="input-group">
              <label>Município</label>
              <input type="text" value="Cidade Exemplo" readOnly />
            </div>

            <div className="input-group">
              <label>Estado</label>
              <input type="text" value="MG" readOnly />
            </div>
          </div>

          {/* Linha 5: Valores */}
          <div className="input-row">
            <div className="input-group">
              <label>Valor solicitado para financiamento</label>
              <input type="text" value="R$ 10.000,00" readOnly />
            </div>

            <div className="input-group">
              <label>SUP I</label>
              <input type="text" value="10H" readOnly />
            </div>

            <div className="input-group">
              <label>SUP II</label>
              <input type="text" value="30H" readOnly />
            </div>

            <div className="input-group">
              <label>BEXCOL</label>
              <input type="text" value="15H" readOnly />
            </div>
          </div>

          {/* Linha 6: Área Temática e Linha de Extensão */}
          <div className="input-row">
            <div className="input-group">
              <label>Área Temática</label>
              <input type="text" value="Ciência e Tecnologia" readOnly />
            </div>

            <div className="input-group">
              <label>Linha de Extensão</label>
              <input type="text" value="Inovação Social" readOnly />
            </div>
          </div>

          {/* Detalhes da Ação */}
          <div className="input-group">
            <label>Detalhes da Ação</label>
            <textarea
              rows="4"
              readOnly
              value="Este projeto visa a integração entre a universidade e a comunidade local por meio de atividades interativas e de formação."
            ></textarea>
          </div>

          {/* Classificação do Projeto */}
          <div className="input-group">
            <label>Classificação do Projeto</label>
            <input type="text" value="Aprovado" readOnly />
          </div>

          {/* Avaliação e Notas do Avaliador */}
          <div className="input-group">
            <label>Avaliador</label>
            <input type="text" value="Maria Oliveira" readOnly />
          </div>
          <div className="input-group">
            <label>Notas do Avaliador</label>
            <textarea
              rows="2"
              readOnly
              value="Projeto com potencial para impacto positivo na comunidade e integração com a universidade."
            ></textarea>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DataOfProjects;
