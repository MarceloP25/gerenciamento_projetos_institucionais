import { useState } from 'react';
import './style.css'; // Crie este arquivo para os estilos

export default function EditalRegistration() {
  const [formData, setFormData] = useState({
    nome1: '',
    edital1: '',
    nome2: '',
    edital2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
  };

  return (
    <div className="container">
      <div className="sidebar"></div>
      <div className="main-content">
        <h1>Setor de Projetos IFSMG - RP</h1>
        
        <p className="instruction">Para iniciar, insira os editais vigentes do semestre.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome1">Nome</label>
              <input
                type="text"
                id="nome1"
                name="nome1"
                value={formData.nome1}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="edital1">Edital</label>
              <input
                type="text"
                id="edital1"
                name="edital1"
                value={formData.edital1}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome2">Nome</label>
              <input
                type="text"
                id="nome2"
                name="nome2"
                value={formData.nome2}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="edital2">Edital</label>
              <input
                type="text"
                id="edital2"
                name="edital2"
                value={formData.edital2}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="button-container">
            <button type="submit" className="avancar-button">Avançar</button>
          </div>
        </form>
        
      </div>
    </div>
  );
}