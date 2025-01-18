import React from "react";
import "./BeerCard.css";
import { IBeer } from "../../../interfaces/IBeer";
import { Link } from "react-router-dom";

interface BeerCardProps {
    beer: IBeer;
}

const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
    return (
        <div className="beer-card">
            <img src={beer.image_url} alt={beer.name} className="beer-image" />
            <div className="beer-info">
                <h2>{beer.name}</h2>
                <p className="yellow">{beer.tagline}</p>
                <p>Contributed by: {beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
};

export default BeerCard;