import water1 from '../images/water1.png'
import water2 from '../images/water2.png'
import Navbar from '../Components/navbar'
import '../css/ach_bad.css';

export default function AchBadgs() {
    return (
        <>
        {/* <Navbar></Navbar> */}
<h2 class="ach-title">Acheivements & Badges</h2>
    <div class="ach-body">
        <div class="ach_bad">
            <h2 class="bad_h">Badges you have acheived</h2>
            <div class="ach">
                <div class="badge">
                    <img src={water1} alt="Badge 1"/>
                    <p>Badge 1 Description</p>
                </div>
        
                <div class="badge">
                    <img src={water2} alt="Badge 2"/>
                    <p>Badge 2 Description</p>
                </div>
            </div>
            <h2 class="bad_h">Badges awaiting ...</h2>
            <div class="not-ach">
                <div class="badge">
                    <img src={water1} alt="Badge 1" class="dimmed"/>
                    <p>Badge 1 Description</p>
                </div>
        
                <div class="badge">
                    <img src={water2} alt="Badge 2" class="dimmed"/>
                    <p>Badge 2 Description</p>
                </div>
    
            </div>
        </div>

    </div>
        </>
    )
}