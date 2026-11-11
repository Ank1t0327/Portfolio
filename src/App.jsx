import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Learning from './pages/Learning';
import ArticleDetail from './pages/ArticleDetail';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Scrolls to top on route change, or to hash anchor if present
function ScrollHandler() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      // Wait for page to render then scroll to anchor
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);
  return null;
}

function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollHandler />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/projects/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
          <Route path="/learning" element={<PageTransition><Learning /></PageTransition>} />
          <Route path="/learning/:id" element={<PageTransition><ArticleDetail /></PageTransition>} />
          <Route path="/achievements" element={<PageTransition><Achievements /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-ivory dark:bg-charcoal transition-colors duration-300">
          <Navbar />
          <main className="flex-grow pt-16">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
