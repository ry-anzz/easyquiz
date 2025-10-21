export default function TestGeneratorPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gerador de Provas</h1>
      {/* Regra Geração de Provas (Randômica) [cite: 4] */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Filtros da Prova</h2>
        <p>(Formulário com filtros: Disciplina(s), Criador(es), Nível, Quantidade...)</p>
      </div>
    </div>
  );
}