// import React from "react"; 
// import BeerCard from "../../components/beerCard/BeerCard"; 
// import "./Beers.css"; 
// import { IBeer } from "../../../interfaces/IBeer"; 

// interface BeersProps { 
//     beers: IBeer[]; 
//     loading: boolean; 
// } 
    
// const Beers: React.FC<BeersProps> = ({ beers, loading }) => { 
//     return ( 
//             <section> 
//             <div className="beers-page"> </div> 
//         {beers.map(() => ( 
//             <BeerCard beers={beers} loading={loading} /> 
//         ))} 
//         </section> 
//     ); 
// }; 

// export default Beers;

import React from "react";
import BeerCard from "../../components/beerCard/BeerCard";
import Loader from "../../components/loader/Loader";
import "./Beers.css";
import { IBeer } from "../../../interfaces/IBeer";

interface BeersProps {
    beers: IBeer[];
    loading: boolean;
}

const Beers: React.FC<BeersProps> = ({ beers, loading }) => {
    return (
        <section className="beers-container">
            {loading ? (
                <Loader />
            ) : (
                beers.map((beer) => (
                    <BeerCard key={beer._id} beer={beer} />
                ))
            )}
        </section>
    );
};

export default Beers;

