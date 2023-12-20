import food from '../images/food.png';
import questionairre from '../images/questionairre.png';
import qr from '../images/qr.png';
import Divs from '../Components/Divs';
import Div1 from '../Components/Div1';
import Navbar from '../Components/navbar.js';

function WaterCalculator(){
const arr = [{"title":"Take A Questionairre","content":"Complete a questionnaire assessing daily life activities and corresponding water consumption.","imgURL":questionairre},
{"title":"Scan Ingredients","content":"Scan product ingredients to calculate its water footprint based on the water usage associated with those ingredients.","imgURL":qr},
{"title":"Water In Your Food","content":"The production method, water source (rainfed or irrigated), and environmental impact determine whether the water footprint of your food is categorized as small (S), medium (M), or large (L).","imgURL":food}];
return (
    <>
    <Navbar></Navbar>
    <div className='wrapper'>
    <div className='wf-container'>
        {arr.map((element,index)=>{
            {/* if(index%2 === 0){
                return <Divs title = {element.title} content={element.content} img = {element.imgURL}></Divs>
            }else{
               return <Div1 title = {element.title} content = {element.content} img = {element.imgURL}></Div1>
            } */}
            if(index === 0){
                return <><a href = "/q" className='text-none'><Divs title = {element.title} content={element.content} img = {element.imgURL}></Divs></a></>
            }else if(index === 1){
                return <><a href = "/Scan" className='text-none'><Div1 title = {element.title} content = {element.content} img = {element.imgURL}></Div1></a></>
            }else{
                return <><a href = "/FoodGuide" className='text-none'><Divs title = {element.title} content={element.content} img = {element.imgURL}></Divs></a></>
            }
        })}
        </div>
    </div>
    </>
)
}

export default WaterCalculator;