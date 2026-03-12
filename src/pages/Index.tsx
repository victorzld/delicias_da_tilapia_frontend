import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UtensilsCrossed, Home, Fish, MapPin, Phone, Star, ArrowRight, Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";
import hero from "@/assets/images/hero.jpg";
import SectionTitle from "@/components/SectionTitle";
import restaurante from "@/assets/images/restaurante.jpeg";
import pousada from "@/assets/images/pousada.jpeg";
import pesque_pague from "@/assets/images/pesque_pague.jpeg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import chales from "@/assets/images/atrativos/chales.jpg";
import labirinto from "@/assets/images/atrativos/labirinto.jpg";
import parquinho from "@/assets/images/atrativos/parquinho.jpeg";
import pesque_pague_atr from "@/assets/images/atrativos/pesque_pague_atr.jpg";
import piscina from "@/assets/images/atrativos/piscina.jpg";
import resturante from "@/assets/images/atrativos/restaurante.jpg";
import ivan from "@/assets/images/depoimentos/ivan.png";
import elaine from "@/assets/images/depoimentos/elaine.png";
import rayra from "@/assets/images/depoimentos/rayra.png";

const attractionImages = [
  chales,
  labirinto,
  parquinho,
  piscina,
  pesque_pague_atr,
  resturante
];

const testimonialPhotos: Record<string, string> = {
  "Ivan luciano Oliveira": ivan,
  "Elaine Brasil": elaine,
  "Ráyra Santos": rayra,
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const Index = () => {
  const { t } = useTranslation();

  const highlights = [
    { icon: UtensilsCrossed, title: t("highlights.restaurant.title"), desc: t("highlights.restaurant.desc"), img: restaurante, link: "/restaurante" },
    { icon: Home, title: t("highlights.inn.title"), desc: t("highlights.inn.desc"), img: pousada, link: "/pousada" },
    { icon: Fish, title: t("highlights.fishing.title"), desc: t("highlights.fishing.desc"), img: pesque_pague, link: "/pesque-e-pague" },
  ];

  const testimonials = t("testimonials.items", { returnObjects: true }) as Array<{ name: string; text: string }>;
  const attractions = t("attractions.items", { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={hero} alt="Delícias da Tilápia" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block text-warm-gold text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            {t("hero.subtitle")}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            {t("hero.title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t("hero.description")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5527999831006" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-warm text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-warm hover:opacity-90 transition-opacity text-lg">
              <Phone className="w-5 h-5" />
              {t("hero.cta")}
            </a>
            <Link to="/restaurante" className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors text-lg">
              {t("hero.menu")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle subtitle={t("highlights.subtitle")} title={t("highlights.title")} description={t("highlights.description")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div key={item.link} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.15 }}>
                <Link to={item.link} className="group block">
                  <div className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow duration-300">
                    <img src={item.img} alt={item.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className="w-5 h-5 text-warm-gold" />
                        <h3 className="font-heading text-xl font-bold text-primary-foreground">{item.title}</h3>
                      </div>
                      <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                      <span className="inline-flex items-center gap-1 text-warm-gold text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                        {t("highlights.learnMore")} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Carousel */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle subtitle={t("attractions.subtitle")} title={t("attractions.title")} />
          <motion.div {...fadeUp}>
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {attractions.map((item, i) => (
                  <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="cursor-pointer relative rounded-2xl overflow-hidden shadow-soft group h-80">
                      <img
                        src={attractionImages[i]}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-heading text-xl font-bold text-primary-foreground">{item.title}</h3>
                        <p className="text-primary-foreground/70 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {t("social.title")}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              {t("social.description")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://www.facebook.com/DeliciasTilapia/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-card rounded-2xl px-8 py-6 shadow-soft border border-transparent hover:border-border transition-[border-color] duration-300 w-full sm:w-auto"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(220,46%,48%)] text-primary-foreground shrink-0">
                  <Facebook className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <p className="font-heading text-lg font-bold text-foreground">Facebook</p>
                  <p className="text-muted-foreground text-sm">{t("social.facebookFollowers")}</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/deliciasdatilapia/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-card rounded-2xl px-8 py-6 shadow-soft border border-transparent hover:border-border transition-[border-color] duration-300 w-full sm:w-auto"
              >
                <div className=" flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(37,97%,70%)] via-[hsl(340,75%,55%)] to-[hsl(280,70%,50%)] text-primary-foreground shrink-0">
                  <Instagram className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <p className="font-heading text-lg font-bold text-foreground">Instagram</p>
                  <p className="text-muted-foreground text-sm">{t("social.instagramFollowers")}</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle subtitle={t("testimonials.subtitle")} title={t("testimonials.title")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-background rounded-2xl p-8 shadow-soft flex flex-col h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">"{item.text}"</p>
                <div className="mt-auto pt-4 flex items-center gap-3">
                  <img src={testimonialPhotos[item.name]} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
                  <span className="font-semibold text-foreground text-sm">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-background" id="localizacao">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle subtitle={t("location.subtitle")} title={t("location.title")} description={t("location.description")} />
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden shadow-elevated max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.5!2d-40.692!3d-20.333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9b58b91881a21%3A0x5161a11703d1564a!2sPousada%20e%20Restaurante%20Del%C3%ADcias%20da%20Til%C3%A1pia!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location"
            />
          </motion.div>
          <div className="text-center mt-8">
            <a href="https://www.google.com.br/maps/place/Pousada+e+Restaurante+Del%C3%ADcias+da+Til%C3%A1pia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              <MapPin className="w-4 h-4" />
              {t("location.openMaps")}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">{t("cta.title")}</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">{t("cta.description")}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5527999831006" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-warm text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-warm hover:opacity-90 transition-opacity">
                <Phone className="w-5 h-5" />
                {t("cta.whatsapp")}
              </a>
              <Link to="/contato" className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors">
                {t("cta.contact")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
