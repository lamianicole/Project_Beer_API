// import { Link } from "react-router-dom";
// import "./BeerCard.css";
// import { IBeer } from '../../../interfaces/IBeer';
// import Loader from "../loader/Loader";

// interface BeerCardProps {
//     beers: IBeer[];
//     loading: boolean;
// }

// const BeerCard: React.FC<BeerCardProps> = ({ beers, loading }) => {
//     if (loading) return <Loader />;

//     return (
//         <div className="beer-list">
//         {beers.map((beer) => (
//             <div>

//             <Link to={`/beers/${beer._id}`} key={beer._id} className="beer-item">
//                 Go Beer</Link>
//             <img src={beer.image_url} alt={beer.name} className="beer-image" />
//             <h2>{beer.name}</h2>
//             <p>{beer.tagline}</p>
//             <p>Contributed by: {beer.contributed_by}</p>
//             </div>
//         ))}
//     </div>
//     );
// };

// export default BeerCard;

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