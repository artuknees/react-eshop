import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='Layout'>
            {children}
        </div>
    );
}

export default Layout;

// encapsulo el componente y digo que va a recibir para determinar su comportamiento.
