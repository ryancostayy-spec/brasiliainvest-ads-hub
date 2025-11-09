import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InvestigacaoParticular from "./pages/InvestigacaoParticular";
import InvestigacaoMatrimonial from "./pages/InvestigacaoMatrimonial";
import InvestigacaoCorporativa from "./pages/InvestigacaoCorporativa";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/investigacao-particular" element={<InvestigacaoParticular />} />
          <Route path="/investigacao-matrimonial" element={<InvestigacaoMatrimonial />} />
          <Route path="/investigacao-corporativa" element={<InvestigacaoCorporativa />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
