import { create } from "zustand";

const useCart = create((set) => ({
  totalCart: 0,
  name: 'Keranjang Besar',
  handleIncrement: () => {
    set((state) => ({
      totalCart: state.totalCart + 1
    }));
  },
  handleDecrement: () => {
    set((state) => ({
      totalCart: state.totalCart !== 0 ? state.totalCart - 1 : state.totalCart
    }));
  },
}));

export default useCart;