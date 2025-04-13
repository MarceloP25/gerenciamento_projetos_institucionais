import React, { useState } from 'react';

const ProjectRegistration = () => {
  const [formData, setFormData] = useState({
    edital: '',
    projectName: '',
    year: '',
    startPeriod: '',
    endPeriod: '',
    scope: '',
    actionName: '',
    coordinatorName: '',
    coordinatorEmail: '',
    coCoordinatorName: '',
    coCoordinatorEmail: '',
    internalTargetAudience: '',
    internalTargetQuantity: '',
    externalTargetAudience: '',
    externalTargetQuantity: '',
    state: '',
    city: '',
    neighborhood: '',
    venue: '',
    requestedValue: '',
    scholarshipCount: '',
    fundingTypes: {
      sup1: false,
      sup2: false,
      rexmed: false,
      rexcol: false,
      technical: false,
      higher: false,
      externalCollaborator: false,
    },
    thematicArea: '',
    extensionLine: '',
    actionDetails: '',
    projectClassification: 'classified',
  });

  // Exemplos de dados, ajuste conforme precisar
  const thematicAreas = [
    'Comunicação', 'Cultura', 'Direitos Humanos e Justiça', 'Educação',
    'Meio Ambiente', 'Saúde', 'Tecnologia e Produção', 'Trabalho'
  ];

  const extensionLines = [
    'Alfabetização, Leitura e Escrita', 'Artes Cênicas', 'Artes Integradas', 'Artes Plásticas', 'Artes Visuais',
    'Comunicação Estratégica', 'Desenvolvimento de Produtos', 'Desenvolvimento Regional',
    'Desenvolvimento Rural e Questão Agrária', 'Desenvolvimento Tecnológico', 'Desenvolvimento Urbano',
    'Direitos Individuais e Coletivos', 'Educação Profissional', 'Empreendedorismo',
    'Emprego e Renda', 'Endemias e Epidemias', 'Divulgação Científica e Tecnológica',
    'Esporte e Lazer', 'Estilismo', 'Fármacos e Medicamentos',
    'Formação de Professores', 'Gestão do Trabalho', 'Gestão Informacional',
    'Gestão Institucional', 'Gestão Pública', 'Grupos Sociais Vulneráveis',
    'Infância e Adolescência', 'Inovação Tecnológica', 'Jornalismo',
    'Jovens e Adultos', 'Línguas Estrangeiras', 'Metodologias e Estratégias de Ensino/Aprendizagem',
    'Mídiaartes', 'Mídias', 'Música',
    'Organizações da Sociedade e Movimentos Sociais e Populares', 'Patrimônio Cultural, Histórico e Natural', 'Pessoa com Deficiências, Incapacidades e Necessidades Especiais',
    'Propriedade Intelectual e Patente', 'Questões Ambientais', 'Recursos Hídricos',
    'Resíduos Sólidos', 'Saúde Animal', 'Saúde da Família',
    'Saúde e Proteção no Trabalho', 'Saúde Humana', 'Segurança Alimentar e Nutricional',
    'Segurança Pública e Defesa Social', 'Tecnologia da Informação', 'Turismo',
    'Terceira Idade', 'Uso de Drogas e Dependência Química', 'Desenvolvimento Humano'
  ];

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      width: '100%'
    },
    sidebar: {
      width: '200px',
      backgroundColor: '#006400',
      color: '#ffffff',
      padding: '20px 0',
    },
    menuItem: {
      padding: '15px 20px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    menuItemActive: {
      backgroundColor: '#008000',
      padding: '15px 20px',
      cursor: 'pointer',
    },
    dashboardIcon: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      marginRight: '10px',
      backgroundColor: '#ffffff',
    },

    mainContent: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      padding: '20px',
      width: '100%'
    },

    pageContainer: {
      backgroundColor: '#ffffff',
      border: '2px solid #006400',    
      borderRadius: '5px',
      width: '100%', 
      height: '100%', 
      margin: '0',
      padding: '20px',
    },

    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333333',
      fontSize: '24px',
    },
    subHeading: {
      fontSize: '20px',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#444444',
    },

    formContainer: {
      width: '100%',
      margin: '0 auto',
    },

    formGroup: {
      marginBottom: '15px',
    },
    formRow: {
      display: 'flex',
      gap: '15px',
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#000'
    },

    input: {
      width: '100%',
      padding: '8px',
      border: '1px solid #cccccc',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: '#ffffff',
      color: '#000'
    },
    select: {
      width: '100%',
      padding: '8px',
      border: '1px solid #cccccc',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: '#ffffff',
      color: '#000'
    },
    textarea: {
      width: '100%',
      minHeight: '150px',
      resize: 'vertical',
      border: '1px solid #cccccc',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: '#ffffff',
      color: '#000',
      fontWeight: 'bold'
    },

    periodInputs: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    periodSpan: {
      margin: '0 5px',
    },

    radioGroup: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1px',
      marginBottom: '15px',
    },
    extensionLinesGroup: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '10px',
      marginBottom: '15px',
    },
    radioItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: '#000'
    },

    selectGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },

    // Rodapé do form, com botão centralizado
    formFooter: {
      marginTop: '30px',
      textAlign: 'center',
    },
    reviewMessage: {
      marginBottom: '15px',
      fontStyle: 'italic',
      color: '#333333',
    },
    submitButton: {
      backgroundColor: '#006400',
      color: '#ffffff',
      border: 'none',
      padding: '12px 30px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.3s',
    },
  };

  // Handlers do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      fundingTypes: {
        ...formData.fundingTypes,
        [name]: checked
      }
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você enviaria para o servidor, etc.
  };

  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <div style={styles.menuItem}>
          <span style={styles.dashboardIcon}></span>
          <span>Dashboard</span>
        </div>
        <div style={styles.menuItemActive}>
          <span>Projetos</span>
        </div>
        <div style={styles.menuItem}>
          <span>Orçamentos</span>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div style={styles.mainContent}>
        {/* CONTÊINER BRANCO COM BORDA VERDE */}
        <div style={styles.pageContainer}>
          <h1 style={styles.heading}>Setor de Projetos IFSMG - RP</h1>
          <h2 style={styles.subHeading}>Cadastro de Projeto</h2>

          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="edital">Selecione o Edital</label>
                <select
                  id="edital"
                  name="edital"
                  value={formData.edital}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Selecione</option>
                  <option value="edital1">Edital 1/2025</option>
                  <option value="edital2">Edital 2/2025</option>
                </select>
              </div>

              {/* NOME DO PROJETO */}
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="projectName">Nome do Projeto</label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>

              {/* LINHA COM ANO, PERÍODO, ABRANGÊNCIA */}
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="year">Ano:</label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Período de realização</label>
                  <div style={styles.periodInputs}>
                    <input
                      type="text"
                      name="startPeriod"
                      placeholder="Início"
                      value={formData.startPeriod}
                      onChange={handleInputChange}
                      style={{ ...styles.input, flex: 1 }}
                    />
                    <span style={styles.periodSpan}>a</span>
                    <input
                      type="text"
                      name="endPeriod"
                      placeholder="Fim"
                      value={formData.endPeriod}
                      onChange={handleInputChange}
                      style={{ ...styles.input, flex: 1 }}
                    />
                  </div>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="scope">Abrangência</label>
                  <input
                    type="text"
                    id="scope"
                    name="scope"
                    value={formData.scope}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
              </div>

              {/* NOME DA AÇÃO */}
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="actionName">Nome da Ação</label>
                <input
                  type="text"
                  id="actionName"
                  name="actionName"
                  value={formData.actionName}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>

              {/* COORDENADOR */}
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="coordinatorName">Nome do Coordenador</label>
                  <input
                    type="text"
                    id="coordinatorName"
                    name="coordinatorName"
                    value={formData.coordinatorName}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="coordinatorEmail">Email do Coordenador</label>
                  <input
                    type="email"
                    id="coordinatorEmail"
                    name="coordinatorEmail"
                    value={formData.coordinatorEmail}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
              </div>

              {/* CO-COORDENADOR */}
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="coCoordinatorName">Nome do Co-coordenador</label>
                  <input
                    type="text"
                    id="coCoordinatorName"
                    name="coCoordinatorName"
                    value={formData.coCoordinatorName}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="coCoordinatorEmail">Email do Co-coordenador</label>
                  <input
                    type="email"
                    id="coCoordinatorEmail"
                    name="coCoordinatorEmail"
                    value={formData.coCoordinatorEmail}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
              </div>

              {/* PÚBLICO ALVO INTERNO/EXTERNO */}
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="internalTargetAudience">Discriminar Público Alvo Interno</label>
                  <input
                    type="text"
                    id="internalTargetAudience"
                    name="internalTargetAudience"
                    value={formData.internalTargetAudience}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="internalTargetQuantity">Quantificar Público Alvo Interno</label>
                  <input
                    type="text"
                    id="internalTargetQuantity"
                    name="internalTargetQuantity"
                    value={formData.internalTargetQuantity}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
              </div>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="externalTargetAudience">Discriminar Público Alvo Externo</label>
                  <input
                    type="text"
                    id="externalTargetAudience"
                    name="externalTargetAudience"
                    value={formData.externalTargetAudience}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="externalTargetQuantity">Quantificar Público Alvo Externo</label>
                  <input
                    type="text"
                    id="externalTargetQuantity"
                    name="externalTargetQuantity"
                    value={formData.externalTargetQuantity}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
              </div>

              {/* LOCAL DE REALIZAÇÃO */}
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="state">Estado:</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="city">Município:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="neighborhood">Bairro:</label>
                  <input
                    type="text"
                    id="neighborhood"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="venue">Espaço de Realização:</label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>

              {/* FINANCIAMENTO: VALOR, BOLSAS, TIPOS */}
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="requestedValue">Valor solicitado para financiamento do Projeto</label>
                <input
                  type="text"
                  id="requestedValue"
                  name="requestedValue"
                  value={formData.requestedValue}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Tipos de Financiamento</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', color: '#000', padding: '15px' }}>
                  <div>
                    <input
                      type="checkbox"
                      id="sup1"
                      name="sup1"
                      checked={formData.fundingTypes.sup1}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="sup1">SUP I (20h)</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="sup2"
                      name="sup2"
                      checked={formData.fundingTypes.sup2}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="sup2">SUP II (10h)</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="rexmed"
                      name="rexmed"
                      checked={formData.fundingTypes.rexmed}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="rexmed">REXMED (40h)</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="rexcol"
                      name="rexcol"
                      checked={formData.fundingTypes.rexcol}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="rexcol">REXCOL (15h)</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="technical"
                      name="technical"
                      checked={formData.fundingTypes.technical}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="technical">Ensino Técnico</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="higher"
                      name="higher"
                      checked={formData.fundingTypes.higher}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="higher">Ensino Superior</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="externalCollaborator"
                      name="externalCollaborator"
                      checked={formData.fundingTypes.externalCollaborator}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="externalCollaborator">Colaborador Externo</label>
                  </div>
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="scholarshipCount">Número de Bolsas</label>
                <input
                  type="text"
                  id="scholarshipCount"
                  name="scholarshipCount"
                  value={formData.scholarshipCount}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>

              {/* ÁREA TEMÁTICA */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Área Temática</label>
                <div style={styles.radioGroup}>
                  {thematicAreas.map((area, index) => (
                    <div style={styles.radioItem} key={index}>
                      <input
                        type="radio"
                        id={`area-${index}`}
                        name="thematicArea"
                        value={area}
                        checked={formData.thematicArea === area}
                        onChange={handleRadioChange}
                      />
                      <label htmlFor={`area-${index}`}>{area}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* LINHA DE EXTENSÃO */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Qual a Linha de Extensão?</label>
                <div style={styles.extensionLinesGroup}>
                  {extensionLines.map((line, index) => (
                    <div style={styles.radioItem} key={index}>
                      <input
                        type="radio"
                        id={`line-${index}`}
                        name="extensionLine"
                        value={line}
                        checked={formData.extensionLine === line}
                        onChange={handleRadioChange}
                      />
                      <label htmlFor={`line-${index}`}>{line}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* DETALHES DA AÇÃO */}
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="actionDetails">Detalhes da Ação</label>
                <textarea
                  id="actionDetails"
                  name="actionDetails"
                  value={formData.actionDetails}
                  onChange={handleInputChange}
                  style={styles.textarea}
                />
              </div>

              {/* CLASSIFICAÇÃO E AVALIADORES (2 COLUNAS) */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={styles.label}>Classifique o Projeto</label>
                  <div style={styles.radioItem}>
                    <input
                      type="radio"
                      id="classified"
                      name="projectClassification"
                      value="classified"
                      checked={formData.projectClassification === "classified"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="classified">Classificado</label>
                  </div>
                  <div style={styles.radioItem}>
                    <input
                      type="radio"
                      id="unclassified"
                      name="projectClassification"
                      value="unclassified"
                      checked={formData.projectClassification === "unclassified"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="unclassified">Sem classificação</label>
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <label style={styles.label}>Selecione os Avaliadores</label>
                  <div style={styles.selectGroup}>
                    <select name="evaluator1" style={styles.select}>
                      <option value="">Selecione</option>
                      <option value="evaluator1">Avaliador 1</option>
                      <option value="evaluator2">Avaliador 2</option>
                    </select>
                    <select name="evaluator2" style={styles.select}>
                      <option value="">Selecione</option>
                      <option value="evaluator1">Avaliador 1</option>
                      <option value="evaluator2">Avaliador 2</option>
                    </select>
                  </div>
                </div>
              </div>

              <div style={styles.formFooter}>
                <p style={styles.reviewMessage}>
                  Antes de finalizar a operação, revise todo o documento.
                </p>
                <button type="submit" style={styles.submitButton}>CADASTRAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRegistration;