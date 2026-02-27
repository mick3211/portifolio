import NextLink, { type LinkProps } from "next/link";
import "server-only";

const dictionaries = {
  en: () => import("../messages/en.json").then((module) => module.default),
  "pt-BR": () =>
    import("../messages/pt-BR.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;
export type TranslationProps = {
  locale: Locale;
};

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const locales = Object.keys(dictionaries);

export const getTranslations = async (locale: Locale) =>
  await dictionaries[locale]();

export const Link: React.FC<
  React.PropsWithChildren<TranslationProps & LinkProps>
> = async ({ locale, href, ...props }) => {
  const localizedHref =
    typeof href === "string"
      ? `/${locale}${href}`
      : { ...href, pathname: `/${locale}${href.pathname}` };

  return <NextLink {...props} href={localizedHref} />;
};
