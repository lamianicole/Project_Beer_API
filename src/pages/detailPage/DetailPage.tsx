import "./DetailPage.css";
import { Link, useParams } from "react-router-dom";
import { IBeer } from "../../../interfaces/IBeer";
import NotFound from "../notFound/NotFound";
import Navbar from "../../components/navbar/navbar";
import "../../components/navbar/navbar.css";

interface DetailPageProps {
    beers: IBeer[];
}

const DetailPage: React.FC<DetailPageProps> = ({ beers }) => {
    const { beerId } = useParams<{ beerId: string }>();
    // find method, um erstes übereinstimmendes element anzuzeigen: bedeutet, dass das beer-Objekt aus der Liste der beers gefunden wird, dessen ._id mit der beerId übereinstimmt. Wenn so ein Bier gefunden wird, wird es der Variable beer zugewiesen. Wenn kein Bier mit der übereinstimmenden ._id gefunden wird, wird beer undefined sein
    const beer = beers.find(b => b._id === beerId);

    if (!beer) return <NotFound />;

    return (
        <div className="page-content">
            {/* className page-content für mehr Platz, weil Navbar überdeckt sonst Text */}
        <div className="detail-page"> 
            <div className="content"> 
                <img src={beer.image_url} alt={beer.name} className="beer-image" /> 
                    <h2>{beer.name}</h2> 
                    <p className="tagline">{beer.tagline}</p> 
                    <p className="brewed-attenuation">First Brewed: {beer.first_brewed}</p> 
                    <p className="brewed-attenuation">Attenuation Level: {beer.attenuation_level}</p> 
                    <p>{beer.description}</p> 
                    <p>Brewer's Tips: {beer.brewers_tips}</p> 
                    <p>Contributed by: {beer.contributed_by}</p> 
                    {/* um eins zurück arrow */}
                    <Link to="/beers" className="back-button"> 
                        <img src="/img/back-arrow.png" alt="Back to Beers" className="back-arrow" /> 
                    </Link> 
            </div> 
            <Navbar /> 
        </div> 
        </div>
    );
};

export default DetailPage;