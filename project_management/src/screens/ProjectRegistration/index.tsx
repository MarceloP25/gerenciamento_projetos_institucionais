import React, { useState } from 'react';
import './styles.css';
import { db } from '../../firebase/firebaseUtil';
import { addDoc, collection } from 'firebase/firestore';

interface FormData {
    edital: string;
    nomeProjeto: string;
    ano: string;
    periodoInicio: string;
    periodoFim: string;
    abrangencia: string;
    nomeAcao: string;
    nomeCoordenador: string;
    emailCoordenador: string;
    nomeCoCoordenador: string;
    emailCoCoordenador: string;
    publicoInterno: string;
    qtdInterno: string;
    publicoExterno: string;
    qtdExterno: string;
    estado: string;
    municipio: string;
    bairro: string;
    espaco: string;
    financiamento: string;
    totalBolsas: string;
    areaTematica: string;
    linhaExtensao: string;
    detalhes: string;
    classificado: string;
    avaliador1: string;
    avaliador2: string;
    avaliador3: string;
}

const ProjectRegistration: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        edital: '', nomeProjeto: '', ano: '', periodoInicio: '', 
        periodoFim: '', abrangencia: '', nomeAcao: '', nomeCoordenador: '',
        emailCoordenador: '', nomeCoCoordenador: '', emailCoCoordenador: '',
        publicoInterno: '', qtdInterno: '', publicoExterno: '', qtdExterno: '',
        estado: '', municipio: '', bairro: '', espaco: '', financiamento: '',
        totalBolsas: '', areaTematica: '', linhaExtensao: '', detalhes: '',
        classificado: '', avaliador1: '', avaliador2: '', avaliador3: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addDoc(collection(db, 'projetos'), formData);
        alert('Projeto cadastrado com sucesso!');
        setFormData({
            edital: '', nomeProjeto: '', ano: '', periodoInicio: '',
            periodoFim: '', abrangencia: '', nomeAcao: '', nomeCoordenador: '',
            emailCoordenador: '', nomeCoCoordenador: '', emailCoCoordenador: '',
            publicoInterno: '', qtdInterno: '', publicoExterno: '', qtdExterno: '',
            estado: '', municipio: '', bairro: '', espaco: '', financiamento: '',
            totalBolsas: '', areaTematica: '', linhaExtensao: '', detalhes: '',
            classificado: '', avaliador1: '', avaliador2: '', avaliador3: ''
        });
    };


  return (
    <div className="container">
      <h1>Cadastro de Projeto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="edital"
          value={formData.edital}
          onChange={handleChange}
          placeholder="Selecione o Edital"
        />
        <input
          type="text"
          name="nomeProjeto"
          value={formData.nomeProjeto}
          onChange={handleChange}
          placeholder="Nome do Projeto"
        />
        <input
          type="text"
          name="ano"
          value={formData.ano}
          onChange={handleChange}
          placeholder="Ano"
        />
        <input
          type="text"
          name="periodoInicio"
          value={formData.periodoInicio}
          onChange={handleChange}
          placeholder="Período de Realização (Início)"
        />
        <input
          type="text"
          name="periodoFim"
          value={formData.periodoFim}
          onChange={handleChange}
          placeholder="Período de Realização (Fim)"
        />
        <input
          type="text"
          name="abrangencia"
          value={formData.abrangencia}
          onChange={handleChange}
          placeholder="Abrangência"
        />
        <input
          type="text"
          name="nomeAcao"
          value={formData.nomeAcao}
          onChange={handleChange}
          placeholder="Nome da Ação"
        />
        <input
          type="text"
          name="nomeCoordenador"
          value={formData.nomeCoordenador}
          onChange={handleChange}
          placeholder="Nome do Coordenador"
        />
        <input
          type="email"
          name="emailCoordenador"
          value={formData.emailCoordenador}
          onChange={handleChange}
          placeholder="Email do Coordenador"
        />
        <input
          type="text"
          name="nomeCoCoordenador"
          value={formData.nomeCoCoordenador}
          onChange={handleChange}
          placeholder="Nome do Co-coordenador"
        />
        <input
          type="email"
          name="emailCoCoordenador"
          value={formData.emailCoCoordenador}
          onChange={handleChange}
          placeholder="Email do Co-coordenador"
        />
        <input
          type="text"
          name="publicoInterno"
          value={formData.publicoInterno}
          onChange={handleChange}
          placeholder="Discriminar Público Alvo Interno"
        />
        <input
          type="text"
          name="qtdInterno"
          value={formData.qtdInterno}
          onChange={handleChange}
          placeholder="Quantificar Público Alvo Interno"
        />
        <input
          type="text"
          name="publicoExterno"
          value={formData.publicoExterno}
          onChange={handleChange}
          placeholder="Discriminar Público Alvo Externo"
        />
        <input
          type="text"
          name="qtdExterno"
          value={formData.qtdExterno}
          onChange={handleChange}
          placeholder="Quantificar Público Alvo Externo"
        />
        <input
          type="text"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          placeholder="Estado"
        />
        <input
          type="text"
          name="municipio"
          value={formData.municipio}
          onChange={handleChange}
          placeholder="Município"
        />
        <input
          type="text"
          name="bairro"
          value={formData.bairro}
          onChange={handleChange}
          placeholder="Bairro"
        />
        <input
          type="text"
          name="espaco"
          value={formData.espaco}
          onChange={handleChange}
          placeholder="Espaço de Realização"
        />
        <input
          type="text"
          name="financiamento"
          value={formData.financiamento}
          onChange={handleChange}
          placeholder="Valor solicitado para financiamento do Projeto"
        />
        <input
          type="text"
          name="totalBolsas"
          value={formData.totalBolsas}
          onChange={handleChange}
          placeholder="Número Total de Bolsas do Projeto"
        />
        <input
          type="text"
          name="areaTematica"
          value={formData.areaTematica}
          onChange={handleChange}
          placeholder="Área Temática"
        />
        <input
          type="text"
          name="linhaExtensao"
          value={formData.linhaExtensao}
          onChange={handleChange}
          placeholder="Linha de Extensão"
        />
        <input
          type="text"
          name="detalhes"
          value={formData.detalhes}
          onChange={handleChange}
          placeholder="Detalhes da Ação"
        />
        <input
          type="text"
          name="classificado"
          value={formData.classificado}
          onChange={handleChange}
          placeholder="Classificação"
        />
        <input
          type="text"
          name="avaliador1"
          value={formData.avaliador1}
          onChange={handleChange}
          placeholder="Avaliador 1"
        />
        <input
          type="text"
          name="avaliador2"
          value={formData.avaliador2}
          onChange={handleChange}
          placeholder="Avaliador 2"
        />
        <input
          type="text"
          name="avaliador3"
          value={formData.avaliador3}
          onChange={handleChange}
          placeholder="Avaliador 3"
        />
        <button className="submit-button" type="submit">CADASTRAR</button>
      </form>
    </div>
  );
};

export default ProjectRegistration;