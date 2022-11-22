import { Product } from "types/product";

export type CartProduct = Product;

export type Cart = Array<CartProduct>;

export type CartContextType = {
  isCreatingCheckoutSession: boolean;
  cart: Cart;

  handleOpenCart: () => void;

  handleBuyProduct: (defaultPriceId: string) => Promise<void>;
  handleAddProductToCart: (product: CartProduct) => void;
};