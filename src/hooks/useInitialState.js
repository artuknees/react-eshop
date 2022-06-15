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

    return {
        state,
        addToCart
    }
};

export default useInitialState;