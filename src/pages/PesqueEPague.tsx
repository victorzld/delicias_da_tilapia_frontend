import { motion } from "framer-motion";
import { Fish, Clock, DollarSign, Users, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import pesqueImg from "@/assets/pesque-pague.jpg";
import SectionTitle from "@/components/SectionTitle";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const icons = [Fish, Clock, DollarSign, Users];

const PesqueEPague = () => {
  const { t } = useTranslation();
  const features = t("fishingPage.features", { returnObjects: true }) as Array<{ label: string; desc: string }>;

  return (
    <div className="pt-16">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={pesqueImg} alt="Pesque e Pague" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground">
            {t("fishingPage.heroTitle")}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-primary-foreground/80 text-lg">
            {t("fishingPage.heroSubtitle")}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <SectionTitle subtitle={t("fishingPage.subtitle")} title={t("fishingPage.title")} description={t("fishingPage.description")} />

          <motion.div {...fadeUp} className="bg-card rounded-2xl p-8 shadow-soft mb-12">
            <p className="text-muted-foreground leading-relaxed mb-6">{t("fishingPage.p1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("fishingPage.p2")}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card rounded-xl p-6 shadow-soft text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...fadeUp} className="bg-gradient-nature rounded-2xl p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">{t("fishingPage.ctaTitle")}</h3>
            <p className="text-primary-foreground/80 mb-6">{t("fishingPage.ctaDesc")}</p>
            <a href="https://wa.me/5527999831006" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-warm text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-warm hover:opacity-90 transition-opacity">
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
