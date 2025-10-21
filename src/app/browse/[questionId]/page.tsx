// O nome `params` é como o Next.js passa o valor de [questionId]
export default function QuestionDetailPage({ params }: { params: { questionId: string } }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">
        Visualizando Questão: #{params.questionId}
      </h1>
      
      <div className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Enunciado</h2>
        <p>(...)</p>
      </div>

      <div className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Opções</h2>
        <p>(...)</p>
      </div>

      {/* Regra de Avaliação Comunitária [cite: 7] */}
      <div className="bg-gray-100 p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Avaliação da Comunidade</h2>
        <p>(Aqui ficará o sistema de notas 0-5)</p>
      </div>
    </div>
  );
}