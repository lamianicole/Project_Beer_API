import React from "react"; 
import BeerCard from "../../components/beerCard/BeerCard"; 
import "./Beers.css"; import { IBeer } from "../../../interfaces/IBeer"; 

interface BeersProps { 
    beers: IBeer[]; 
    loading: boolean; 
} 
    
const Beers: React.FC<BeersProps> = ({ beers, loading }) => { 
    return ( 
            <section> 
            <div className="beers-page"> </div> 
        {beers.map(() => ( 
            <BeerCard beers={beers} loading={loading} /> 
        ))} 
        </section> 
    ); 
}; 

export default Beers;