import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.about"), path: "/sobre" },
    { label: t("nav.restaurant"), path: "/restaurante" },
    { label: t("nav.inn"), path: "/pousada" },
    { label: t("nav.fishing"), path: "/pesque-e-pague" },
    { label: t("nav.contact"), path: "/contato" },
  ];

  return (
    <footer className="bg-earth-brown text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold text-warm-gold mb-4">
              Delícias da Tilápia
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/deliciasdatilapia/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-warm-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/DeliciasTilapia/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-warm-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.navigation")}</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-primary-foreground/60 hover:text-warm-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-warm-gold shrink-0" />
                <span>Circuito Turístico do Chapéu, Domingos Martins – ES</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-warm-gold shrink-0" />
                <span>(27) 9 9983-3006</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-warm-gold shrink-0" />
                <span>deliciasdatilapiadm@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Delícias da Tilápia. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
