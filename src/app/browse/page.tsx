export default function BrowseQuestionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Buscar Questões Públicas</h1>
      
      {/* Placeholder para Filtros */}
      <div className="bg-white p-4 shadow rounded-lg mb-6">
        <h2 className="text-xl font-semibold">Filtros</h2>
        <p>(Aqui ficarão os filtros de Disciplina, Nível, etc)</p>
      </div>

      {/* Placeholder para Lista de Questões */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Resultados</h2>
        <p>(Aqui ficará a lista de `<QuestionCard>`)</p>
      </div>
    </div>
  );
}