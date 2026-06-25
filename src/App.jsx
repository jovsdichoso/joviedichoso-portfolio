import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import HomePage from './pages/HomePage';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'light' 
          ? 'bg-white text-gray-900' 
          : 'bg-dark-bg text-white'
      }`}
    >
      <ScrollProgress />
      <Navbar />
      <HomePage />
      <Footer />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
