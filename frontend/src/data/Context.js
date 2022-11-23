import { useEffect, useContext } from "react";
import { createContext, useReducer } from "react";
import { reducer } from "../redux/reducer";
import ShoppingCartItem from "./fakedata/ShoppingCartItem";

export const Context = createContext();
const initialState = {
    ShoppingCartItem: ShoppingCartItem,
    totalItems: 0,
    totalPrice: 0,
    VATotal: 0,
    SUM: 0
  };

  
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = (id) => {
    return dispatch({ type: 'INCREMENT', payload: id})
  }
  const decrement = (id) => {
    return dispatch({ type: 'DECREMENT', payload: id})
  }
  
  const removeItem = (id) => {
    return dispatch({type: 'REMOVE_ITEM', payload: id})
  }
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.ShoppingCartItem]);
    return <Context.Provider value={{...state, removeItem, increment, decrement}}>{children}</Context.Provider>;
    };

export const useGlobalContext = () => {
    return useContext(Context);
}
