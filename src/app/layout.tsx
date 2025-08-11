import { Header } from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Mickael Dev",
    template: "Mickael Dev | %s",
  },
  description:
    "Desenvolvedor front-end apaixonado por criar experiências da Web envolventes e fáceis de usar.",
  keywords: [
    "Desenvolvedor",
    "Front-end",
    "Freelancer",
    "frontend",
    "web",
    "programador",
    "Developer",
    "Front-end",
    "Freelancer",
    "frontend",
    "web",
    "programmer",
  ],
  authors: [
    {
      name: "Mickael Felizardo",
      url: "https://linkedin.com/in/mickael-felizardo-5221431b4",
    },
  ],
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#18181b",
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
          <Analytics />
        </div>
      </body>
    </html>
  );
}
