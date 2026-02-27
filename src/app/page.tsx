"use client";

import "./globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detecta o idioma do navegador (ex: 'pt-BR', 'en-US', 'en')
    const userLang = navigator.language || "pt-BR";

    // Se começar com 'pt', manda para pt-BR, caso contrário, vai para o Inglês
    if (userLang.startsWith("pt")) {
      router.replace("/pt-BR");
    } else {
      router.replace("/en");
    }
  }, [router]);

  return (
    <html>
      <Head key="redirect">
        Fallback padrão: se o JS falhar, manda para a versão em português
        <meta httpEquiv="refresh" content="0; url=/pt-BR" />
        <title>Mickael Rodrigues | Portfolio</title>
      </Head>
      <body className="flex h-screen w-screen items-center justify-center bg-zinc-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-loader-circle-icon lucide-loader-circle size-16 animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </body>
    </html>
  );
}
