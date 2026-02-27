import "../globals.css";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import { getTranslations, hasLocale, Locale, locales } from "@/i18n";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations(locale as Locale);

  return {
    title: {
      default: "Mickael Dev",
      template: "Mickael Dev | %s",
    },
    alternates: {
      canonical: "https://mickaelf.dev/pt-BR",
      languages: {
        en: "https://mickaelf.dev/en",
      },
    },
    other: {
      refresh: "dawdaw",
    },

    description: t.metadata.description,
    keywords: [
      "Desenvolvedor",
      "Front-end",
      "Freelancer",
      "web",
      "programador",
      "Developer",
      "Freelancer",
      "frontend",
      "web",
      "programmer",
    ],
    authors: [
      {
        name: "Mickael Felizardo",
        url: "www.linkedin.com/in/mickaelf-dev",
      },
    ],
  };
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#18181b",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="container mx-auto px-4">
          <Header locale={locale} />
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
