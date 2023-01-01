import { CART_ADD_ITEM, CART_REMOVE_ITEM, INCREMENT, DECREMENT, GET_TOTAL, SAVE_TO_CART } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type)
    {
        case CART_ADD_ITEM:
            // const item = action.payload;
            // const existItem = state.cartItems.find((x) => x.id === item.product);
            // if (existItem) {
            //     return {
            //         ...state,
            //         cartItems: state.cartItems.map((x) => 
            //             x.product === existItem.product ? item : x
            //         ),
            //     };
            // }
            // else
            // return {
            //     ...state,
            //     cartItems: [...state.cartItems, item],
            // };
            const check = state.cartItems.find((item) => item.product === action.payload.product);
            const check2 = state.cartItems.find((item) => item.size === action.payload.size && item.product === action.payload.product);
            if (check2) {
                return {...state, cartItems: state.cartItems.map((item) => {
                    if (item.product === action.payload.product && item.size === action.payload.size) {
                        return {...item, quantity: item.quantity + 1}
                    }

                    return item;
                    
                })}
            }
            else if (!check2 || !check){
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
            return state;
        case CART_REMOVE_ITEM: 
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload.product || x.size !== action.payload.size)
            }

        case INCREMENT:
            const updatedCart = state.cartItems.map((curElem) => {
                if (curElem.product === action.payload.product) {
                    return { ...curElem, quantity: curElem.quantity + 1 };
                }
                return curElem;
            });
            return { ...state, cartItems: updatedCart };

        case DECREMENT:
            const updatedCart2 = state.cartItems.map((curElem) => {
                if (curElem.product === action.payload.product) {
                    return { ...curElem, quantity: curElem.quantity - 1 };
                }
                return curElem;
            }).filter((curElem) => curElem.quantity !== 0);
            return { ...state, cartItems: updatedCart2 };

        case GET_TOTAL:
            let { totalItems, totalPrice } = state.cartItems.reduce((cartTotal, cartItem) => {
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

        default:
            return state;
    }
}
