import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
	// console.log(hideButton);
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img src={image} alt="not found" className="checkoutProduct__image" />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title"> {title} </p>

				<p className="checkoutProduct__price">
					<small> $ </small> <strong> {price} </strong>
				</p>

				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>
								<StarIcon key={i} />
							</p>
						))}
				</div>

				{!hideButton && (
					<button onClick={removeFromBasket}> Remove from Basket </button>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;
