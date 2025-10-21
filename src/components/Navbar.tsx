import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          EasyQuiz
        </Link>

        {/* Links Públicos */}
        <div className="space-x-4">
          <Link href="/browse" className="text-gray-600 hover:text-blue-500">
            Buscar Questões
          </Link>
          <Link href="/auth/sign-in" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </Link>
          <Link href="/auth/sign-up" className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
            Cadastrar
          </Link>
        </div>
      </div>
    </nav>
  );
}