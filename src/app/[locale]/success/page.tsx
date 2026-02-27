import { Button } from "@/components/form/Button/Button";
import { getTranslations, hasLocale } from "@/i18n";
import NextLink from "next/link";
import { notFound } from "next/navigation";

export default async function SuccessPage({
  params,
}: PageProps<"/[locale]/success">) {
  const locale = (await params).locale;
  if (!hasLocale(locale)) notFound();

  const t = await getTranslations(locale);
  const commonLabels = t.common as Record<string, string>;
  const backToHomeLabel = commonLabels.backToHome ?? commonLabels.contactMe;

  return (
    <main className="flex min-h-[70vh] items-center justify-center" role="main">
      <section className="w-full max-w-xl rounded-lg bg-linear-to-tl from-blue-950 to-blue-900 p-8 text-center sm:p-10">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-400 bg-blue-500/20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M20 7L9 18L4 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="text-lg font-medium whitespace-pre-line sm:text-xl">
          {t.main.contact.success}
        </p>

        <Button as={NextLink} href={`/${locale}`} className="mx-auto mt-7">
          {backToHomeLabel}
        </Button>
      </section>
    </main>
  );
}
