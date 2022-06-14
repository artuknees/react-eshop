import React , { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {

	const form = useRef(null); // lo inicializamos sin nada.

	const handleSubmit = (event) => {
		event.preventDefault(); // con esto previene el default y sigue con lo que le pido que haga.
		const formData = new FormData(form.current); // con esto me traigo los valores del formulario.
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		};
		console.log(data); // lo reviso asi por ahora.
	}; 

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button 
					className="primary-button login-button" 
					onClick={handleSubmit}>
						Log in
					</button>
					<a href="/PasswordRecovery">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;