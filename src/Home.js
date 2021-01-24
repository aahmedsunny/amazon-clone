import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
					alt="not found:("
					className="home__image"
				/>
				<div className="home__row">
					<Product
						id="12321341"
						title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
						image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
						price={364.99}
						rating={5}
					/>{" "}
					<Product
						id="49538094"
						title="TP-Link AC1750 Smart WiFi Router (Archer A7) - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control and QoS"
						image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
						price={59.99}
						rating={3}
					/>{" "}
				</div>{" "}
				<div className="home__row">
					<Product
						id="4903850"
						title="Seagate BarraCuda 2TB Internal Hard Drive HDD – 3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache 3.5-Inch – Frustration Free Packaging (ST2000DM008)"
						image="https://images-na.ssl-images-amazon.com/images/I/71Czt9ypIbL._AC_SL1500_.jpg"
						price={54.99}
						rating={5}
					/>{" "}
					<Product
						id="23445930"
						title="WD 10TB Elements Desktop Hard Drive, USB 3.0 - WDBWLG0100HBK-NESN"
						image="https://images-na.ssl-images-amazon.com/images/I/71MDGnNGWYL._AC_SL1500_.jpg"
						price={189.99}
						rating={5}
					/>{" "}
					<Product
						id="3254354345"
						title="TP-Link N300 WiFi Extender(TL-WA855RE)-Covers Up to 800 Sq.ft, WiFi Range Extender supports up to 300Mbps speed, Wireless Signal Booster and Access Point for Home, Single Band 2.4Ghz only"
						image="https://images-na.ssl-images-amazon.com/images/I/61bDT8tAmvL._AC_SL1500_.jpg"
						price={17.99}
						rating={5}
					/>{" "}
				</div>{" "}
				<div className="home__row">
					<Product
						id="90829332"
						title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
						image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
						price={158.0}
						rating={5}
					/>{" "}
				</div>{" "}
			</div>{" "}
		</div>
	);
}

export default Home;
