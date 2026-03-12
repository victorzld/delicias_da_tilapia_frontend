import { motion } from "framer-motion";
import { Users, Waves, Mountain, Wifi } from "lucide-react";
import { useTranslation } from "react-i18next";
import chaleImg from "@/assets/chale.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import SectionTitle from "@/components/SectionTitle";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Pousada = () => {
  const { t } = useTranslation();
  const chalets = t("innPage.chalets", { returnObjects: true }) as Array<{ name: string; desc: string; capacity: string }>;

  const amenities = [
    { icon: Wifi, label: t("innPage.amenities.wifi") },
    { icon: Mountain, label: t("innPage.amenities.mountain") },
    { icon: Waves, label: t("innPage.amenities.jacuzzi") },
    { icon: Users, label: t("innPage.amenities.guests") },
  ];

  return (
    <div className="pt-16">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Pousada" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground">
            {t("innPage.heroTitle")}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-primary-foreground/80 text-lg">
            {t("innPage.heroSubtitle")}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeUp}>
              <img src={chaleImg} alt="Chalé" className="rounded-2xl shadow-elevated w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t("innPage.lodgingSubtitle")}</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">{t("innPage.lodgingTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("innPage.lodgingP1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("innPage.lodgingP2")}</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {amenities.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground">
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
          <SectionTitle subtitle={t("innPage.chaletsSubtitle")} title={t("innPage.chaletsTitle")} description={t("innPage.chaletsDescription")} />
          <div className="space-y-4">
            {chalets.map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-background rounded-xl p-6 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{c.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{c.capacity}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-primary font-bold">{t("innPage.toConsult")}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">{t("innPage.jacuzziNote")}</p>
        </div>
      </section>
    </div>
  );
};

export default Pousada;
