"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import BrandLogo from "./brand-logo";
import {
  ArrowRight,
  CloseIcon,
  ClockIcon,
  MenuIcon,
  MoonIcon,
  PhoneIcon,
  PinIcon,
  Sparkle,
  SunIcon,
  WhatsIcon,
} from "./icons";

const WHATSAPP_NUMBER = "5511975137031";
const WHATSAPP_DISPLAY = "(11) 97513-7031";
const PHONE_DISPLAY = "(11) 4526-1003";
const PHONE_DIGITS = "1145261003";
const WHATSAPP_DEFAULT_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%20Star%20Limp!%20Gostaria%20de%20fazer%20um%20pedido.`;
const PHONE_TEL_HREF = `tel:+55${PHONE_DIGITS}`;

const CATEGORIES: Array<{
  id: string;
  title: string;
  desc: string;
  items: string[];
  img: string;
  tag?: string;
}> = [
  {
    id: "detergentes",
    title: "Detergentes & Desinfetantes",
    desc: "Concentrados, neutros, perfumados e desinfetantes hospitalares para casa e empresa.",
    items: ["Detergente Ypê", "Veja Multiuso", "Pinho Sol", "Cândida"],
    img: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80",
    tag: "Mais vendida",
  },
  {
    id: "profissional",
    title: "Limpeza Profissional",
    desc: "Linha completa para condomínios, escritórios, restaurantes e indústrias.",
    items: ["Removedor de cera", "Limpa pisos", "Desengordurante"],
    img: "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?w=800&q=80",
  },
  {
    id: "descartaveis",
    title: "Descartáveis",
    desc: "Copos, pratos, guardanapos, sacos de lixo e embalagens em todos os tamanhos.",
    items: ["Copos 200ml", "Sacos de lixo", "Guardanapos"],
    img: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80",
  },
  {
    id: "higiene",
    title: "Higiene Pessoal",
    desc: "Sabonetes, álcool em gel, papel higiênico e refis para dispensers.",
    items: ["Álcool 70%", "Papel toalha", "Sabonete líquido"],
    img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=800&q=80",
  },
  {
    id: "equipamentos",
    title: "Equipamentos & Utensílios",
    desc: "Vassouras, rodos, panos, baldes, esponjas e tudo para a faxina caprichada.",
    items: ["Vassouras", "Panos multiuso", "Baldes"],
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
  },
  {
    id: "automotivos",
    title: "Linha Automotiva",
    desc: "Shampoo, cera, limpa-rodas e produtos para lava-rápido e oficinas.",
    items: ["Shampoo automotivo", "Cera", "Pretinho"],
    img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
    tag: "Novidade",
  },
];

const FEATURES = [
  { n: "01", t: "Preço de atacado", d: "Condições especiais para condomínios, restaurantes e empresas que compram em volume." },
  { n: "02", t: "Variedade que resolve", d: "Mais de 600 itens entre detergentes, descartáveis, higiene e equipamentos — num lugar só." },
  { n: "03", t: "Atendimento humano", d: "Você fala direto com a gente — sem robô, sem espera, sem burocracia." },
  { n: "04", t: "Marcas confiáveis", d: "Trabalhamos com fabricantes nacionais reconhecidos e com nota fiscal." },
];

const HERO_BUBBLES: Array<{
  size: number;
  top: string;
  left?: string;
  right?: string;
  delay: string;
}> = [
  { size: 14, top: "12%", left: "8%", delay: "0s" },
  { size: 22, top: "70%", left: "4%", delay: "1.2s" },
  { size: 10, top: "30%", left: "22%", delay: "2.4s" },
  { size: 18, top: "85%", left: "18%", delay: "0.6s" },
  { size: 12, top: "20%", right: "10%", delay: "1.8s" },
  { size: 26, top: "60%", right: "6%", delay: "3s" },
  { size: 14, top: "40%", right: "22%", delay: "0.3s" },
];

const KIND_OPTIONS = ["Casa", "Empresa", "Condomínio", "Revenda"] as const;
type Kind = (typeof KIND_OPTIONS)[number];

function Brand({ variant = "default" }: { variant?: "default" | "onDark" }) {
  return (
    <a href="#top" className="sl-brand" aria-label="Star Limp - página inicial">
      <BrandLogo height={40} variant={variant} />
    </a>
  );
}

function Nav({ dark, onToggleDark }: { dark: boolean; onToggleDark: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="sl-nav">
      <Brand />
      <ul className="sl-nav-links">
        <li>
          <a href="#categorias">Categorias</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
      <div className="sl-nav-right">
        <button
          type="button"
          className="sl-theme-btn"
          onClick={onToggleDark}
          aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
        <a href="#contato" className="sl-nav-cta">
          Fazer pedido
          <ArrowRight size={16} />
        </a>
        <button
          type="button"
          className="sl-menu-btn"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <MenuIcon />
        </button>
      </div>

      {open && (
        <div className="sl-mobile-menu">
          <div className="sl-mobile-head">
            <a
              href="#top"
              className="sl-brand"
              onClick={() => setOpen(false)}
              aria-label="Star Limp - página inicial"
            >
              <BrandLogo height={36} />
            </a>
            <button
              type="button"
              className="sl-menu-btn"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              style={{ display: "inline-flex" }}
            >
              <CloseIcon />
            </button>
          </div>
          <ul className="sl-mobile-links">
            <li>
              <a href="#categorias" onClick={() => setOpen(false)}>
                Categorias <ArrowRight size={18} />
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={() => setOpen(false)}>
                Sobre <ArrowRight size={18} />
              </a>
            </li>
            <li>
              <a href="#contato" onClick={() => setOpen(false)}>
                Contato <ArrowRight size={18} />
              </a>
            </li>
          </ul>
          <div className="sl-mobile-foot">
            <button type="button" className="sl-mobile-theme" onClick={onToggleDark}>
              {dark ? <SunIcon /> : <MoonIcon />}
              {dark ? "Modo claro" : "Modo escuro"}
            </button>
            <a
              href="#contato"
              className="sl-btn sl-btn-primary"
              onClick={() => setOpen(false)}
              style={{ justifyContent: "center" }}
            >
              <WhatsIcon size={20} />
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero({ dark, onToggleDark }: { dark: boolean; onToggleDark: () => void }) {
  return (
    <header id="top" className="sl-hero">
      {HERO_BUBBLES.map((b, i) => (
        <span
          key={i}
          className="sl-bubble"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            right: b.right,
            animationDelay: b.delay,
          }}
        />
      ))}

      <Nav dark={dark} onToggleDark={onToggleDark} />

      <div className="sl-hero-grid">
        <div className="sl-hero-copy">
          <span className="sl-eyebrow">
            <Sparkle size={12} color="var(--sl-accent-ink)" />
            Atendendo Várzea Paulista &amp; região
          </span>
          <h1 className="sl-hero-title">
            Limpeza <em>brilhante</em>
            <br />
            entregue na sua porta.
          </h1>
          <p className="sl-hero-sub">
            Detergentes, descartáveis, higiene e equipamentos profissionais. Pedido rápido pelo
            WhatsApp para Várzea Paulista, Jundiaí, Campo Limpo e Itupeva.
          </p>
          <div className="sl-hero-ctas">
            <a className="sl-btn sl-btn-primary" href="#contato">
              <WhatsIcon size={20} />
              Pedir pelo WhatsApp
            </a>
            <a className="sl-btn sl-btn-ghost" href="#categorias">
              Ver categorias
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="sl-hero-stats">
            <div>
              <b>+12</b>
              <span>anos no mercado</span>
            </div>
            <div>
              <b>+800</b>
              <span>clientes ativos</span>
            </div>
            <div>
              <b>600+</b>
              <span>itens em estoque</span>
            </div>
          </div>
        </div>

        <div className="sl-hero-card">
          <div className="sl-hero-art">
            <div className="sl-art-img-wrap">
              <Image
                className="sl-art-img"
                src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=900&q=80"
                alt="Produtos de limpeza"
                fill
                sizes="(max-width: 900px) 360px, 480px"
                priority
              />
            </div>
            <div className="sl-art-tag">
              <Sparkle size={14} color="var(--sl-accent-ink)" />
              Frete grátis na região
            </div>
            <div className="sl-art-mini">
              <div className="sl-art-mini-row">
                <span className="sl-art-dot sl-art-dot--primary" />
                <div>
                  <div className="sl-art-mini-t">Detergente Concentrado</div>
                  <div className="sl-art-mini-s">5L · profissional</div>
                </div>
              </div>
              <div className="sl-art-mini-row">
                <span className="sl-art-dot sl-art-dot--accent" />
                <div>
                  <div className="sl-art-mini-t">Pano Multiuso (50un)</div>
                  <div className="sl-art-mini-s">descartável</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sl-marquee">
        <div className="sl-marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="sl-marquee-row">
              <span>★ Atendimento personalizado</span>
              <span>★ Atendimento empresarial</span>
              <span>★ Atacado &amp; varejo</span>
              <span>★ Mais de 12 anos em Várzea Paulista</span>
              <span>★ Pedidos via WhatsApp</span>
              <span>★ Produtos profissionais</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function CategoryCard({ cat, idx }: { cat: (typeof CATEGORIES)[number]; idx: number }) {
  const isAlt = idx % 2 === 1;
  const accent = isAlt ? "var(--sl-accent)" : "var(--sl-primary)";
  const overlay = isAlt
    ? "linear-gradient(180deg, transparent 30%, color-mix(in srgb, var(--sl-accent) 80%, transparent) 100%)"
    : "linear-gradient(180deg, transparent 30%, color-mix(in srgb, var(--sl-primary) 80%, transparent) 100%)";

  return (
    <a
      href="#contato"
      className="sl-cat"
      style={{ ["--cat-accent" as string]: accent }}
    >
      <div className="sl-cat-art">
        <Image
          className="sl-cat-img"
          src={cat.img}
          alt={cat.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="sl-cat-overlay" style={{ background: overlay }} />
        <div className="sl-cat-num">0{idx + 1}</div>
        {cat.tag && <span className="sl-cat-tag">{cat.tag}</span>}
      </div>
      <div className="sl-cat-body">
        <h3>{cat.title}</h3>
        <p>{cat.desc}</p>
        <ul className="sl-cat-list">
          {cat.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
        <div className="sl-cat-foot">
          <span>Consultar no WhatsApp</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </a>
  );
}

function Categories() {
  return (
    <section id="categorias" className="sl-section">
      <div className="sl-section-head">
        <span className="sl-eyebrow sl-eyebrow-light">
          <span className="sl-dot sl-dot--primary" />
          O que vendemos
        </span>
        <h2 className="sl-section-title">
          Tudo o que sua casa
          <br />
          ou empresa precisa <em>limpa</em>.
        </h2>
        <p className="sl-section-sub">
          Trabalhamos com mais de 600 itens entre varejo e atacado. Não tem o produto na lista?
          Manda pra gente — provavelmente conseguimos.
        </p>
      </div>
      <div className="sl-cat-grid">
        {CATEGORIES.map((c, i) => (
          <CategoryCard key={c.id} cat={c} idx={i} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="sl-section sl-about">
      <div className="sl-about-grid">
        <div>
          <span className="sl-eyebrow sl-eyebrow-light">
            <span className="sl-dot sl-dot--accent" />
            Por que a Star Limp
          </span>
          <h2 className="sl-section-title">
            Da prateleira da loja
            <br />
            pro chão da sua casa
            <br />
            <em>num pedido só.</em>
          </h2>
          <p className="sl-section-sub">
            Somos uma família de Várzea Paulista entregando produtos de limpeza há mais de uma
            década. Atendemos desde a vovó que precisa de detergente até o restaurante que
            abastece a cozinha toda semana.
          </p>
        </div>
        <div className="sl-feat-list">
          {FEATURES.map((f) => (
            <div key={f.n} className="sl-feat">
              <span className="sl-feat-n">{f.n}</span>
              <div>
                <h4>{f.t}</h4>
                <p>{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState<{ name: string; phone: string; kind: Kind; message: string }>({
    name: "",
    phone: "",
    kind: "Casa",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá Star Limp! 👋\n\nNome: ${form.name}\nTelefone: ${form.phone}\nTipo: ${form.kind}\n\n${form.message}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contato" className="sl-section sl-contact">
      <div className="sl-contact-grid">
        <div className="sl-contact-info">
          <span className="sl-eyebrow">
            <Sparkle size={12} color="var(--sl-accent-ink)" />
            Bora limpar?
          </span>
          <h2 className="sl-section-title sl-contact-title">
            Faça seu pedido
            <br />
            em 2 minutos
            <br />
            no <em>WhatsApp.</em>
          </h2>
          <p className="sl-contact-sub">
            Atendimento de segunda a sábado. Entrega para Várzea Paulista, Jundiaí, Campo Limpo
            Paulista, Itupeva e Cabreúva.
          </p>

          <ul className="sl-contact-list">
            <li>
              <a
                className="sl-contact-link"
                href={WHATSAPP_DEFAULT_HREF}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsIcon size={18} color="currentColor" />
                <span>
                  {WHATSAPP_DISPLAY} · <span className="sl-contact-link-cta">enviar mensagem no WhatsApp</span>
                </span>
              </a>
            </li>
            <li>
              <a className="sl-contact-link" href={PHONE_TEL_HREF}>
                <PhoneIcon />
                <span>
                  {PHONE_DISPLAY} · <span className="sl-contact-link-cta">ligar agora</span>
                </span>
              </a>
            </li>
            <li>
              <PinIcon /> Várzea Paulista, SP — atendemos toda a região
            </li>
            <li>
              <ClockIcon /> Seg–Sex 8h30–17h · Sáb 8h30–12h
            </li>
          </ul>
        </div>

        <form className="sl-contact-form" onSubmit={submit}>
          <h3>Solicite seu orçamento</h3>
          <p className="sl-form-sub">Preencha que abrimos o WhatsApp já com sua mensagem.</p>

          <label className="sl-field">
            <span>Seu nome</span>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Como podemos te chamar?"
            />
          </label>
          <label className="sl-field">
            <span>Telefone</span>
            <input
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="(11) 9 9999-9999"
            />
          </label>
          <div className="sl-field">
            <span>Tipo de pedido</span>
            <div className="sl-pill-row">
              {KIND_OPTIONS.map((k) => (
                <button
                  type="button"
                  key={k}
                  className={`sl-pill ${form.kind === k ? "is-on" : ""}`}
                  onClick={() => setForm({ ...form, kind: k })}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>
          <label className="sl-field">
            <span>O que você precisa?</span>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Ex: 2 desinfetantes 5L, 1 pacote de pano multiuso, 1 vassoura..."
            />
          </label>

          <button type="submit" className="sl-form-submit">
            <WhatsIcon size={20} />
            {sent ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
          </button>
          <p className="sl-form-fineprint">
            Sem cadastro, sem spam. A conversa continua direto com a gente.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="sl-footer">
      <div className="sl-footer-grid">
        <div>
          <Brand variant="onDark" />
          <p className="sl-footer-tag">
            Produtos de limpeza para casa, empresa e indústria. Entregamos em Várzea Paulista e
            região há mais de 12 anos.
          </p>
        </div>
        <div>
          <h5>Categorias</h5>
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <a href="#categorias">{c.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Empresa</h5>
          <ul>
            <li>
              <a href="#sobre">Sobre nós</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>
              <a href="#contato">Trabalhe conosco</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Atendimento</h5>
          <ul>
            <li>
              <a href={WHATSAPP_DEFAULT_HREF} target="_blank" rel="noreferrer">
                {WHATSAPP_DISPLAY} · WhatsApp
              </a>
            </li>
            <li>
              <a href={PHONE_TEL_HREF}>{PHONE_DISPLAY} · ligar</a>
            </li>
            <li>
              <a href="mailto:contato@starlimp.com.br">contato@starlimp.com.br</a>
            </li>
            <li>Seg–Sex 8h30–17h · Sáb 8h30–12h</li>
          </ul>
        </div>
      </div>
      <div className="sl-footer-bar">
        <span>© 2026 Star Limp · Várzea Paulista/SP · CNPJ ##.###.###/0001-##</span>
        <span>Site desenhado com carinho ★</span>
      </div>
    </footer>
  );
}

function WhatsFloat() {
  return (
    <a
      className="sl-wfloat"
      href={WHATSAPP_DEFAULT_HREF}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <span className="sl-wfloat-pulse" />
      <span className="sl-wfloat-btn">
        <WhatsIcon size={28} />
      </span>
      <span className="sl-wfloat-label">Pedir pelo WhatsApp</span>
    </a>
  );
}

export default function StarLimp() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <>
      <Hero dark={dark} onToggleDark={() => setDark((v) => !v)} />
      <Categories />
      <About />
      <Contact />
      <Footer />
      <WhatsFloat />
    </>
  );
}
