import { create } from 'zustand';
import { Product, CartItem } from '@/types';

interface CartState {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    decreaseQuantity: (id: number) => void; // Naya action
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}


export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addToCart: (product) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);
        if (existingItem) {
            return {
                cart: state.cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

    // Quantity kam karne ka logic
    decreaseQuantity: (id) => set((state) => ({
        cart: state.cart.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
    })),

    removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
    })),

    clearCart: () => set({ cart: [] }),
}));