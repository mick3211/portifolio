"use client";

import type { TranslationProps } from "@/i18n";
import * as Switch from "@radix-ui/react-switch";
import { usePathname, useRouter } from "next/navigation";

export const LanguageSelector: React.FC<TranslationProps> = ({ locale }) => {
  const router = useRouter();
  const pathName = usePathname();
  const isEnglish = locale === "en";

  const toogleToEnglish = () => {
    const newLocale = isEnglish ? "pt-BR" : "en";
    const newPath = pathName.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPath);
  };

  return (
    <Switch.Root
      className="relative w-[3.250rem] cursor-pointer rounded-full bg-zinc-700 p-0.5 transition-colors hover:bg-zinc-600 data-[state=checked]:bg-blue-900 data-[state=checked]:hover:bg-blue-800"
      onCheckedChange={toogleToEnglish}
      defaultChecked={isEnglish}
      aria-label={isEnglish ? "Mudar para Português" : "Switch to English"}
      title={isEnglish ? "Mudar para Português" : "Switch to English"}
    >
      <Switch.Thumb className="block h-6 w-6 rounded-full bg-[url(/flags/united-states.png)] bg-contain shadow transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-full" />
    </Switch.Root>
  );
};
