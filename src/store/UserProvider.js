import { useReducer } from 'react';
import UserContext from './UserContext';

const defaultUserState = {
    Users: [],
  };


const CartProvider = (props) => {
    const [contextState, dispatchContextState] = useReducer(
        userReducer,
        defaultUserState
    );

    const 

    const userContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
      };

    return (
        <UserContext.Provider value={cartContext}>
          {props.children}
        </UserContext.Provider>
      );
}