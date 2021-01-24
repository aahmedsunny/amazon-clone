import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";

function Order({ order }) {
	console.log(order);

	return (
		<div className="order">
			<h2>Order Details</h2>

			<p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

			<p className="order__id">
				<small>Order ID : {order.id}</small>
			</p>

			{order.data.basket &&
				order.data.basket.map((item, i) => (
					<CheckoutProduct
						key={i}
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
                  rating={item.rating}
                  hideButton
					/>
				))}

			<CurrencyFormat
				renderText={value => (
					<h3 className="order__total">Order Total: {value}</h3>
				)}
				decimalScale={2}
				value={order.data.payment / 100}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
		</div>
	);
}

export default Order;
