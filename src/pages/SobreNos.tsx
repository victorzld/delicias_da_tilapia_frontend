import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";
import SectionTitle from "@/components/SectionTitle";
import hero from "@/assets/images/hero.jpg"

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const SobreNos = () => {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];
  const values = t("about.values", { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <div className="pt-16">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img 
          src={hero} 
          alt="Delícias da Tilápia" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground">
            {t("about.heroTitle")}
          </motion.h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <SectionTitle subtitle={t("about.historySubtitle")} title={t("about.historyTitle")} />
          <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
            {paragraphs.map((p, i) => (
              <motion.p key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle subtitle={t("about.valuesSubtitle")} title={t("about.valuesTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-background rounded-2xl p-8 shadow-soft text-center">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;
