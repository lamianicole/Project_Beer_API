import "./NotFound.css";

const NotFound: React.FC = () => {
    return (
        <div className="not-found-container">
            <div className="image-container">
            <img src="./img/not-found.png" alt="empty bottle" className="error-image" />
                <h1 className="error-text">We're sorry. Nothing to drink here ...</h1>
            </div>
        </div>
    );
};

export default NotFound;