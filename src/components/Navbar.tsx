import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.about"), path: "/sobre" },
    { label: t("nav.restaurant"), path: "/restaurante" },
    { label: t("nav.inn"), path: "/pousada" },
    { label: t("nav.fishing"), path: "/pesque-e-pague" },
    { label: t("nav.contact"), path: "/contato" },
  ];

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  // Função centralizada para fechar o menu e forçar o scroll para o topo
  const handleLinkClick = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      {/* A mágica acontece aqui: grid-cols-2 no mobile, lg:grid-cols-3 no desktop */}
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 items-center h-24 px-4 lg:px-8">
        {/* Left: Logo */}
        <div className="justify-self-start">
          <Link
            to="/"
            aria-label="Início"
            onClick={handleLinkClick}
            className="inline-flex items-center gap-2"
          >
            <img
              src={logo}
              alt="Delícias da Tilápia"
              className="w-24 h-24 object-contain lg:w-24 lg:h-24"
            />
          </Link>
        </div>

        {/* Center: Nav links (desktop) */}
        <div className="hidden lg:flex justify-center items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => window.scrollTo(0, 0)}
              className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Actions (desktop) and Mobile toggle */}
        <div className="justify-self-end flex items-center">
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              {i18n.language === "pt" ? "EN" : "PT"}
            </button>
            <a
              href="https://wa.me/5527999831006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-warm text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-warm hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              {t("nav.reserve")}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleLang();
                  setOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-medium py-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                {i18n.language === "pt" ? "English" : "Português"}
              </button>
              <a
                href="https://wa.me/5527999831006"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-gradient-warm text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                {t("nav.reserve")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
