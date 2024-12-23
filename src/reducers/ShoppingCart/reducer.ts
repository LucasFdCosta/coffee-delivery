import { produce } from "immer";
import type { ShoppingItem } from "../../contexts/ShoppingCartContext";
import { dataSource } from "../../data/coffee";
import { ActionTypes } from "./actions";

interface ShoppingCartState {
  items: ShoppingItem[];
}

export function shoppingCartReducer(
  state: ShoppingCartState,
  action: { type: string; payload: { coffeeId: number } }
) {
  if (action.type === ActionTypes.ADD_COFFEE) {
    const currentCoffeeInCartIndex = state.items.findIndex(
      i => i.coffee.id === action.payload.coffeeId
    );

    if (currentCoffeeInCartIndex >= 0) {
      let currentCoffeeInCart = {
        ...state.items[currentCoffeeInCartIndex],
      };

      currentCoffeeInCart = {
        ...currentCoffeeInCart,
        quantity: currentCoffeeInCart.quantity + 1,
      };

      return produce(state, draft => {
        draft.items[currentCoffeeInCartIndex] = currentCoffeeInCart;
      });
    }

    const coffee = dataSource.find(c => c.id === action.payload.coffeeId);

    if (coffee) {
      return produce(state, draft => {
        draft.items.push({
          coffee,
          quantity: 1,
        });
      });
    }

    return state;
  }

  if (action.type === ActionTypes.SUBTRACT_COFFEE) {
    const currentCoffeeInCartIndex = state.items.findIndex(
      i => i.coffee.id === action.payload.coffeeId
    );

    let currentCoffeeInCart = {
      ...state.items[currentCoffeeInCartIndex],
    };

    if (currentCoffeeInCart.quantity - 1 === 0) {
      return produce(state, draft => {
        draft.items.splice(currentCoffeeInCartIndex, 1);
      });
    }

    currentCoffeeInCart = {
      ...currentCoffeeInCart,
      quantity: currentCoffeeInCart.quantity - 1,
    };

    return produce(state, draft => {
      draft.items[currentCoffeeInCartIndex] = currentCoffeeInCart;
    });
  }

  if (action.type === ActionTypes.REMOVE_COFFEE) {
    const currentCoffeeInCartIndex = state.items.findIndex(
      i => i.coffee.id === action.payload.coffeeId
    );

    return produce(state, draft => {
      draft.items.splice(currentCoffeeInCartIndex, 1);
    });
  }

  return state;
}
