import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return ( 
        <>
            <section>
                <Link to={"/beers"} >
                    <img src="./img/all-beers.png" alt="beer filled shelf"/>
                    <div className="content">
                        <p>Lorem ... Nunc est bibendum. Cerevisiae bonum deorum donum. Multuae sunt causae bibendi. Ergo bibamus.</p>
                    </div>
                </Link>
            </section>
            <section>
                <Link to={"/random"} >
                    <img src="./img/random-beer.png" alt="beer in bar"/>
                    <div className="content">
                        <p>Lorem ipsum ...  Meum propositum est in taberna mori. Qui bene bibit, bene vivit. Qui bene vivit, in caelum venit.</p>
                    </div>
                </Link>
            </section>
        </>
    );
}

export default Home;