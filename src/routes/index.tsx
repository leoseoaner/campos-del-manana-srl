import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, MapPin, Menu, Phone, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/image-4.png";
import cattleAsset from "@/assets/image-2.png";
import corralAsset from "@/assets/image-3.png";
import fieldAsset from "@/assets/image-5.png";
import truckAsset from "@/assets/image-6.png";
import buffaloAsset from "@/assets/image-7.png";
import brandAsset from "@/assets/image-8.png";
import teamAsset from "@/assets/image-9.png";

const PHONE_DISPLAY = "0379 454-6785";
const PHONE_LINK = "tel:+543794546785";
const WHATSAPP = "https://wa.me/543794546785";

const services = [
  { n: "01", title: "Consignación de hacienda", text: "Remates físicos y televisados, venta privada de lotes y asesoramiento en comercialización.", image: cattleAsset.url },
  { n: "02", title: "Granos y subproductos", text: "Comercialización de granos y subproductos agropecuarios.", image: fieldAsset.url },
  { n: "03", title: "Administración de campos", text: "Gestión integral de establecimientos, control y seguimiento de la actividad productiva.", image: corralAsset.url },
  { n: "04", title: "Auditorías y asesoramiento", text: "Auditorías productivas y económicas y asesoramiento especializado.", image: teamAsset.url },
  { n: "05", title: "Reproducción, genética y sanidad", text: "Asesoramiento en reproducción, genética y sanidad.", image: heroAsset.url },
  { n: "06", title: "Transporte de hacienda", text: "Coordinación y logística para el traslado de animales.", image: truckAsset.url },
];

const gallery = [
  { src: cattleAsset.url, alt: "Trabajo con un lote de hacienda en corrales", cls: "gallery-wide" },
  { src: fieldAsset.url, alt: "Trabajo ganadero con hacienda en Corrientes", cls: "gallery-tall" },
  { src: corralAsset.url, alt: "Jinetes y hacienda en instalaciones rurales", cls: "" },
  { src: buffaloAsset.url, alt: "Lote de búfalos en un establecimiento ganadero", cls: "gallery-wide" },
  { src: truckAsset.url, alt: "Carga y transporte de hacienda", cls: "gallery-tall" },
];

const faqs = [
  ["¿Cómo participar en un remate?", "Las condiciones y modalidad se informan para cada remate. Contactanos para conocer los requisitos del próximo encuentro."],
  ["¿Cómo puedo vender mi hacienda?", "Comunicate con nuestro equipo para conversar sobre el lote y evaluar la modalidad de comercialización adecuada."],
  ["¿Qué condiciones de pago ofrecen?", "Las condiciones dependen de cada operación y remate. Consultanos para conocer las condiciones vigentes."],
  ["¿Trabajan con productores de otras localidades?", "Consultanos para confirmar cobertura y coordinar la atención según la ubicación del establecimiento."],
  ["¿Realizan transporte de hacienda?", "Sí. Coordinamos la logística para el traslado de animales según cada operación."],
  ["¿Administran campos?", "Sí. Brindamos gestión integral, control y seguimiento de la actividad productiva."],
  ["¿Brindan asesoramiento ganadero?", "Sí, en reproducción, genética, sanidad, gestión y preparación de hacienda para remates y exposiciones."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campos del Mañana S.R.L. | Consignataria en Corrientes" },
      { name: "description", content: "Campos del Mañana S.R.L. — Consignataria de hacienda, remates, granos, administración de campos y servicios ganaderos en Corrientes." },
      { property: "og:title", content: "Campos del Mañana S.R.L. | Consignataria de Hacienda" },
      { property: "og:description", content: "Consignataria de hacienda y servicios ganaderos en Corrientes." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": ["Organization", "LocalBusiness"], name: "Campos del Mañana S.R.L.", foundingDate: "2014-06-27", taxID: "30-71451887-5", telephone: "+54 379 454-6785", address: { "@type": "PostalAddress", streetAddress: "Tucumán 1051, Oficina 4", postalCode: "W3400", addressLocality: "Corrientes", addressRegion: "Corrientes", addressCountry: "AR" }, sameAs: ["https://www.instagram.com/camposdelmananasrl/"] }) }],
  }),
  component: Home,
});

