import React, { useState } from 'react';
import InputField from '../../components/InputField';
import TextAreaField from '../../components/TextAreaField';
import './ProjectRegistration.css';
import { db } from '../../firebase/firebaseUtil';
import { collection, addDoc } from 'firebase/firestore';

function ProjectRegistration() {
  const [formData, setFormData] = useState({
    edital: '',
    nomeProjeto: '',
    ano: '',
    periodoInicio: '',
    periodoFim: '',
    abrangencia: '',
    nomeAcao: '',
    nomeCoordenador: '',
    emailCoordenador: '',
    nomeCoCoordenador: '',
    emailCoCoordenador: '',
    publicoInterno: '',
    qtdInterno: '',
    publicoExterno: '',
    qtdExterno: '',
    estado: '',
    municipio: '',
    bairro: '',
    espaco: '',
    financiamento: '',
    totalBolsas: '',
    areaTematica: '',
    linhaExtensao: '',
    detalhes: '',
    classificado: '',
    avaliador1: '',
    avaliador2: '',
    avaliador3: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'projetos'), formData);
      alert('Projeto cadastrado com sucesso!');
      setFormData({
        edital: '', nomeProjeto: '', ano: '', periodoInicio: '', periodoFim: '', abrangencia: '',
        nomeAcao: '', nomeCoordenador: '', emailCoordenador: '', nomeCoCoordenador: '', emailCoCoordenador: '',
        publicoInterno: '', qtdInterno: '', publicoExterno: '', qtdExterno: '', estado: '', municipio: '',
        bairro: '', espaco: '', financiamento: '', totalBolsas: '', areaTematica: '', linhaExtensao: '',
        detalhes: '', classificado: '', avaliador1: '', avaliador2: '', avaliador3: ''
      });
    } catch (error) {
      console.error('Erro ao cadastrar projeto:', error);
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <div className="container">
      <h1>Cadastro de Projeto</h1>
      <form onSubmit={handleSubmit}>
        <InputField label="Selecione o Edital" name="edital" value={formData.edital} onChange={handleChange} />
        <InputField label="Nome do Projeto" name="nomeProjeto" value={formData.nomeProjeto} onChange={handleChange} />
        <InputField label="Ano" name="ano" value={formData.ano} onChange={handleChange} />
        <InputField label="Período de Realização (Início)" name="periodoInicio" value={formData.periodoInicio} onChange={handleChange} />
        <InputField label="Período de Realização (Fim)" name="periodoFim" value={formData.periodoFim} onChange={handleChange} />
        <InputField label="Abrangência" name="abrangencia" value={formData.abrangencia} onChange={handleChange} />
        <InputField label="Nome da Ação" name="nomeAcao" value={formData.nomeAcao} onChange={handleChange} />
        <InputField label="Nome do Coordenador" name="nomeCoordenador" value={formData.nomeCoordenador} onChange={handleChange} />
        <InputField label="Email do Coordenador" name="emailCoordenador" value={formData.emailCoordenador} onChange={handleChange} />
        <InputField label="Nome do Co-coordenador" name="nomeCoCoordenador" value={formData.nomeCoCoordenador} onChange={handleChange} />
        <InputField label="Email do Co-coordenador" name="emailCoCoordenador" value={formData.emailCoCoordenador} onChange={handleChange} />
        <InputField label="Discriminar Público Alvo Interno" name="publicoInterno" value={formData.publicoInterno} onChange={handleChange} />
        <InputField label="Quantificar Público Alvo Interno" name="qtdInterno" value={formData.qtdInterno} onChange={handleChange} />
        <InputField label="Discriminar Público Alvo Externo" name="publicoExterno" value={formData.publicoExterno} onChange={handleChange} />
        <InputField label="Quantificar Público Alvo Externo" name="qtdExterno" value={formData.qtdExterno} onChange={handleChange} />
        <InputField label="Estado" name="estado" value={formData.estado} onChange={handleChange} />
        <InputField label="Município" name="municipio" value={formData.municipio} onChange={handleChange} />
        <InputField label="Bairro" name="bairro" value={formData.bairro} onChange={handleChange} />
        <InputField label="Espaço de Realização" name="espaco" value={formData.espaco} onChange={handleChange} />
        <InputField 
          label="Valor solicitado para financiamento do Projeto" 
          name="financiamento" 
          value={formData.financiamento} 
          onChange={handleChange} 
        />
        <InputField 
          label="Número Total de Bolsas do Projeto" 
          name="totalBolsas" 
          value={formData.totalBolsas} 
          onChange={handleChange} 
        />
        <InputField label="Área Temática" name="areaTematica" value={formData.areaTematica} onChange={handleChange} />
        <InputField label="Linha de Extensão" name="linhaExtensao" value={formData.linhaExtensao} onChange={handleChange} />
        <TextAreaField label="Detalhes da Ação" name="detalhes" value={formData.detalhes} onChange={handleChange} />
        <InputField label="Classificação" name="classificado" value={formData.classificado} onChange={handleChange} />
        <InputField label="Avaliador 1" name="avaliador1" value={formData.avaliador1} onChange={handleChange} />
        <InputField label="Avaliador 2" name="avaliador2" value={formData.avaliador2} onChange={handleChange} />
        <InputField label="Avaliador 3" name="avaliador3" value={formData.avaliador3} onChange={handleChange} />

        <button className="submit-button" type="submit">CADASTRAR</button>
      </form>
    </div>
  );
}

export default ProjectRegistration;
