import { create } from 'zustand';

type CartState = {
  quantity: number;
  increase: () => void;
  decrease: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  quantity: 1, // Default quantity is 1
  increase: () => set((state) => ({ quantity: state.quantity + 1 })),
  decrease: () => set((state) => ({ quantity: Math.max(1, state.quantity - 1) })),
}));