function Brand({ compact = false }: { compact?: boolean }) {
  return <a href="#inicio" className="brand" aria-label="Campos del Mañana, inicio"><span className="brand-mark" aria-hidden="true">C</span><span className={compact ? "brand-copy compact" : "brand-copy"}><b>Campos</b><small>del mañana</small></span></a>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 50); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const links = [["Inicio", "#inicio"], ["Nosotros", "#nosotros"], ["Servicios", "#servicios"], ["Remates", "#remates"], ["Multimedia", "#multimedia"], ["Contacto", "#contacto"]];
  return <>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Brand compact={scrolled} />
      <nav className="desktop-nav" aria-label="Navegación principal">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <div className="header-actions"><a className="phone-link" href={PHONE_LINK}><Phone /> <span>{PHONE_DISPLAY}</span></a><Button asChild variant="contact" size="contact"><a href="#contacto">Contactar</a></Button><Button className="menu-button" variant="iconLight" size="icon" onClick={() => setOpen(true)} aria-label="Abrir menú"><Menu /></Button></div>
    </header>
    <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}><div className="mobile-menu-top"><Brand /><Button variant="iconLight" size="icon" onClick={() => setOpen(false)} aria-label="Cerrar menú"><X /></Button></div><nav>{links.map(([label, href], i) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</a>)}</nav><a className="mobile-phone" href={PHONE_LINK}><Phone /> {PHONE_DISPLAY}</a></div>
  </>;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { node.classList.add("visible"); observer.disconnect(); } }, { threshold: .12 }); observer.observe(node); return () => observer.disconnect(); }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function SectionHead({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return <div className={`section-head ${light ? "light" : ""}`}><span>{eyebrow}</span><h2>{title}</h2></div>;
}

function Hero() {
  return <section id="inicio" className="hero"><img src={heroAsset.url} alt="Hacienda de Campos del Mañana en un campo de la región" fetchPriority="high" /><div className="hero-shade" /><div className="hero-content"><p className="hero-kicker">Corrientes · Argentina</p><h1>El campo encuentra aquí<br />su próximo destino.</h1><p className="hero-sub">Consignataria de hacienda y servicios ganaderos en Corrientes.</p><div className="hero-actions"><Button asChild variant="hero" size="hero"><a href="#remates">Ver próximos remates <ArrowUpRight /></a></Button><Button asChild variant="heroOutline" size="hero"><a href="#contacto">Contactar</a></Button></div></div><a href="#intro" className="scroll-cue" aria-label="Ver más contenido"><span>Descubrir</span><ArrowDown /></a></section>;
}

function Services() {
  const [active, setActive] = useState(0);
  return <section id="servicios" className="services section-pad"><div className="shell"><SectionHead eyebrow="03 / Servicios" title="Soluciones para cada etapa del negocio ganadero." /><div className="services-list">{services.map((s, i) => <article key={s.n} className={`service-row ${active === i ? "active" : ""}`} onMouseEnter={() => setActive(i)}><button onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}><span className="service-number">{s.n}</span><h3>{s.title}</h3><span className="service-plus">{active === i ? "—" : "+"}</span></button><div className="service-detail"><img src={s.image} alt="" loading="lazy" /><div><p>{s.text}</p><a href="#contacto">Consultar servicio <ArrowUpRight /></a></div></div></article>)}</div></div></section>;
}

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => { const key = (e: KeyboardEvent) => { if (selected === null) return; if (e.key === "Escape") setSelected(null); if (e.key === "ArrowRight") setSelected((selected + 1) % gallery.length); if (e.key === "ArrowLeft") setSelected((selected - 1 + gallery.length) % gallery.length); }; window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key); }, [selected]);
  return <section id="multimedia" className="gallery-section section-pad"><div className="shell"><SectionHead eyebrow="09 / Multimedia" title="El campo, en movimiento." light /><div className="gallery-grid">{gallery.map((item, i) => <button key={item.src} className={item.cls} onClick={() => setSelected(i)} aria-label={`Abrir imagen ${i + 1}`}><img src={item.src} alt={item.alt} loading="lazy" /><span>Ver</span></button>)}</div></div>{selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galería de imágenes"><Button variant="iconLight" size="icon" className="lightbox-close" onClick={() => setSelected(null)} aria-label="Cerrar"><X /></Button><Button variant="iconLight" size="icon" onClick={() => setSelected((selected - 1 + gallery.length) % gallery.length)} aria-label="Anterior"><ArrowLeft /></Button><img src={gallery[selected]?.src} alt={gallery[selected]?.alt ?? ""} /><Button variant="iconLight" size="icon" onClick={() => setSelected((selected + 1) % gallery.length)} aria-label="Siguiente"><ArrowRight /></Button></div>}</section>;
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); const form = e.currentTarget; if (!form.reportValidity()) return; setStatus("loading"); const data = new FormData(form); const message = `Hola, soy ${data.get("name")}. Motivo: ${data.get("reason")}. ${data.get("message")}`; setTimeout(() => { setStatus("success"); window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer"); }, 500); };
  return <form className="contact-form" onSubmit={submit}><div className="field-grid"><label>Nombre<input name="name" required autoComplete="name" /></label><label>Teléfono<input name="phone" required type="tel" autoComplete="tel" /></label></div><label>Email<input name="email" type="email" autoComplete="email" /></label><label>Motivo de consulta<select name="reason" required defaultValue=""><option value="" disabled>Seleccionar</option>{["Comprar hacienda", "Vender hacienda", "Remates", "Administración de campos", "Granos y subproductos", "Transporte", "Asesoramiento", "Otro"].map(x => <option key={x}>{x}</option>)}</select></label><label>Mensaje<textarea name="message" required rows={4} /></label><Button type="submit" variant="hero" size="hero" disabled={status === "loading"}>{status === "loading" ? "Preparando…" : "Enviar consulta"}<ArrowUpRight /></Button>{status === "success" && <p className="form-status" role="status">Abrimos WhatsApp con tu consulta preparada.</p>}</form>;
}

function Home() {
  return <main>
    <Header /><Hero />
    <section id="intro" className="intro section-pad"><div className="shell"><Reveal className="intro-copy"><span className="eyebrow">01 / Del campo al mercado</span><h2>Una mirada cercana.<br /><em>Un trabajo integral.</em></h2><p>Campos del Mañana S.R.L. desarrolla soluciones integrales para la actividad ganadera, acompañando la comercialización de hacienda y brindando servicios vinculados a la gestión y producción.</p></Reveal><Reveal className="intro-image"><img src={corralAsset.url} alt="Hacienda reunida en instalaciones rurales" loading="lazy" /><span>Territorio, experiencia y movimiento</span></Reveal></div></section>

    <section className="ecosystem section-pad"><div className="shell"><SectionHead eyebrow="02 / Nuestra mirada" title="El negocio ganadero como un ecosistema." light /><Reveal className="ecosystem-flow">{["Comercialización", "Asesoramiento", "Logística", "Administración", "Producción"].map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong>{i < 4 && <i />}</div>)}</Reveal></div></section>

    <Services />

    <section className="commercial-cta"><div className="shell"><p>Hablemos de su próxima operación</p><h2>¿Tenés hacienda<br />para vender?</h2><span>Conversemos sobre la mejor manera de comercializarla.</span><div><Button asChild variant="light" size="hero"><a href={PHONE_LINK}><Phone /> Llamar ahora</a></Button><Button asChild variant="heroOutline" size="hero"><a href="#contacto">Contactar</a></Button></div></div></section>

    <section id="remates" className="auctions section-pad"><div className="shell"><SectionHead eyebrow="04 / Agenda comercial" title="Próximos remates." light /><Reveal className="auction-empty"><div className="auction-date"><small>Agenda</small><strong>Próximamente</strong></div><div><h3>Estamos preparando los próximos encuentros comerciales.</h3><p>Consultá con nuestro equipo para conocer novedades, condiciones y próximas fechas.</p><Button asChild variant="light" size="hero"><a href={`${WHATSAPP}?text=${encodeURIComponent("Hola, quisiera consultar por los próximos remates.")}`} target="_blank" rel="noreferrer">Consultar por próximos remates <ArrowUpRight /></a></Button></div></Reveal></div></section>

    <section className="archive section-pad"><div className="shell"><SectionHead eyebrow="05 / Archivo" title="El movimiento del campo." /><div className="editorial-grid"><figure className="archive-main"><img src={teamAsset.url} alt="Equipo a caballo durante una jornada ganadera" loading="lazy" /><figcaption><span>Eventos</span><b>Presencia en el territorio</b></figcaption></figure><figure><img src={truckAsset.url} alt="Trabajo de carga y transporte de hacienda" loading="lazy" /><figcaption><span>Logística</span><b>La hacienda en movimiento</b></figcaption></figure><figure><img src={buffaloAsset.url} alt="Lote de búfalos en Corrientes" loading="lazy" /><figcaption><span>Hacienda</span><b>Producción y manejo</b></figcaption></figure></div></div></section>

    <section className="liquid-brand"><img className="liquid-bg" src={brandAsset.url} alt="Camión de transporte ganadero de Campos del Mañana" loading="lazy" /><div className="liquid-overlay" /><div className="shell liquid-content"><span className="eyebrow">06 / Proyecto destacado</span><h2>Marca<br /><em>Líquida.</em></h2><p>Campos del Mañana participó en este proyecto ganadero y en su primer remate de reproductores, realizado en la Sociedad Rural de Corrientes.</p><div className="big-facts"><div><strong>45</strong><span>Toros</span></div><div><strong>100</strong><span>Hembras</span></div><div><strong>12</strong><span>Cuotas fijas*</span></div></div><small>*Información histórica de aquel remate: sin interés, flete gratis hasta 500 km y sin comisión para el comprador. No representa condiciones vigentes.</small></div></section>

    <section id="nosotros" className="about section-pad"><div className="shell about-grid"><SectionHead eyebrow="07 / Nosotros" title="Una empresa nacida en Corrientes, con mirada hacia el futuro." /><Reveal className="about-copy"><p>Desde 2014, Campos del Mañana desarrolla su actividad en el sector ganadero, vinculando productores, hacienda y oportunidades comerciales.</p><p>La consignación se complementa con servicios de administración, transporte, auditoría y asesoramiento para acompañar distintas etapas de la producción.</p><div className="network"><span>Trabajamos en red</span><h3>Reggi &amp; Cía. S.R.L.</h3><p>Ambas empresas han trabajado conjuntamente en eventos y remates.</p></div></Reveal></div></section>

    <section className="team section-pad"><div className="shell"><SectionHead eyebrow="08 / Equipo" title="Personas detrás del negocio." /><div className="team-layout"><div className="team-photo"><img src={teamAsset.url} alt="Equipo vinculado a la actividad ganadera en el campo" loading="lazy" /></div><div className="team-person"><span>Socio Gerente</span><h3>Osvaldo<br />Benítez Hardoy</h3><p>Dato editable, sujeto a validación final de la empresa.</p></div><div className="team-note"><span>Equipo ampliado</span><p>Espacio preparado para incorporar a Francisco Benítez Hardoy y María de la Paz Benítez Hardoy una vez validada su publicación.</p></div></div></div></section>

    <section className="presence section-pad"><div className="shell"><SectionHead eyebrow="Presencia en el sector" title="Donde sucede la ganadería." /><div className="presence-list">{["Sociedad Rural de Corrientes", "Expo Rural", "Remates televisados", "Eventos ganaderos"].map((x, i) => <div key={x}><span>0{i + 1}</span><h3>{x}</h3><ArrowUpRight /></div>)}</div></div></section>

    <Gallery />

    <section className="video-section"><div className="video-poster"><img src={cattleAsset.url} alt="Hacienda y trabajadores en una jornada de campo" loading="lazy" /><div><Button variant="play" size="play" aria-label="Video próximamente"><Play /></Button><span>Video próximamente</span></div></div><div className="video-title"><span>Vivimos el campo</span><h2>en movimiento.</h2></div></section>

    <section className="trust section-pad"><div className="shell"><SectionHead eyebrow="Confianza basada en hechos" title="Raíces firmes. Trabajo presente." /><div className="trust-grid">{[["Desde", "2014"], ["Origen", "Corrientes"], ["Actividad", "Consignación de hacienda"], ["Alcance", "Servicios ganaderos"], ["Gestión", "Administración y asesoramiento"]].map(([a,b]) => <div key={b}><span>{a}</span><strong>{b}</strong></div>)}</div></div></section>

    <section className="faq section-pad"><div className="shell faq-grid"><SectionHead eyebrow="Preguntas frecuentes" title="Información clara para decidir." /><div>{faqs.map(([q,a], i) => <details key={q} open={i === 0}><summary>{q}<ChevronDown /></summary><p>{a}</p></details>)}</div></div></section>

    <section id="contacto" className="contact section-pad"><div className="shell contact-grid"><div className="contact-copy"><span className="eyebrow">10 / Contacto</span><h2>Hablemos.</h2><p>Estamos en Corrientes para conversar sobre hacienda, remates y servicios ganaderos.</p><a className="contact-phone" href={PHONE_LINK}>{PHONE_DISPLAY}<ArrowUpRight /></a><address>Tucumán 1051, Oficina 4<br />Corrientes, Corrientes<br />W3400 — Argentina</address><div className="social-links"><a href="https://www.instagram.com/camposdelmananasrl/" target="_blank" rel="noreferrer">Instagram · @camposdelmananasrl</a><span>Facebook · Campos Del Mañana S.R.L.</span><span>Horarios de atención: consultar</span></div></div><ContactForm /></div></section>

    <section className="map-section"><iframe title="Mapa de Campos del Mañana en Corrientes" loading="lazy" src="https://www.google.com/maps?q=Tucum%C3%A1n%201051%2C%20Corrientes%2C%20Argentina&output=embed" /><div className="map-card"><MapPin /><span>Tucumán 1051, Oficina 4</span><Button asChild variant="default" size="lg"><a href="https://www.google.com/maps/search/?api=1&query=Tucum%C3%A1n+1051%2C+Corrientes%2C+Argentina" target="_blank" rel="noreferrer">Cómo llegar <ArrowUpRight /></a></Button></div></section>

    <section className="final-cta"><img src={fieldAsset.url} alt="Trabajo con hacienda en el campo" loading="lazy" /><div className="final-overlay" /><div><span>Campos del Mañana</span><h2>El próximo paso<br />empieza con una conversación.</h2><Button asChild variant="hero" size="hero"><a href={PHONE_LINK}><Phone /> {PHONE_DISPLAY}</a></Button></div></section>

    <footer><div className="shell"><div className="footer-main"><Brand /><p>Consignataria de hacienda y servicios ganaderos en Corrientes.</p><nav><a href="#inicio">Inicio</a><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#remates">Remates</a><a href="#multimedia">Multimedia</a><a href="#contacto">Contacto</a></nav></div><div className="company-data"><span>Razón social: Campos del Mañana S.R.L.</span><span>CUIT: 30-71451887-5</span><span>Constitución: 27 de junio de 2014</span><span>Actividad: Servicios empresariales n.c.p. — código 829900</span></div><div className="footer-bottom"><span>© Campos del Mañana S.R.L. Todos los derechos reservados.</span><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></div></div></footer>

    <a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><span>¿Hablamos?</span><Phone /></a><div className="mobile-contact"><a href={PHONE_LINK}><Phone /> Llamar</a><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight /></a></div>
  </main>;
}
