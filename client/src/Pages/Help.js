import '../css/help.css';
export default function AchBadgs() {
    function handleSubmit(){

    }
    return(
        <>
            <h2 class="help-title">Help Desk & Feedback</h2>
    <div class="help-body">
        <div>

            <div class="query-section"><div className="">
                <h1 className="help-h1"><u>Send us your Query</u></h1>
                <form action=" " method="post" >
                    <div className = "help-form">
                        <label for="query">Your Query:</label>
                        <textarea id="query" name="query" className= "query-text" rows="4" required></textarea>
                        <button type="submit" onSubmit={handleSubmit} class="submit-button"  >Submit</button>
                    </div>
                </form>
            </div>
            <hr/>
            <div class="ratings-section">
                <h1 className="help-h1"><u>Rate Your Experience</u></h1>
                <div class="stars">
                    <button class="star-btn">&#9733;</button>
                    <button class="star-btn">&#9733;</button>
                    <button class="star-btn">&#9733;</button>
                    <button class="star-btn">&#9733;</button>
                    <button class="star-btn">&#9733;</button>
                </div>
                <p>Click a star to rate</p>
            </div>
            <hr/>
            <div class="faqs-section">
                <h1 className="help-h1"><u>Frequently Asked Questions</u></h1>
                <div class="faq">
                    <h3>What can consumers do to reduce their direct water footprint ?</h3>
                    <br/>
                    <p className="Ans">Consumers can reduce their direct water footprint (home water use) by installing water saving toilets, applying a water-saving showerhead, closing the tap during teeth brushing, using less water in the garden and by not disposing medicines, paints or other pollutants through the sink.</p>
                </div>
                <div class="faq">
                    <h3>When is my water footprint sustainable?</h3>
                    <br/>
                    <p className="Ans">As a consumer, your water footprint is sustainable when (a) the total remains below your equal share of the available freshwater resources in the world, and (b) no component of the total water footprint presses at places where or times when local environmental flow requirements are violated.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
        </>
    )
}
