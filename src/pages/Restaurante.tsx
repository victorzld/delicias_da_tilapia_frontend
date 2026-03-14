import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import restaurante from "@/assets/images/atrativos/restaurante.jpg";
import prato from "@/assets/images/prato.png";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Restaurante = () => {
  const { t } = useTranslation();

  // Estado para armazenar os filtros selecionados
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Atualizando a tipagem para incluir o 'price' como number OU um array de numbers
  const categories = t("restaurantPage.categories", {
    returnObjects: true,
  }) as Array<{
    name: string;
    items: Array<{ name: string; desc: string; price: number | number[] }>;
  }>;

  // Função para adicionar ou remover um filtro
  const toggleFilter = (categoryName: string) => {
    setSelectedFilters(
      (prev) =>
        prev.includes(categoryName)
          ? prev.filter((name) => name !== categoryName) // Remove se já estiver selecionado
          : [...prev, categoryName], // Adiciona se não estiver
    );
  };

  // Função para limpar todos os filtros
  const clearFilters = () => {
    setSelectedFilters([]);
  };

  // Categorias filtradas que serão renderizadas na tela
  const filteredCategories =
    selectedFilters.length > 0
      ? categories.filter((cat) => selectedFilters.includes(cat.name))
      : categories;

  return (
    <div className="pt-16">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src={restaurante}
          alt="Restaurante"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground"
          >
            {t("restaurantPage.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-primary-foreground/80 text-lg"
          >
            {t("restaurantPage.heroSubtitle")}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeUp}>
              <img
                src={prato}
                alt="Prato de tilápia"
                className="rounded-2xl shadow-elevated w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {t("restaurantPage.kitchenSubtitle")}
              </span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-4">
                {t("restaurantPage.kitchenTitle")}
              </h2>
              <p className="text-justify text-muted-foreground leading-relaxed mb-4">
                {t("restaurantPage.kitchenP1")}
              </p>
              <p className="text-justify text-muted-foreground leading-relaxed">
                {t("restaurantPage.kitchenP2")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <SectionTitle
            subtitle={t("restaurantPage.menuSubtitle")}
            title={t("restaurantPage.menuTitle")}
            description={t("restaurantPage.menuDescription")}
          />

          {/* Seção de Filtros */}
          <motion.div
            {...fadeUp}
            className="mb-12 flex flex-wrap gap-3 justify-center"
          >
            {categories.map((cat) => {
              const isSelected = selectedFilters.includes(cat.name);
              return (
                <button
                  key={cat.name}
                  onClick={() => toggleFilter(cat.name)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}

            {/* Botão de Limpar (Aparece apenas se houver algum filtro selecionado) */}
            {selectedFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors border border-transparent"
                title="Limpar filtros"
              >
                Limpar <X className="w-4 h-4" />
              </button>
            )}
          </motion.div>

          {/* Listagem do Cardápio */}
          <div className="space-y-12">
            {filteredCategories.map((cat, ci) => (
              <motion.div
                key={cat.name} // Usando o nome como key para evitar problemas de re-renderização na filtragem
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: ci * 0.05 }} // Animação mais rápida ao filtrar
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                  {cat.name}
                </h3>
                <div className="space-y-4">
                  {cat.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="flex justify-between items-start gap-4 py-3"
                    >
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.desc}
                        </p>
                      </div>

                      {/* Renderização Condicional do Preço (Simples vs Array) */}
                      <span className="text-primary font-semibold text-sm whitespace-nowrap">
                        {Array.isArray(item.price)
                          ? `${item.price[0].toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} | ${item.price[1].toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
                          : item.price > 0
                            ? item.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })
                            : t("restaurantPage.toConsult")}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Mensagem caso o filtro falhe (edge case) */}
            {filteredCategories.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                Nenhum item encontrado para o filtro selecionado.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurante;
