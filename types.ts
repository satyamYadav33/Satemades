
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  color: string;
  size: string;
  description: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export enum CheckoutStep {
  Shipping = 1,
  Method = 2,
  Payment = 3,
  Review = 4
}
