import { motion } from "framer-motion";
import {
  Fish,
  Clock,
  DollarSign,
  Users,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/SectionTitle";
import pesque_pague_atr from "@/assets/images/atrativos/pesque_pague_atr.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// Ícones para as features (ajustados para a nova ordem)
const icons = [Fish, Clock, DollarSign, Users];

const PesqueEPague = () => {
  const { t } = useTranslation();

  const features = t("fishingPage.features", { returnObjects: true }) as Array<{
    label: string;
    desc: string;
  }>;

  const pesquePagueRules = t("fishingPage.pesquePague.rules", {
    returnObjects: true,
  }) as string[];
  const pescaEsportivaRules = t("fishingPage.pescaEsportiva.rules", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="pt-16">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src={pesque_pague_atr}
          alt="Pesque e Pague"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground"
          >
            {t("fishingPage.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-primary-foreground/80 text-lg"
          >
            {t("fishingPage.heroSubtitle")}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <SectionTitle
            subtitle={t("fishingPage.subtitle")}
            title={t("fishingPage.title")}
            description={t("fishingPage.description")}
          />

          <motion.div
            {...fadeUp}
            className="bg-card rounded-2xl p-8 shadow-soft mb-12 text-center max-w-3xl mx-auto -mt-14"
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("fishingPage.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium">
              {t("fishingPage.p2")}
            </p>
          </motion.div>

          {/* Cards das Modalidades */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Card Pesque e Pague */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-elevated border-t-4 border-primary"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                {t("fishingPage.pesquePague.title")}
              </h3>
              <ul className="space-y-4">
                {pesquePagueRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card Pesca Esportiva */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background rounded-2xl p-8 shadow-elevated border-t-4 border-secondary"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                {t("fishingPage.pescaEsportiva.title")}
              </h3>
              <ul className="space-y-4">
                {pescaEsportivaRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Features (Ícones inferiores) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-soft text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            {...fadeUp}
            className="bg-gradient-nature rounded-2xl p-8 text-center"
          >
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
              {t("fishingPage.ctaTitle")}
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              {t("fishingPage.ctaDesc")}
            </p>
            <a
              href="https://wa.me/5527999831006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-warm text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-warm hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              {t("fishingPage.ctaButton")}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PesqueEPague;
