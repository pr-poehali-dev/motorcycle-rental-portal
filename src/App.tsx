
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/catalog" element={<div>Каталог (скоро)</div>} />
          <Route path="/catalog/:id" element={<div>Страница мотоцикла (скоро)</div>} />
          <Route path="/cart" element={<div>Корзина (скоро)</div>} />
          <Route path="/about" element={<div>О нас (скоро)</div>} />
          <Route path="/contacts" element={<div>Контакты (скоро)</div>} />
          <Route path="/admin" element={<div>Админ панель (скоро)</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

