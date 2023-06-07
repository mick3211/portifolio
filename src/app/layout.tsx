import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Mickael Dev',
    description:
        'Desenvolvedor front-end apaixonado por criar experiências da Web envolventes e fáceis de usar.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
