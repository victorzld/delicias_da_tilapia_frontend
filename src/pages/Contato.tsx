import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/SectionTitle";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contato = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <SectionTitle subtitle={t("contactPage.subtitle")} title={t("contactPage.title")} description={t("contactPage.description")} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeUp} className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-soft space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contactPage.phoneLabel")}</h3>
                    <p className="text-muted-foreground text-sm mt-1">(27) 9 9983-3006</p>
                    <p className="text-muted-foreground text-sm">(27) 9 9917-1787</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contactPage.emailLabel")}</h3>
                    <p className="text-muted-foreground text-sm mt-1">deliciasdatilapiadm@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contactPage.addressLabel")}</h3>
                    <p className="text-muted-foreground text-sm mt-1 whitespace-pre-line">{t("contactPage.addressValue")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contactPage.hoursLabel")}</h3>
                    <p className="text-muted-foreground text-sm mt-1 whitespace-pre-line">{t("contactPage.hoursValue")}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://www.instagram.com/deliciasdatilapia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-card rounded-xl px-5 py-3 shadow-soft text-foreground border border-transparent hover:border-border transition-[border-color] duration-300 hover:text-primary text-sm font-medium">
                  <Instagram className="w-5 h-5" /> Instagram
                </a>
                <a href="https://www.facebook.com/DeliciasTilapia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-card rounded-xl px-5 py-3 shadow-soft text-foreground border border-transparent hover:border-border transition-[border-color] duration-300 hover:text-primary text-sm font-medium">
                  <Facebook className="w-5 h-5" /> Facebook
                </a>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <form
                className="bg-card rounded-2xl p-8 shadow-soft space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get("name") as string;
                  const message = formData.get("message") as string;
                  const text = t("contactPage.form.whatsappMessage", { name, message });
                  window.open(`https://wa.me/5527999831006?text=${encodeURIComponent(text)}`, "_blank");
                }}
              >
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="name">{t("contactPage.form.name")}</label>
                  <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("contactPage.form.namePlaceholder")} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="email">{t("contactPage.form.email")}</label>
                  <input id="email" name="email" type="email" className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("contactPage.form.emailPlaceholder")} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="phone">{t("contactPage.form.phone")}</label>
                  <input id="phone" name="phone" className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("contactPage.form.phonePlaceholder")} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="message">{t("contactPage.form.message")}</label>
                  <textarea id="message" name="message" required rows={4} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder={t("contactPage.form.messagePlaceholder")} />
                </div>
                <button type="submit" className="w-full bg-gradient-warm text-primary-foreground py-3 rounded-full font-semibold shadow-warm hover:opacity-90 transition-opacity">
                  {t("contactPage.form.submit")}
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-16 rounded-2xl overflow-hidden shadow-elevated">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.5!2d-40.692!3d-20.333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9b58b91881a21%3A0x5161a11703d1564a!2sPousada%20e%20Restaurante%20Del%C3%ADcias%20da%20Til%C3%A1pia!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
