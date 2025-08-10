import { Header } from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Mickael Dev',
    template: 'Mickael Dev | %s',
  },
  description:
    'Desenvolvedor front-end apaixonado por criar experiências da Web envolventes e fáceis de usar.',
  themeColor: '#18181b',
  keywords: [
    'Desenvolvedor',
    'Front-end',
    'Freelancer',
    'frontend',
    'web',
    'programador',
  ],
  authors: [
    {
      name: 'Mickael Felizardo',
      url: 'https://linkedin.com/in/mickael-felizardo-5221431b4',
    },
  ],
};

export const viewport: Viewport = {
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="container mx-auto px-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
