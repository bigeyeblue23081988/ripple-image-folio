import { Clients } from "@/components/Clients";
import { useLang } from "@/i18n/LanguageProvider";

export function ClientsSection() {
  const { t } = useLang();

  return (
    <section className="container-wide hidden md:block pb-28 md:pb-40">
      <p className="plate-label mb-14 md:mb-8 reveal">{t.clients.label}</p>
      <div className="reveal">
        <Clients />
      </div>
    </section>
  );
}
