export default function TestViewerPage({ params }: { params: { testId: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Visualizando Prova: #{params.testId}</h1>
      
      {/* Regras: Visualização da Prova [cite: 8] e Exportação [cite: 5] */}
      <div className="flex space-x-4 mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Exportar PDF</button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Exportar PDF (c/ Gabarito)</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">Mostrar/Ocultar Respostas</button>
      </div>

      <div className="bg-white p-6 shadow rounded-lg">
        <p>(Aqui serão renderizadas as questões da prova, sem permitir responder [cite: 8])</p>
      </div>
    </div>
  );
}