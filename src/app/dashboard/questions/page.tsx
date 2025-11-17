"use client"; // Necessário porque usamos useState e interações

import Link from "next/link";
import { useState } from "react"; // Import do React
import { Filter, BookOpen, User, BarChart, Search } from "lucide-react"; // Import dos ícones
import QuestionListItem from "@/components/QuestionListItem";

// 1. Atualizei o TIPO para incluir matéria e criador
type MockQuestao = {
  id: string;
  enunciado: string;
  tipo: "Multipla Escolha" | "Dissertativa" | "Verdadeiro/Falso";
  dificuldade: "Fácil" | "Médio" | "Difícil";
  isPublica: boolean;
  materia: string; // Novo campo
  criador: string; // Novo campo
};

// 2. Atualizei os DADOS MOCK para terem matéria e criador
const minhasQuestoes: MockQuestao[] = [
  {
    id: "101",
    enunciado: "Qual é a capital do Brasil?",
    tipo: "Multipla Escolha",
    dificuldade: "Fácil",
    isPublica: true,
    materia: "geografia", // Exemplo
    criador: "Admin",
  },
  {
    id: "102",
    enunciado: "Descreva o processo de normalização de um banco de dados.",
    tipo: "Dissertativa",
    dificuldade: "Médio",
    isPublica: false,
    materia: "banco_dados",
    criador: "Professor João",
  },
  {
    id: "103",
    enunciado: "O Sol gira em torno da Terra.",
    tipo: "Verdadeiro/Falso",
    dificuldade: "Fácil",
    isPublica: true,
    materia: "fisica",
    criador: "Admin",
  },
];

export default function MyQuestionsPage() {
  // 3. Declarei os ESTADOS (variáveis que guardam o valor dos filtros)
  const [filtroMateria, setFiltroMateria] = useState("");
  const [filtroDificuldade, setFiltroDificuldade] = useState("");
  const [filtroCriador, setFiltroCriador] = useState("");

  // 4. Lógica de FILTRAGEM
  const questoesFiltradas = minhasQuestoes.filter((questao) => {
    const matchMateria = filtroMateria ? questao.materia === filtroMateria : true;
    
    // O filtro de dificuldade do select retorna "facil" (minúsculo/sem acento),
    // mas no banco está "Fácil". Vamos simplificar a comparação:
    const matchDificuldade = filtroDificuldade 
      ? questao.dificuldade.toLowerCase().includes(filtroDificuldade.toLowerCase()) || 
        (filtroDificuldade === "facil" && questao.dificuldade === "Fácil") ||
        (filtroDificuldade === "medio" && questao.dificuldade === "Médio") ||
        (filtroDificuldade === "dificil" && questao.dificuldade === "Difícil")
      : true;

    const matchCriador = filtroCriador
      ? questao.criador.toLowerCase().includes(filtroCriador.toLowerCase())
      : true;

    return matchMateria && matchDificuldade && matchCriador;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Minhas Questões</h1>
        <Link
          href="/dashboard/questions/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          + Criar Nova Questão
        </Link>
      </div>

      {/* Bloco de Filtros Estilizado */}
      <div className="bg-white p-6 shadow rounded-lg mb-6 border border-gray-100">
        {/* Cabeçalho do Filtro */}
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
          <Filter className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">
            Filtros de Conteúdo
          </h2>
        </div>

        {/* Grid de Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Filtro de Matéria */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
              <BookOpen className="w-4 h-4 text-gray-500" />
              Matéria (Disciplina)
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              value={filtroMateria}
              onChange={(e) => setFiltroMateria(e.target.value)}
            >
              <option value="">Todas as matérias</option>
              <option value="calculo">Cálculo 1</option>
              <option value="eng_software">Engenharia de Software</option>
              <option value="banco_dados">Banco de Dados</option>
              <option value="redes">Redes de Computadores</option>
              {/* Opções extras para bater com o mock data */}
              <option value="geografia">Geografia</option>
              <option value="fisica">Física</option>
            </select>
          </div>

          {/* 2. Filtro de Dificuldade */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
              <BarChart className="w-4 h-4 text-gray-500" />
              Dificuldade
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              value={filtroDificuldade}
              onChange={(e) => setFiltroDificuldade(e.target.value)}
            >
              <option value="">Qualquer dificuldade</option>
              <option value="facil">Fácil</option>
              <option value="medio">Médio</option>
              <option value="dificil">Difícil</option>
            </select>
          </div>

          {/* 3. Filtro de Criador */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
              <User className="w-4 h-4 text-gray-500" />
              Criador da Questão
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar por nome..."
                className="w-full border border-gray-300 rounded-md p-2 pl-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={filtroCriador}
                onChange={(e) => setFiltroCriador(e.target.value)}
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Questões (USANDO A LISTA FILTRADA) */}
      <div className="space-y-4">
        {questoesFiltradas.map((questao) => (
          <QuestionListItem
            key={questao.id}
            id={questao.id}
            enunciado={questao.enunciado}
            tipo={questao.tipo}
            dificuldade={questao.dificuldade}
            isPublica={questao.isPublica}
          />
        ))}

        {/* Estado Vazio */}
        {questoesFiltradas.length === 0 && (
          <div className="bg-white p-6 shadow rounded-lg text-center text-gray-500">
            <p>Nenhuma questão encontrada com esses filtros.</p>
            <button 
                onClick={() => {
                    setFiltroMateria("");
                    setFiltroDificuldade("");
                    setFiltroCriador("");
                }}
                className="text-blue-600 hover:underline mt-2"
            >
                Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}