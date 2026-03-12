import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import restauranteImg from "@/assets/restaurante.jpg";
import pratoImg from "@/assets/prato-tilapia.jpg";
import SectionTitle from "@/components/SectionTitle";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Restaurante = () => {
  const { t } = useTranslation();
  const categories = t("restaurantPage.categories", { returnObjects: true }) as Array<{
    name: string;
    items: Array<{ name: string; desc: string }>;
  }>;

  return (
    <div className="pt-16">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={restauranteImg} alt="Restaurante" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground">
            {t("restaurantPage.heroTitle")}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-primary-foreground/80 text-lg">
            {t("restaurantPage.heroSubtitle")}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeUp}>
              <img src={pratoImg} alt="Prato de tilápia" className="rounded-2xl shadow-elevated w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t("restaurantPage.kitchenSubtitle")}</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">{t("restaurantPage.kitchenTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("restaurantPage.kitchenP1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("restaurantPage.kitchenP2")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <SectionTitle subtitle={t("restaurantPage.menuSubtitle")} title={t("restaurantPage.menuTitle")} description={t("restaurantPage.menuDescription")} />
          <div className="space-y-12">
            {categories.map((cat, ci) => (
              <motion.div key={ci} {...fadeUp} transition={{ duration: 0.6, delay: ci * 0.1 }}>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">{cat.name}</h3>
                <div className="space-y-4">
                  {cat.items.map((item, ii) => (
                    <div key={ii} className="flex justify-between items-start gap-4 py-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                      <span className="text-primary font-semibold text-sm whitespace-nowrap">{t("restaurantPage.toConsult")}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurante;
