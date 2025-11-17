// src/components/Navbar.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const isAuthPage = pathname === '/auth/sign-up' || pathname === '/auth/sign-in';

  // Definição do Logo
  const Logo = (
    <div className="text-xl font-bold text-blue-600 flex-shrink-0">
      <Link href="/">EasyQuiz</Link>
    </div>
  );

  // Definição da Barra de Pesquisa
  const SearchBar = (
    // Removi o 'mx-8' daqui para controlar o espaçamento no container pai
    <div className="w-full max-w-2xl"> 
      <input
        type="search"
        placeholder="Buscar por questões, provas, disciplinas..."
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center gap-4">
      
      {/* 1. Lado ESQUERDO: Logo */}
      {/* Usamos uma largura mínima ou flex-shrink-0 para garantir que o logo não esmague */}
      <div className="flex items-center min-w-fit">
        {!isAuthPage && Logo}
      </div>

      {/* 2. CENTRO: Barra de Pesquisa */}
      {/* flex-1 faz ele ocupar todo o espaço disponível entre a esq e dir. 
          flex justify-center centraliza o input dentro desse espaço. */}
      <div className="flex-1 flex justify-center px-4">
        {!isAuthPage && SearchBar}
      </div>

      {/* 3. Lado DIREITO: Botões de Auth */}
      <nav className="flex items-center space-x-4 min-w-fit justify-end">
        <Link href="/auth/sign-in" className="text-gray-700 hover:text-blue-500 font-medium">
          Login
        </Link>
        <Link
          href="/auth/sign-up"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Cadastrar
        </Link>
      </nav>

    </header>
  );
}