
import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'sb-001',
    name: 'Crystal Clear Classic',
    tagline: 'Elegance in every drop',
    price: 34.99,
    oldPrice: 44.99,
    image: 'https://picsum.photos/seed/bottle1/800/1000',
    rating: 4.8,
    reviews: 124,
    category: 'Daily',
    color: 'Pure Transparent',
    size: '500ml',
    description: 'Our flagship bottle, precision-crafted from premium borosilicate glass. Perfect for the modern professional.',
    features: ['100% BPA Free', 'Heat Resistant', 'Eco-friendly', 'Leak Proof']
  },
  {
    id: 'sb-002',
    name: 'Aqua Elite Pro',
    tagline: 'High-performance hydration',
    price: 49.99,
    image: 'https://picsum.photos/seed/bottle2/800/1000',
    rating: 4.9,
    reviews: 89,
    category: 'Sport',
    color: 'Ocean Blue Tint',
    size: '750ml',
    description: 'Designed for the active soul. Enhanced grip and reinforced base for your toughest workouts.',
    features: ['Impact Resistant', 'Wide Mouth', 'Lightweight', 'Anti-slip base']
  },
  {
    id: 'sb-003',
    name: 'Mist Minimalist',
    tagline: 'Understated perfection',
    price: 39.99,
    oldPrice: 42.00,
    image: 'https://picsum.photos/seed/bottle3/800/1000',
    rating: 4.7,
    reviews: 210,
    category: 'Lifestyle',
    color: 'Frosted Mist',
    size: '600ml',
    description: 'A beautiful frosted finish that feels as good as it looks. Purity has never been this tactile.',
    features: ['Soft Touch', 'Odour Free', 'Easy Wash', 'Slim Fit']
  },
  {
    id: 'sb-004',
    name: 'Vivid Voyager',
    tagline: 'Your travel companion',
    price: 29.99,
    image: 'https://picsum.photos/seed/bottle4/800/1000',
    rating: 4.6,
    reviews: 56,
    category: 'Travel',
    color: 'Amber Glow',
    size: '500ml',
    description: 'Compact, durable, and ready for adventure. Fits perfectly in any carry-on or backpack side pocket.',
    features: ['Flight Safe', 'Clip Handle', 'Double Seal', 'Scratch Resistant']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Yoga Instructor',
    content: 'The clarity of these bottles is unmatched. It reminds me to stay hydrated every single hour. Simply beautiful.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Product Designer',
    content: 'As a designer, I appreciate the minimalist aesthetic. It\'s not just a bottle; it\'s a statement piece on my desk.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: 't3',
    name: 'Emma Watson',
    role: 'Sustainability Advocate',
    content: 'Finally, a premium bottle that takes environmental impact seriously. I haven\'t touched a plastic bottle in months.',
    rating: 4.8,
    avatar: 'https://i.pravatar.cc/150?u=emma'
  }
];

export const FEATURES = [
  {
    title: '100% BPA-Free',
    description: 'Pure food-grade materials for healthy hydration.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Eco-Friendly',
    description: 'Sustainable production reduces your carbon footprint.',
    icon: 'Leaf'
  },
  {
    title: 'Leak-Proof',
    description: 'Advanced sealing technology for zero spills.',
    icon: 'Droplets'
  },
  {
    title: 'Durable Glass',
    description: 'High-strength borosilicate stands the test of time.',
    icon: 'Activity'
  }
];
