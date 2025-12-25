
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CreditCard, Truck, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { CheckoutStep } from '../types';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [step, setStep] = useState<CheckoutStep>(CheckoutStep.Shipping);
  const { cart, clearCart } = useAppContext();
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else {
      // Mock order completion
      alert("Order Placed Successfully!");
      clearCart();
      navigate('/');
    }
  };

  const steps = [
    { id: CheckoutStep.Shipping, title: 'Shipping', icon: <Truck size={20} /> },
    { id: CheckoutStep.Method, title: 'Method', icon: <ShoppingBag size={20} /> },
    { id: CheckoutStep.Payment, title: 'Payment', icon: <CreditCard size={20} /> },
    { id: CheckoutStep.Review, title: 'Review', icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-12">
        {/* Main Form */}
        <div className="lg:col-span-8 space-y-8">
          {/* Stepper */}
          <div className="flex justify-between items-center bg-white p-6 rounded-[32px] shadow-sm">
            {steps.map((s, i) => (
              <React.Fragment key={s.id}>
                <div className={`flex flex-col items-center space-y-2 flex-1 ${step >= s.id ? 'text-cyan-600' : 'text-gray-300'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= s.id ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {s.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest hidden sm:block">{s.title}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-[2px] w-full max-w-[50px] ${step > s.id ? 'bg-cyan-600' : 'bg-gray-100'}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm">
            <AnimatePresence mode="wait">
              {step === CheckoutStep.Shipping && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold">Shipping Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input placeholder="First Name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-cyan-500/20 outline-none" />
                    <input placeholder="Last Name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-cyan-500/20 outline-none" />
                    <input placeholder="Email Address" className="w-full md:col-span-2 px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-cyan-500/20 outline-none" />
                    <input placeholder="Address" className="w-full md:col-span-2 px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-cyan-500/20 outline-none" />
                    <input placeholder="City" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-cyan-500/20 outline-none" />
                    <input placeholder="Postal Code" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-cyan-500/20 outline-none" />
                  </div>
                </motion.div>
              )}

              {step === CheckoutStep.Method && (
                <motion.div
                  key="method"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold">Shipping Method</h2>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-6 rounded-3xl border-2 border-cyan-600 bg-cyan-50 cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className="w-5 h-5 rounded-full border-4 border-cyan-600" />
                        <div>
                          <p className="font-bold">Standard Delivery</p>
                          <p className="text-xs text-cyan-600">3-5 Business Days</p>
                        </div>
                      </div>
                      <span className="font-bold">Free</span>
                    </label>
                    <label className="flex items-center justify-between p-6 rounded-3xl border-2 border-gray-100 hover:border-cyan-200 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                        <div>
                          <p className="font-bold text-gray-700">Express Shipping</p>
                          <p className="text-xs text-gray-500">Next Day Delivery</p>
                        </div>
                      </div>
                      <span className="font-bold text-gray-700">$12.99</span>
                    </label>
                  </div>
                </motion.div>
              )}

              {step === CheckoutStep.Payment && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold">Payment Details</h2>
                  <div className="p-8 glass bg-cyan-900 rounded-[32px] text-white space-y-8 relative overflow-hidden mb-8">
                     <div className="absolute top-0 right-0 p-8 opacity-20"><CreditCard size={120} /></div>
                     <div className="flex justify-between items-center">
                        <div className="w-12 h-10 bg-yellow-400 rounded-lg" />
                        <span className="text-xl font-bold italic">VISA</span>
                     </div>
                     <div className="space-y-2">
                        <p className="text-xs uppercase tracking-widest opacity-60">Card Number</p>
                        <p className="text-2xl tracking-[0.2em] font-mono">**** **** **** 4242</p>
                     </div>
                     <div className="flex space-x-12">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest opacity-60">Expiry</p>
                          <p className="font-bold">12/28</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest opacity-60">CVV</p>
                          <p className="font-bold">***</p>
                        </div>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="py-4 border-2 border-gray-100 rounded-2xl flex items-center justify-center space-x-2 font-bold text-gray-500 hover:border-cyan-200 transition-colors">
                      <span className="text-blue-600">PayPal</span>
                    </button>
                    <button className="py-4 border-2 border-gray-100 rounded-2xl flex items-center justify-center space-x-2 font-bold text-gray-500 hover:border-cyan-200 transition-colors">
                      <span>Apple Pay</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {step === CheckoutStep.Review && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold">Order Review</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between p-6 bg-gray-50 rounded-2xl">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-bold mb-1">Shipping To</p>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-gray-600">123 Purity Lane, Crystal City, CA 90210</p>
                      </div>
                      <button onClick={() => setStep(1)} className="text-cyan-600 font-bold text-sm">Edit</button>
                    </div>
                    <div className="flex justify-between p-6 bg-gray-50 rounded-2xl">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-bold mb-1">Payment Method</p>
                        <p className="font-medium">Visa ending in 4242</p>
                      </div>
                      <button onClick={() => setStep(3)} className="text-cyan-600 font-bold text-sm">Edit</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex items-center space-x-2 text-gray-500 font-bold hover:text-cyan-600"
                >
                  <ChevronLeft size={20} />
                  <span>Back</span>
                </button>
              ) : <div></div>}
              <button
                onClick={handleNext}
                className="bg-cyan-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-cyan-200 flex items-center space-x-2"
              >
                <span>{step === 4 ? 'Complete Order' : 'Next Step'}</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white p-8 rounded-[40px] shadow-sm sticky top-32">
            <h3 className="text-xl font-bold mb-8">Summary</h3>
            <div className="space-y-4 mb-8">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img src={item.image} className="w-12 h-12 rounded-lg object-cover" />
                      <span className="absolute -top-2 -right-2 bg-cyan-600 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.size}</p>
                    </div>
                  </div>
                  <span className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-gray-100 space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-4">
                <span>Total</span>
                <span className="text-cyan-700">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start space-x-3">
              <ShieldCheck className="text-emerald-600 mt-0.5" size={18} />
              <p className="text-[10px] text-emerald-800 leading-relaxed uppercase tracking-widest font-bold">
                Secure Checkout Powered by 256-bit SSL Encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
