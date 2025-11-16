// src/components/Navbar.tsx

'use client'; // 🚨 ESSENCIAL: Marcar como Client Component para usar hooks

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Importação correta

export default function Navbar() {
  const pathname = usePathname();
  
  // As rotas estão corretas, baseadas na sua estrutura de pastas
  const isAuthPage = pathname === '/auth/sign-up' || pathname === '/auth/sign-in';

  // ... (Resto do componente conforme as correções anteriores)

  const Logo = (
    <div className="text-xl font-bold text-blue-600">
      <Link href="/">EasyQuiz</Link> {/* Ajustei para / como padrão, não /dashboard */}
    </div>
  );

  const SearchBar = (
    <div className="flex-1 max-w-lg mx-8">
      <input
        type="search"
        placeholder="Buscar por questões, provas, disciplinas..."
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      
      {/* 1. Área do Logo e Busca: Só aparece se o usuário NÃO estiver na página de Auth */}
      <div className="flex items-center flex-1">
        {!isAuthPage && (
            <>
                {Logo}
                {SearchBar}
            </>
        )}
      </div>

      {/* 2. Área dos Botões de Login/Cadastro (sempre visíveis) */}
      <nav className="flex items-center space-x-4">
        {/* Usamos 'Link' em vez de 'a' */}
        <Link href="/auth/sign-in" className="text-gray-700 hover:text-blue-500">
          Login
        </Link>
        <Link
          href="/auth/sign-up"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Cadastrar
        </Link>
      </nav>
    </header>
  );
}