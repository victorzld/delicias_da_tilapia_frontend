import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Waves,
  Mountain,
  Wifi,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/SectionTitle";
import chales from "@/assets/images/atrativos/chales.jpg";
import chale from "@/assets/images/chale.png";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Pousada = () => {
  const { t } = useTranslation();

  // Estados para controlar o item expandido e o slide atual
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Estados para suportar o "swipe" (arrastar) no mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Distância mínima de arraste para considerar como troca de slide
  const minSwipeDistance = 50;

  // Lógica para abrir/fechar a sanfona (accordion)
  const handleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Fecha se clicar no mesmo
    } else {
      setExpandedIndex(index);
      setCurrentSlide(0); // Reseta o slide ao abrir um novo
    }
  };

  const nextSlide = (total: number) => {
    setCurrentSlide((prev) => (prev + 1) % total);
  };

  const prevSlide = (total: number) => {
    setCurrentSlide((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  // Lógica de manipulação de toques (Swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null); // Reseta o ponto final ao iniciar um novo toque
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (total: number) => {
    if (!touchStartX || !touchEndX || total <= 1) return;

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide(total); // Arrastou pra esquerda, avança o slide
    } else if (isRightSwipe) {
      prevSlide(total); // Arrastou pra direita, volta o slide
    }
  };

  // Tipagem atualizada para receber a nova propriedade 'isGenericImage'
  const chalets = t("innPage.chalets", { returnObjects: true }) as Array<{
    name: string;
    desc: string;
    capacity: string;
    price: number;
    units: Array<{
      name: string;
      desc: string;
      image: string;
      isGenericImage?: boolean;
    }>;
  }>;

  const additionalPricing = t("innPage.additionalPricing", {
    returnObjects: true,
  }) as Array<{
    label: string;
    price: number | string;
  }>;

  const amenities = [
    { icon: Wifi, label: t("innPage.amenities.wifi") },
    { icon: Mountain, label: t("innPage.amenities.mountain") },
    { icon: Waves, label: t("innPage.amenities.jacuzzi") },
    { icon: Users, label: t("innPage.amenities.guests") },
  ];

  return (
    <div className="pt-16">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src={chales}
          alt="Pousada"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground"
          >
            {t("innPage.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-primary-foreground/80 text-lg"
          >
            {t("innPage.heroSubtitle")}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeUp}>
              <img
                src={chale}
                alt="Chalé"
                className="rounded-2xl shadow-elevated w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {t("innPage.lodgingSubtitle")}
              </span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">
                {t("innPage.lodgingTitle")}
              </h2>
              <p className="text-justify text-muted-foreground leading-relaxed mb-4">
                {t("innPage.lodgingP1")}
              </p>
              <p className="text-justify text-muted-foreground leading-relaxed">
                {t("innPage.lodgingP2")}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {amenities.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <c.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{c.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <SectionTitle
            subtitle={t("innPage.chaletsSubtitle")}
            title={t("innPage.chaletsTitle")}
            description={t("innPage.chaletsDescription")}
          />

          <div className="space-y-6">
            {chalets.map((c, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background rounded-xl shadow-soft overflow-hidden border border-transparent transition-colors hover:border-primary/20"
              >
                {/* Header clicável para expandir */}
                <div
                  onClick={() => handleExpand(i)}
                  className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {c.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-foreground">
                          {c.capacity}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-primary">
                          {c.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          / diária
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center sm:justify-end gap-2 mt-4 sm:mt-0 text-primary bg-primary/5 px-4 py-2 rounded-lg">
                    <span className="text-sm font-semibold">
                      {expandedIndex === i
                        ? t("innPage.hideOptions")
                        : t("innPage.expandOptions")}
                    </span>
                    {expandedIndex === i ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Área Expandida com Slide */}
                <AnimatePresence>
                  {expandedIndex === i && c.units && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-muted/30 border-t border-border overflow-hidden"
                    >
                      <div
                        className="py-8 relative"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={() => handleTouchEnd(c.units.length)}
                      >
                        {/* Container de máscara para o carrossel */}
                        <div className="overflow-hidden w-full">
                          {/* Trilho que se move no eixo X para dar o efeito de deslize */}
                          <motion.div
                            className="flex"
                            animate={{ x: `-${currentSlide * 100}%` }}
                            transition={{
                              type: "spring",
                              bounce: 0,
                              duration: 0.5,
                            }}
                          >
                            {c.units.map((unit, uIdx) => (
                              <div
                                key={uIdx}
                                className="w-full shrink-0 px-8 sm:px-12 md:px-16"
                              >
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                  {/* Lado Esquerdo: Imagem + Aviso Condicional */}
                                  <div className="w-full md:w-1/2 flex flex-col gap-2">
                                    <div className="w-full aspect-video bg-muted rounded-xl flex flex-col items-center justify-center text-muted-foreground border border-border overflow-hidden relative pointer-events-none">
                                      {unit.image ? (
                                        <img
                                          src={unit.image}
                                          alt={unit.name}
                                          className="w-full h-full object-cover absolute inset-0"
                                          draggable={false}
                                        />
                                      ) : (
                                        <>
                                          <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
                                          <span className="text-sm font-medium">
                                            Foto de {unit.name}
                                          </span>
                                        </>
                                      )}
                                    </div>
                                    {/* Aviso condicional */}
                                    {unit.isGenericImage && (
                                      <p className="text-[11px] leading-tight text-muted-foreground text-center italic mt-1">
                                        {unit.name
                                          .toLowerCase()
                                          .includes("suíte") ||
                                        unit.name
                                          .toLowerCase()
                                          .includes("suite")
                                          ? t("innPage.genericImageNoteSuite")
                                          : t("innPage.genericImageNoteChale")}
                                      </p>
                                    )}
                                  </div>

                                  {/* Lado Direito: Informações e Botão */}
                                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    {/* 1ª Linha (Inline): Nome e Descrição */}
                                    <div className="flex flex-col xl:flex-col xl:items-start justify-between gap-2 mb-6 border-b border-border/30 pb-4">
                                      <h4 className="font-heading text-lg font-bold text-foreground shrink-0">
                                        {unit.name}
                                      </h4>
                                      <p className="text-muted-foreground text-sm xl:text-left">
                                        {unit.desc}
                                      </p>
                                    </div>

                                    {/* 2ª Linha (Inline): Preço e Botão menores */}
                                    <div className="flex flex-row justify-between items-center mt-auto">
                                      <div className="flex flex-col">
                                        <span className="text-lg font-bold text-primary">
                                          {c.price.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                          })}
                                        </span>
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                                          Por Diária
                                        </span>
                                      </div>
                                      <a
                                        href={`https://wa.me/5527999831006?text=${encodeURIComponent(`Olá, gostaria de consultar a disponibilidade da ${unit.name}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                                      >
                                        {t("innPage.reserveAction")}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        </div>

                        {/* Setas de Navegação */}
                        {c.units.length > 1 && (
                          <div className="absolute top-1/2 -translate-y-1/2 left-1 right-1 sm:left-2 sm:right-2 md:left-4 md:right-4 flex justify-between pointer-events-none">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevSlide(c.units.length);
                              }}
                              className="w-8 h-8 md:w-10 md:h-10 bg-background/90 rounded-full flex items-center justify-center shadow-elevated pointer-events-auto hover:bg-background transition-colors text-foreground border border-border"
                              aria-label="Slide anterior"
                            >
                              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextSlide(c.units.length);
                              }}
                              className="w-8 h-8 md:w-10 md:h-10 bg-background/90 rounded-full flex items-center justify-center shadow-elevated pointer-events-auto hover:bg-background transition-colors text-foreground border border-border"
                              aria-label="Próximo slide"
                            >
                              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                          </div>
                        )}

                        {/* Bolinhas (Dots) de paginação */}
                        {c.units.length > 1 && (
                          <div className="flex justify-center gap-2 mt-6">
                            {c.units.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={() => setCurrentSlide(dotIdx)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  dotIdx === currentSlide
                                    ? "w-6 bg-primary"
                                    : "w-2 bg-primary/30 hover:bg-primary/50"
                                }`}
                                aria-label={`Ir para slide ${dotIdx + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Valores Adicionais */}
          {additionalPricing && additionalPricing.length > 0 && (
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 bg-background rounded-xl p-6 sm:p-8 shadow-soft border border-border/50"
            >
              <h4 className="font-heading text-lg font-bold text-foreground border-b border-border pb-3 mb-5">
                Valores para Pessoa Adicional / Pet
              </h4>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {additionalPricing.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-sm border-b border-border/30 pb-2 last:border-0 sm:last:border-b"
                  >
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-primary">
                      {typeof item.price === "number"
                        ? item.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })
                        : item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <p className="text-sm text-muted-foreground text-center mt-8 font-medium">
            {t("innPage.jacuzziNote")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pousada;
