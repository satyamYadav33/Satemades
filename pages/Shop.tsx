
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Grid, List, ChevronDown, Heart } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useAppContext } from '../context/AppContext';

const Shop: React.FC = () => {
  const { addToCart, wishlist, toggleWishlist } = useAppContext();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['All', 'Daily', 'Sport', 'Lifestyle', 'Travel'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS
      .filter(p => 
        (selectedCategory === 'All' || p.category === selectedCategory) &&
        (p.name.toLowerCase().includes(search.toLowerCase()) || p.tagline.toLowerCase().includes(search.toLowerCase()))
      )
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0; // default newest
      });
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Our Collection</h1>
            <p className="text-gray-500">Curated premium bottles for every lifestyle.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search bottles..."
                className="pl-12 pr-6 py-3 rounded-2xl glass border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 w-full sm:w-64"
              />
            </div>
            <div className="flex space-x-2">
              <button className="p-3 glass rounded-2xl text-gray-700 hover:text-cyan-600">
                <Grid size={20} />
              </button>
              <button className="p-3 glass rounded-2xl text-gray-400 hover:text-cyan-600">
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 space-y-10">
            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Categories</h3>
              <div className="space-y-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-xl transition-all ${
                      selectedCategory === cat ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-100' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Sort By</h3>
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none glass border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-gray-700"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popularity">Most Popular</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            <div className="p-6 bg-cyan-50 rounded-[32px] border border-cyan-100">
              <h4 className="font-bold text-cyan-800 mb-2">Free Shipping</h4>
              <p className="text-xs text-cyan-600">On all orders above $50. No code required.</p>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-cyan-100/20 transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all ${
                        wishlist.includes(product.id) ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:text-red-500'
                      }`}
                    >
                      <Heart size={18} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-white text-cyan-700 py-3 rounded-xl font-bold hover:bg-cyan-50 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-cyan-600 mb-2">{product.category}</div>
                    <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-1">{product.tagline}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">${product.price}</span>
                      <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-lg text-gray-500">{product.size}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-gray-200">
                <p className="text-gray-400">No products found matching your criteria.</p>
                <button 
                  onClick={() => {setSearch(''); setSelectedCategory('All');}}
                  className="mt-4 text-cyan-600 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
