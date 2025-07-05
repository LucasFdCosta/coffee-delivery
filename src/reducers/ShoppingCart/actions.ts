export enum ActionTypes {
  ADD_COFFEE = "ADD_COFFEE",
  SUBTRACT_COFFEE = "SUBTRACT_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  RESET_CART = "RESET_CART",
}

export function addItemToCartAction(coffeeId: number) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: { coffeeId },
  };
}

export function subtractItemQuantityAction(coffeeId: number) {
  return {
    type: ActionTypes.SUBTRACT_COFFEE,
    payload: { coffeeId },
  };
}

export function removeItemFromCartAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { coffeeId },
  };
}

export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
  };
}
