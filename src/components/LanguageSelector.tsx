import * as Switch from "@radix-ui/react-switch";
import { getLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";

async function toogleToEnglish(isOn: boolean) {
  "use server";

  const newLocale = isOn ? "en" : "pt-BR";

  redirect({ href: "/", locale: newLocale });
}

export const LanguageSelector: React.FC = async () => {
  const locale = await getLocale();
  const isEnglish = locale === "en";

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
