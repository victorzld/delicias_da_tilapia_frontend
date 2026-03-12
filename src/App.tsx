import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BookingBar from "./components/BookingBar";
import ScrollToTop from "./components/ScrollToTop"; // <-- Adicione esta importação
import Index from "./pages/Index";
import SobreNos from "./pages/SobreNos";
import Restaurante from "./pages/Restaurante";
import Pousada from "./pages/Pousada";
import PesqueEPague from "./pages/PesqueEPague";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />{" "}
        {/* <-- Coloque o componente aqui, dentro do BrowserRouter */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/restaurante" element={<Restaurante />} />
          <Route path="/pousada" element={<Pousada />} />
          <Route path="/pesque-e-pague" element={<PesqueEPague />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <BookingBar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
