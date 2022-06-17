// queremos que, con un click al boton de carrito, agregar el item

import { useState } from 'react';

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state,setState] = useState(initialState);
    // inicializo con el initial state
    const addToCart = (payload) => {
        setState({
            ...state, // significa mantener el estado
            cart: [...state.cart,payload]
            // a cart dejale lo que tiene y agregale payload
        });
    };

    // const removeFromCart = (payload) => {
    //     setState({
    //         ...state,
    //         cart: state.cart.filter(items => items.id !== payload.id),
    //     });
    // };
    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((product,index) => index !== indexValue),
        });
    };

    // // verificadores mios
    // if (state.cart.length > 1) {
    //     console.log(state.cart[1]); // imprimo el segundo elemento.
    // };
    // console.log(state.cart.length);
    // // hasta aca

    return {
        state,
        addToCart,
        removeFromCart
    }
};

export default useInitialState;