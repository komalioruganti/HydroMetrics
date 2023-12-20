import '../css/community.css';
import eco from '../images/ecofriend.jpeg'
import crichero from '../images/crichero.jpg';
export default function Community() {
    function handleSubmit(){
        
    }
    return(
        <>
            <div className="community-page">
        <h2 className="community-title">Community Engagement</h2>

        <div className="community-body">
            <br/>
            <div className="center-text">
                <h1>No Community Found</h1>
            </div><hr/>  

            <div className='join'>
                <h1>Join you Community</h1>
                <p>Request to join planet-friendly community.<br/>Select your team from the list below</p>
            </div>
            <div className="search-container">
                <input type="text" id="searchInput" placeholder="Search..."/>
                <button type="button" id="searchButton">
                    <h3>Search</h3>
                </button>
            </div>

            <div className="button-container">
                <div className="hero-img">
                    <img src={crichero} alt="Your Image"/>
                    Crichero
                </div>
                <button className="join-button">Join</button>
            </div>

            <div className="button-container">
                <div className='eco-img'>
                    <img src={eco} alt="Your Image"/>
                    Ecofriends
                </div>
                <button className="join-button">Join</button>
            </div>
        </div>
    </div>
        </>
    )}