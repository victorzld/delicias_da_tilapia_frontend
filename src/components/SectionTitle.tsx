import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionTitle = ({ subtitle, title, description, light }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    {subtitle && (
      <span className={`text-sm font-semibold uppercase tracking-widest ${light ? "text-warm-gold" : "text-primary"}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`font-heading text-3xl md:text-4xl font-bold mt-2 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 max-w-2xl mx-auto ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;
