import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/junina-hero.png";
import {
  Download,
  Scissors,
  Check,
  Sparkles,
  MessageCircle,
  Gift,
  PartyPopper,
  Image as ImageIcon,
  Users,
  UtensilsCrossed,
  Flag,
  Lightbulb,
} from "lucide-react";

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1Xhh1hKTFVSMSS2-DOG2r2eGa97nC9ANw?usp=drive_link";
const UPGRADE_LINK = "https://pay.wiapy.com/sbxJLhR9Tg";
const SUPPORT_LINK = "COLOCAR_LINK_DO_WHATSAPP_SUPORTE";

export const Route = createFileRoute("/")({
  component: Index,
});

function Bandeirinhas() {
  const colors = [
    "var(--junina-red)",
    "var(--junina-yellow)",
    "var(--junina-green)",
    "var(--junina-orange)",
    "var(--junina-red)",
    "var(--junina-yellow)",
    "var(--junina-green)",
    "var(--junina-orange)",
    "var(--junina-red)",
    "var(--junina-yellow)",
    "var(--junina-green)",
    "var(--junina-orange)",
  ];
  return (
    <div
      aria-hidden
      className="flex w-full items-start justify-around overflow-hidden opacity-80"
    >
      {colors.map((c, i) => (
        <div
          key={i}
          style={{
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: `16px solid ${c}`,
            transform: `translateY(${i % 2 === 0 ? 0 : 4}px)`,
          }}
        />
      ))}
    </div>
  );
}

function Check2() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: "var(--junina-green)" }}
    >
      <Check className="h-3 w-3 text-white" strokeWidth={3} />
    </span>
  );
}


