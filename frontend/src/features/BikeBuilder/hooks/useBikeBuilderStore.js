import { create } from "zustand";

export default create((set) => ({
  cart: [],
  selectedProduct: null,
  selectedProductVariant: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setSelectedProductVariant: (productVariant) =>
    set({ selectedProductVariant: productVariant }),
  addToCart: (product, productVariant) =>
    set((state) => ({
      cart: state.cart.concat({ ...productVariant, product }),
    })),
}));
