import { type ReactNode, createContext, useReducer } from "react";
import type { Coffee } from "../data/coffee";
import {
  addItemToCartAction,
  removeItemFromCartAction,
  subtractItemQuantityAction,
} from "../reducers/ShoppingCart/actions";
import { shoppingCartReducer } from "../reducers/ShoppingCart/reducer";

export interface ShoppingItem {
  coffee: Coffee;
  quantity: number;
}

interface CartContextType {
  items: ShoppingItem[];
  addItemToCart: (coffeeId: number) => void;
  subtractItemQuantity: (coffeeId: number) => void;
  removeItemFromCart: (coffeeId: number) => void;
  resetCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [] as ShoppingItem[],
    }
  );

  function addItemToCart(coffeeId: number) {
    shoppingCartDispatch(addItemToCartAction(coffeeId));
  }

  function subtractItemQuantity(coffeeId: number) {
    shoppingCartDispatch(subtractItemQuantityAction(coffeeId));
  }

  function removeItemFromCart(coffeeId: number) {
    shoppingCartDispatch(removeItemFromCartAction(coffeeId));
  }

  function resetCart() {
    shoppingCartDispatch({ type: "RESET_CART" });
  }

  const initialContext = {
    items: shoppingCartState.items,
    addItemToCart,
    subtractItemQuantity,
    removeItemFromCart,
    resetCart,
  } as CartContextType;

  return (
    <CartContext.Provider value={initialContext}>
      {children}
    </CartContext.Provider>
  );
}
