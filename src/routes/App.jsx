import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import './../styles/global.css'; // importo los estilos

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/PasswordRecovery" element={<PasswordRecovery />} />
                    <Route exact path="/SendEmail" element={<SendEmail/>} />
                    <Route exact path="/NewPassword" element={<NewPassword/>} />
                    <Route exact path="/MyAccount" element={<MyAccount/>} />
                    <Route exact path="/CreateAccount" element={<CreateAccount/>} />
                    <Route exact path="/Checkout" element={<Checkout/>} />
                    <Route exact path="/Orders" element={<Orders/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;