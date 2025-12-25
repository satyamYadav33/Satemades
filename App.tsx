
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import AIChatWidget from './components/AIChatWidget';
import { AppProvider } from './context/AppContext';

// Pages
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const Checkout = lazy(() => import('./pages/Checkout'));

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-12">
      <div className="col-span-2 space-y-6">
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Satemades</h3>
        <p className="text-gray-400 max-w-sm">
          Crafting the world's most elegant transparent hydration vessels. Purity you can see, quality you can feel.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-cyan-400">Explore</h4>
        <ul className="space-y-4 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Shop All</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-cyan-400">Help</h4>
        <ul className="space-y-4 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
      © 2024 Satemades Bottles. Built for purity.
    </div>
  </footer>
);

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <CartDrawer />
      <Suspense fallback={
        <div className="h-screen w-screen flex items-center justify-center bg-white">
          <div className="w-12 h-12 border-4 border-cyan-100 border-t-cyan-600 rounded-full animate-spin"></div>
        </div>
      }>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
      <AIChatWidget />
    </>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
};

export default App;
