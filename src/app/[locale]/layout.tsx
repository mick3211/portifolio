import "./globals.css";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: "Mickael Dev",
      template: "Mickael Dev | %s",
    },
    description: t("description"),
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
        url: "https://linkedin.com/in/mickael-felizardo-5221431b4",
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
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="container mx-auto px-4">
          <NextIntlClientProvider>
            <Header />
            {children}
            <Analytics />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
