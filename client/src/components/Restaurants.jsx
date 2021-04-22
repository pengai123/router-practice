import React, { useState } from 'react'
import RestaurantCard from "./RestaurantCard.jsx"

export default function Restaurants() {
	const [location, setLocation] = useState("");
	const [keyword, setKeyword] = useState("");

	const getHref = () => {
		if (location === "") {
			return "/restaurants"
		}
		if (location !== "" && keyword === "") {
			return `/restaurants/${location}`;
		}
		if (location !== "" && keyword !== "") {
			return `/restaurants/${location}/${keyword}`;
		}
	}

	return (
		<div className="page-container restaurants-page">
			<div className="search-area">
				<div className="location-input-wrapper">
					<input type="text" placeholder="Location" className="location-input"
						value={location} onChange={e => setLocation(e.target.value)} />
					<i className="fas fa-map-marker-alt location-input-icon"></i>
				</div>
				<div className="keyword-input-wrapper">
					<input type="text" placeholder="Restaurant, cuisine or a dish" className="keyword-input"
						value={keyword} onChange={e => setKeyword(e.target.value)} />
					<i className="fas fa-search keyword-input-icon"></i>
				</div>
				{/* <button href="/restaurants/phoenix/pizza">Search</button> */}
				<a href={getHref()}>Search</a>
			</div>
			<div className="restaurants-container">
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
			</div>
		</div>
	)
}