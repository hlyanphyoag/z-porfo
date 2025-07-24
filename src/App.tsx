import "./global.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { useEffect } from "react";
import Home from "./components/custom_components/Home";
import ProcessSection from "./components/custom_components/ProcessSection";
import ProjectSection from "./components/custom_components/ProjectSection";
import Testemonial from "./components/custom_components/Testemonial";
import ContactSection from "./components/custom_components/ContactSection";
import Footer from "./components/custom_components/Footer";

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Home />
        <ProcessSection />
        <ProjectSection />
        <Testemonial />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
