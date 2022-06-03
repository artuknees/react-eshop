import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import './../styles/global.css'; // importo los estilos

const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
}

export default App;

// Layout abre y cierra y deja un espacio para elementos internos
// viviran los hijos de layout

// layout puede recibir distintos componentes (children)
// los anida en una estructura

// login se cierra de forma inmediata.
// puedo llamarlo con una apertura para tener elementos hijo o solo desde el inicio y cerrado.

// son formas de implementacion de react.

// Podia pasar <Login><Login/>
// pero si no voy a pasar un hijo, no tiene sentido.

// Se añadieron de forma automatica al proyecto ademas con import.
