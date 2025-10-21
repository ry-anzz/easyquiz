export default function SignInPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
      <form className="space-y-4 bg-white p-8 shadow-lg rounded-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="w-full mt-1 p-2 border rounded-md" placeholder="voce@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Senha</label>
          <input type="password" className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Entrar
        </button>
      </form>
    </div>
  );
}