function Index() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--paper)", color: "var(--foreground)" }}
    >
      {/* Top bar */}
      <header
        className="w-full px-4 py-3 text-center text-sm font-medium"
        style={{
          backgroundColor: "var(--junina-beige)",
          color: "var(--junina-brown)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <PartyPopper className="mr-1.5 inline h-4 w-4" style={{ color: "var(--junina-red)" }} />
        Seu acesso ao Material Essencial Junino está liberado
      </header>

      <Bandeirinhas />

      <main className="mx-auto max-w-2xl px-4 pb-12 pt-6 sm:pt-10">
        {/* Hero */}
        <section className="text-center">
          <img
            src={heroImg}
            alt="Material Essencial Junino - Moldes de EVA com fogueira, milho e bandeirinhas"
            className="mx-auto mb-2 w-full max-w-md bg-transparent object-contain" style={{ backgroundColor: "transparent" }}
          />
          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            Bem-vinda ao seu Material Essencial Junino!
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
            Seu material já está disponível. Clique no botão abaixo para acessar os moldes de EVA e
            começar a preparar suas peças para a Festa Junina.
          </p>
        </section>

        {/* Main access card */}
        <section
          className="mt-8 rounded-3xl border p-6 shadow-sm sm:p-8"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
            boxShadow: "0 6px 24px -12px oklch(0.45 0.07 50 / 0.18)",
          }}
        >
          <div className="mb-3 flex items-center gap-2">
            <Gift className="h-5 w-5" style={{ color: "var(--junina-red)" }} />
            <span
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: "var(--junina-brown)" }}
            >
              Seu material
            </span>
          </div>
          <h2 className="text-xl font-bold sm:text-2xl">Acesse seus +300 moldes de EVA</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            O Material Essencial Junino reúne moldes prontos para imprimir e usar na criação de
            lembrancinhas, enfeites, painéis e peças decorativas para Festa Junina.
          </p>

          <ul className="mt-5 space-y-3 text-sm">
            {[
              "+300 moldes de EVA para Festa Junina, todos em PDF",
              "Moldes prontos para imprimir",
              "Ideal para lembrancinhas, painéis e decorações",
              "Material organizado para facilitar o uso",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check2 />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold text-white transition-transform active:scale-[0.98]"
            style={{
              backgroundColor: "var(--junina-green)",
              boxShadow: "0 8px 20px -10px oklch(0.58 0.16 145 / 0.6)",
            }}
          >
            <Download className="h-5 w-5" />
            Acessar material agora
          </a>
        </section>

        {/* How to use */}
        <section className="mt-12">
          <h2 className="text-center text-xl font-bold sm:text-2xl">Como usar os moldes</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Download,
                title: "1. Acesse",
                text: "Clique no botão de acesso e abra a pasta do material.",
              },
              {
                icon: ImageIcon,
                title: "2. Escolha",
                text: "Escolha os moldes que deseja usar e salve no seu computador ou celular.",
              },
              {
                icon: Scissors,
                title: "3. Monte",
                text: "Imprima, recorte e monte suas peças em EVA para sua Festa Junina.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border p-5 text-center"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--junina-beige)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "var(--junina-brown)" }} />
                </div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mt-12">
          <h2 className="text-center text-xl font-bold sm:text-2xl">
            O que você vai encontrar dentro do material
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { icon: Gift, label: "Lembrancinhas" },
              { icon: ImageIcon, label: "Painéis" },
              { icon: Users, label: "Personagens juninos" },
              { icon: UtensilsCrossed, label: "Comidas típicas" },
              { icon: Flag, label: "Bandeirinhas e enfeites" },
              { icon: Lightbulb, label: "Ideias para decoração" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-2xl border p-4 text-center"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <Icon className="h-5 w-5" style={{ color: "var(--junina-orange)" }} />
                <span className="text-xs font-medium leading-tight">Moldes para {label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Upgrade offer */}
        <section className="mt-12">
          <h2 className="text-center text-xl font-bold sm:text-2xl">
            Oferta especial para quem comprou o Material Básico
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
            Você pode liberar o Material Completo com muito mais moldes e bônus por uma condição
            exclusiva.
          </p>

          <div
            className="relative mt-6 rounded-3xl border-2 p-6 sm:p-8"
            style={{
              backgroundColor: "oklch(0.97 0.04 80)",
              borderColor: "var(--junina-yellow)",
              boxShadow: "0 10px 30px -15px oklch(0.72 0.17 55 / 0.35)",
            }}
          >
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white"
              style={{ backgroundColor: "var(--junina-orange)" }}
            >
              <Sparkles className="mr-1 inline h-3 w-3" />
              Upgrade especial
            </span>

            <h3 className="mt-2 text-lg font-bold sm:text-xl">
              Upgrade para o Material Completo Junino
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Por apenas <strong style={{ color: "var(--junina-red)" }}>R$9,90</strong>, você libera
              o Material Completo com mais variedade de moldes, materiais extras e bônus para deixar
              sua produção junina ainda mais completa.
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              {[
                "+500 moldes de EVA para Festa Junina",
                "Acesso imediato ao material",
                "Envio do acesso por e-mail",
                "Arquivos em formato PDF",
                "Moldes prontos para imprimir",
                "Garantia estendida de 30 dias",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check2 />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            {/* Bonus box */}
            <div
              className="mt-6 rounded-2xl p-5"
              style={{
                backgroundColor: "oklch(0.96 0.05 145)",
                border: "2px dashed var(--junina-green)",
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--junina-green)" }}
                >
                  <Gift className="h-5 w-5 text-white" />
                </div>
                <h4
                  className="text-sm font-bold uppercase tracking-wide sm:text-base"
                  style={{ color: "var(--junina-green)" }}
                >
                  Bônus inclusos no Material Completo
                </h4>
              </div>

              <ul className="mt-4 space-y-3">
                {[
                  "+600 moldes de EVA diversos educacionais para imprimir",
                  "E-book: Como Vender Peças de EVA",
                  "+80 moldes pedagógicos para imprimir",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 rounded-xl bg-white/70 p-3"
                  >
                    <span
                      className="shrink-0 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                      style={{ backgroundColor: "var(--junina-green)" }}
                    >
                      Bônus
                    </span>
                    <span className="text-sm leading-snug" style={{ color: "var(--junina-brown)" }}>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="mt-6 flex items-baseline justify-center gap-2"
              style={{ color: "var(--junina-brown)" }}
            >
              <span className="text-sm">por apenas</span>
              <span className="text-4xl font-bold" style={{ color: "var(--junina-red)" }}>
                R$9,90
              </span>
            </div>

            <p
              className="mt-2 text-center text-xs italic"
              style={{ color: "var(--junina-brown)" }}
            >
              Condição especial liberada apenas para quem já comprou o Material Básico.
            </p>

            <a
              href={UPGRADE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold text-white transition-transform active:scale-[0.98]"
              style={{
                backgroundColor: "var(--junina-green)",
                boxShadow: "0 8px 20px -10px oklch(0.58 0.16 145 / 0.6)",
              }}
            >
              <Sparkles className="h-5 w-5" />
              Liberar Material Completo por R$9,90
            </a>
          </div>
        </section>

        {/* Support */}
        <section className="mt-12 text-center">
          <h2 className="text-lg font-bold sm:text-xl">Precisa de ajuda?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Se tiver dificuldade para acessar o material, entre em contato pelo suporte.
          </p>
          <a
            href={SUPPORT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold"
            style={{
              borderColor: "var(--junina-green)",
              color: "var(--junina-green)",
              backgroundColor: "var(--card)",
            }}
          >
            <MessageCircle className="h-4 w-4" />
            Falar com suporte
          </a>
        </section>
      </main>

      <Bandeirinhas />

      <footer
        className="px-4 py-6 text-center text-xs"
        style={{ color: "var(--junina-brown)", backgroundColor: "var(--junina-beige)" }}
      >
        Material Essencial Junino — Moldes de EVA para Festa Junina
      </footer>
    </div>
  );
}
