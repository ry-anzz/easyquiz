import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // Importe o Navbar

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EasyQuiz - Gerador de Provas',
  description: 'Crie provas e compartilhe questões facilmente.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar /> {/* Adicione o Navbar aqui */}

        {/* Adiciona um padding no topo da página 
            para o conteúdo não ficar escondido atrás da Navbar */}
        <main className="pt-20"> 
          {children}
        </main>
      </body>
    </html>
  );
}