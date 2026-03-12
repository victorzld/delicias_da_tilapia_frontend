import { useState } from "react";
import { CalendarDays, X, Users, Tag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { pt, enUS } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const BookingBar = () => {
  const [open, setOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const { t, i18n } = useTranslation();

  const locale = i18n.language === "pt" ? pt : enUS;

  const handleCheckAvailability = () => {
    if (!checkIn || !checkOut) {
      toast({
        title: t("booking.error"),
        description: t("booking.selectDates"),
        variant: "destructive",
      });
      return;
    }
    // TODO: call external API
    toast({
      title: t("booking.searching"),
      description: t("booking.searchingDesc"),
    });
  };

  return (
    <>
      {/* Floating booking button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-semibold text-sm"
            aria-label={t("booking.book")}
          >
            <CalendarDays className="w-5 h-5" />
            {t("booking.book")}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bottom booking bar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-2xl"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between mb-3 lg:hidden">
                <span className="font-heading font-semibold text-foreground">{t("booking.title")}</span>
                <button onClick={() => setOpen(false)} className="text-foreground/60 hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col lg:flex-row items-stretch lg:items-end gap-3">
                {/* Check-in */}
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("booking.checkIn")}</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !checkIn && "text-muted-foreground")}>
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "dd/MM/yyyy", { locale }) : t("booking.selectDate")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Check-out */}
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("booking.checkOut")}</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !checkOut && "text-muted-foreground")}>
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "dd/MM/yyyy", { locale }) : t("booking.selectDate")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) => date < (checkIn || new Date())}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Adults */}
                <div className="w-full lg:w-24">
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("booking.adults")}</label>
                  <div className="flex items-center border border-input rounded-md h-10">
                    <button onClick={() => setAdults(Math.max(1, adults - 1))} className="px-2 text-foreground/60 hover:text-foreground">−</button>
                    <span className="flex-1 text-center text-sm font-medium">{adults}</span>
                    <button onClick={() => setAdults(Math.min(10, adults + 1))} className="px-2 text-foreground/60 hover:text-foreground">+</button>
                  </div>
                </div>

                {/* Children */}
                <div className="w-full lg:w-24">
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("booking.children")}</label>
                  <div className="flex items-center border border-input rounded-md h-10">
                    <button onClick={() => setChildren(Math.max(0, children - 1))} className="px-2 text-foreground/60 hover:text-foreground">−</button>
                    <span className="flex-1 text-center text-sm font-medium">{children}</span>
                    <button onClick={() => setChildren(Math.min(10, children + 1))} className="px-2 text-foreground/60 hover:text-foreground">+</button>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">{t("booking.promoCode")}</label>
                  <Input
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.slice(0, 20))}
                    placeholder={t("booking.promoPlaceholder")}
                    className="h-10"
                  />
                </div>

                {/* Check Availability */}
                <Button onClick={handleCheckAvailability} className="h-10 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold whitespace-nowrap">
                  <Search className="w-4 h-4 mr-2" />
                  {t("booking.check")}
                </Button>

                {/* Close - desktop */}
                <button onClick={() => setOpen(false)} className="hidden lg:flex items-center justify-center h-10 w-10 text-foreground/60 hover:text-foreground shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingBar;
