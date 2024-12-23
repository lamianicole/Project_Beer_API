import "./RandomBeer.css"
import { useState } from "react";
import { useEffect } from "react";
import { IBeer } from "../../../interfaces/IBeer";
import Navbar from "../../components/navbar/navbar";
import Loader from "../../components/loader/Loader";
import NotFound from "../notFound/NotFound";
import { Link } from "react-router-dom";

const RandomBeer = () => {
    const [beer, setBeer] = useState<IBeer | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchRandomBeer = async () => {
            try {
                const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/random');
                const randomBeer = await response.json();
                setBeer(randomBeer);
            } catch (error) {
                console.error("Error fetching random beer", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRandomBeer();
    }, []);

    if (loading) return <Loader />;
    if (!beer) return <NotFound />;

    return ( 
        <div className="page-content">
        <div className="random-beer"> 
            <h1>{beer.name}</h1> 
            <img src={beer.image_url} alt={beer.name} className="beer-image" /> 
            <p className="description">{beer.description}</p> 
            <p>Brewer's Tips: {beer.brewers_tips}</p> 
            <p>Contributed by: {beer.contributed_by}</p> 
            {/* um eins zurück Arrow */}
            <Link to="/beers" className="back-button"> 
                <img src="/img/back-arrow.png" alt="Back to Beers" className="back-arrow" /> 
            </Link> 
            <Navbar /> 
        </div> 
        </div> 
    );
};

export default RandomBeer;