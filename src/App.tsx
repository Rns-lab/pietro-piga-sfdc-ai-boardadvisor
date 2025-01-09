import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UseCases from "./pages/UseCases";
import PodcastPage from "./pages/PodcastPage";
import Learning from "./pages/Learning";
import ProjectScenarios from "./pages/ProjectScenarios";
import RealEstateScenario from "./pages/RealEstateScenario";
import { Navigation } from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/project-scenarios" element={<ProjectScenarios />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/scenarios/real-estate" element={<RealEstateScenario />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;