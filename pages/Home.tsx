
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Leaf, ShieldCheck, Activity, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, FEATURES, TESTIMONIALS } from '../constants';
import { useAppContext } from '../context/AppContext';

const Home: React.FC = () => {
  const { addToCart } = useAppContext();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 rounded-full border border-cyan-100">
              Premium Hydration Redefined
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Crystal <span className="text-cyan-600">Clear.</span> <br />
              Perfectly <span className="text-emerald-500">Pure.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Elevate your daily hydration with our masterfully crafted transparent bottles. Sustainability meets uncompromising elegance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white rounded-2xl font-bold hover:bg-cyan-700 transition-all shadow-xl hover:shadow-cyan-200 group"
              >
                Shop Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 glass text-gray-800 rounded-2xl font-bold hover:bg-gray-50 transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="relative"
          >
            <div className="relative z-10 p-8 glass rounded-[40px] shadow-2xl">
              <img
                src="https://picsum.photos/seed/hero-bottle/1000/1200"
                alt="Satemades Bottle"
                className="w-full h-auto rounded-[32px] transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-xl z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-emerald-500 rounded-2xl">
                  <Leaf className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">12k+</p>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Trees Planted</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Satemades?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We've engineered every detail to ensure you receive the purest hydration experience possible while protecting our planet.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] glass hover:border-cyan-200 transition-all text-center group"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                {feature.icon === 'ShieldCheck' && <ShieldCheck size={32} />}
                {feature.icon === 'Leaf' && <Leaf size={32} />}
                {feature.icon === 'Droplets' && <Droplets size={32} />}
                {feature.icon === 'Activity' && <Activity size={32} />}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4">Top Sellers</h2>
            <p className="text-gray-500">Discover our most loved hydration companions.</p>
          </div>
          <Link to="/shop" className="text-cyan-600 font-bold hover:underline flex items-center">
            View All Products <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                <button
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md py-3 rounded-xl font-bold text-sm translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all hover:bg-cyan-600 hover:text-white"
                >
                  Quick Add
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <div className="flex items-center text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="text-gray-600 text-xs ml-1">{product.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4">{product.tagline}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-cyan-700">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-8 glass rounded-[32px] border border-gray-100">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(t.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-cyan-100" />
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="bg-cyan-600 rounded-[40px] p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Droplets size={200} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Join the Hydration Wave</h2>
            <p className="text-cyan-100 mb-10 text-lg max-w-xl mx-auto relative z-10">
              Subscribe for exclusive drops, sustainability tips, and 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-cyan-700 px-8 py-4 rounded-2xl font-bold hover:bg-cyan-50 transition-colors whitespace-nowrap">
                Get Early Access
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
