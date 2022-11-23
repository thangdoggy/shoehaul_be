export const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        const updatedCart = state.ShoppingCartItem.map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity + 1 };
          }
          return curElem;
        });
    
        return { ...state, ShoppingCartItem: updatedCart };
      }
    
      if (action.type === "DECREMENT") {
        const updatedCart = state.ShoppingCartItem
          .map((curElem) => {
            if (curElem.id === action.payload) {
              return { ...curElem, quantity: curElem.quantity - 1 };
            }
            return curElem;
          })
          .filter((curElem) => curElem.quantity !== 0);
        return { ...state, ShoppingCartItem: updatedCart };
      }
    if (action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            ShoppingCartItem: state.ShoppingCartItem.filter((item) => { return item.id !== action.payload })
        }
    }
    

    if (action.type === 'GET_TOTAL') {
        let { totalItems, totalPrice } = state.ShoppingCartItem.reduce((cartTotal, cartItem) => {
            const { quantity, price } = cartItem;
            const itemTotal = price * quantity;
            cartTotal.totalItems += quantity;
            cartTotal.totalPrice += itemTotal;
            return cartTotal;
        }, {
            totalItems: 0,
            totalPrice: 0
        })
        totalPrice = parseFloat(totalPrice.toFixed(2));
        const VATotal = parseFloat((totalPrice * 0.08).toFixed(2));
        const SUM = totalPrice + VATotal;
        return {
            ...state,
            totalItems,
            totalPrice,
            VATotal,
            SUM
        }

    }
    return state;
};
