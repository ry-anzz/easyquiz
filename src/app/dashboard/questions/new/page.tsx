export default function NewQuestionPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Criar Nova Questão</h1>
      {/* Regras: Tipos de Questões (Múltipla Escolha, Dissertativa, V/F) [cite: 6] */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Formulário da Questão</h2>
        <p>(Formulário com: Enunciado, Disciplina, Tipo, Dificuldade, Opções de Resposta, etc.)</p>
      </div>
    </div>
  );
}