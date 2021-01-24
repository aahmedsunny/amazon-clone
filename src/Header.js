import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
	const [{ basket, user }] = useStateValue();

	const handleSignOut = () => {
		auth.signOut();
	};

	return (
		<div className="header">
			{/*! Logo */}
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="not found:("
				/>
			</Link>

			{/*! Search Bar */}
			<div className="header__search">
				<input className="header__searchInput" type="text" name="" id="" />
				<SearchIcon className="header__searchIcon" />
			</div>

			{/*! Options */}
			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div className="header__option" onClick={handleSignOut}>
						<span className="header__optionLineOne">
							Hello {user ? `${user.email}` : "Guest"}
						</span>
						<span className="header__optionLineTow">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>

				<Link to="/orders">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTow">& Orders</span>
					</div>
				</Link>

				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTow">Prime</span>
				</div>
				
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTow header__basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
