import React , { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import iconClose from '@icons/icon_close.png';

const OrderItem = (props) => {
	// solucion para evitar multi borrad
	const { product , indexValue } = props;
	// console.log(props);
	//

	const { removeFromCart } = useContext(AppContext); // ya me traje la función

	// const handleRemove = product => {
	// 	removeFromCart(product);
	// };
	//
	const handleRemove = (index) => {
		removeFromCart(index);
	};
	//

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={iconClose} alt="close" onClick={() => handleRemove(indexValue)} />

			{/* <img src={iconClose} alt="close" onClick={() => handleRemove(product)} /> */}
		</div>
	);
}

export default OrderItem;