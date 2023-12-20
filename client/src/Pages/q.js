import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { debounce } from 'lodash';
import Navbar from "../Components/navbar";
import '../css/q.css'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default () => {
  const [members,setMembers] = useState(0);
  const [tf,setTf] = useState(0.0);
  const [prev,setPrev] = useState(0);
  const [answers,setAnswers] = useState([]);
  const handleSubmit = async (e)=>{
      e.preventDefault();
      
    try {
      const response = await fetch('http://localhost:3001/q', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ q: answers }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle success, e.g., show a success message
      console.log('Form data submitted successfully');
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error submitting form data:', error);
    }
  }

  const handleInputChange = debounce((value,q) => {
    if(q === "q0"){
      setAnswers([...answers,value])
setTf(members*value)
    }
    if(q === "q1"){
      setAnswers([...answers,5*value])
      setTf(tf + (5*value*members))
    }
    if(q === "q2"){
      setAnswers([...answers,prev*value])
      setTf(tf + (prev*value*members))
    }
    if(q === "q3"){
      setAnswers([...answers,4*value])
      setPrev(4*value)
      setTf(tf + prev)
    } if(q === "q4"){
      setAnswers([...answers,value])
      setTf(parseFloat(tf)+parseFloat(value));
    }if(q === "q5"){
      setAnswers([...answers,prev*value])
      setTf(tf + (prev*value))
    }if(q === "q6"){
      setAnswers([...answers,value])
      setTf(parseFloat(tf)+parseFloat(value));
    }
    if(q === "q8"){
      setAnswers([...answers,value])
      setPrev(value);
    }
  
    }, 500);

  return (<>
  <Navbar></Navbar>
  <div className="white-color q-water-footprint">Water Footprint of Household: <span className="q-wf-number"> {tf}  litres</span></div>
  <div className="white-color q-water-footprint1">Water Footprint per person: <span className="q-wf-number"> {tf/members}  litres</span></div>  
     <form onSubmit = {handleSubmit}> 
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            How Many People in your household?
          </div>
          <input className="slide-input" type="number"  onChange={(e)=>{
            setAnswers([...answers,e.target.value])
            setMembers(e.target.value)
          }}/>
      </div>
    </SwiperSlide>
    <SwiperSlide>
          <div className="slide-container">
            <div className="slide-title">
            How many liters of water does each member of your household typically drink in a day?                            
            </div>
            <input className="slide-input" type="number" onChange ={(e)=>{
              const water = e.target.value;
              handleInputChange(water,"q0")
            }}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Is your household using any water purification methods, such as filters or purifiers?
          </div>
          <div class="rating">
            <form class="rating-form-2">
              <label for="super-happy1">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy1"
                  value="yes" onClick={(e)=>{setTf(tf*3+tf);setAnswers([...answers,3*tf])}}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                </svg>
              </label>

              <label for="super-sad1">
                <input
                  type="radio"
                  name="rating"
                  class="super-sad"
                  id="super-sad1"
                  value="no"
                  onClick={(e)=>{console.log(e.target.value);setAnswers([...answers,0])}}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
                </svg>
              </label>
            </form>
          </div>
        </div>

      </SwiperSlide><SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
          Do you consume bottled water?
          </div>
          <div class="rating">
            <form class="rating-form-3">
              <label for="super-happy2">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy2"
                  value="yes" onClick = {()=> {setAnswers([...answers,1])}}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                </svg>
              </label>

              <label for="super-sad2">
                <input
                  type="radio"
                  name="rating"
                  class="super-sad"
                  id="super-sad2"
                  value="no"
                  onClick={(e)=>{answers.push(0)}}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
                </svg>
              </label>
            </form>
          </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>
      
          <div className="slide-container">
            <div className="slide-title">
            How often do you consume bottled water?                            
            </div>
            <p className="center">
            <div className="slide-btn" onClick = {()=>{
             setTf((1.32*(members))+tf); setAnswers([...answers,1.32*(members)])
            }}>Daily</div>
            <div className="slide-btn"  onClick = {()=>{
             setTf((0.18*(members))+tf); setAnswers([...answers,0.18*(members)])
            }}>Weekly Once</div>
            <div className="slide-btn" onClick = {()=>{
             setTf((0.37*(members))+tf); setAnswers([...answers,0.37*(members)])
            }}>Twice a week</div>
            <div className="slide-btn" nClick = {()=>{
             setTf((0.56*(members))+tf);setAnswers([...answers,0.56*(members)])
            }}>Several times a week</div>
            <div className="slide-btn" onClick={()=>{setAnswers([...answers,0*(members)])}}>Never</div>
            </p>
          </div>
        
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
            On average, how long is a shower in per person?  (in minutes)                         
            </div>
            <input className="slide-input" type="number" min="1" max="45" onChange ={(e)=>{
              const water = e.target.value;
              setPrev(water);
              handleInputChange(water,"q1")}}/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
            How many baths do you take per day?                         
            </div>
            <input className="slide-input" type="number" min="1" max="45" onChange ={(e)=>{
              const water = e.target.value;
              handleInputChange(water,"q2")}}/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      
        <div className="slide-container">
          <div className="slide-title">
          Do you use low flow shower-heads for bathing?
          </div>
          <div class="rating">
            <form class="rating-form-4">
              <label for="super-happy3">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy3"
                  value="yes" onClick={()=>{
                    setTf(tf-(prev*0.35))
                    setAnswers([...answers,1])
                  }}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                </svg>
              </label>

              <label for="super-sad3">
                <input
                  type="radio"
                  name="rating"
                  class="super-sad"
                  id="super-sad3"
                  value="no"
                  onClick={(e)=>{console.log(e.target.value);setAnswers([...answers,0])}}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
                </svg>
              </label>
            </form>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
            How long, on average, are the taps in your household left running each day? (in minutes)                        
            </div>
            <input className="slide-input" type="number" min="1" max="45" oncChange = {(e) => handleInputChange(e.target.value,"q3")}/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      
        <div className="slide-container">
          <div className="slide-title">
          Do you use low flow taps for bathing?
          </div>
          <div class="rating">
            <form class="rating-form-5">
              <label for="super-happy4">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy4"
                  value="yes" onClick={()=>{
                    setTf(tf-(prev*0.35));
                    setAnswers([...answers,1])
                  }}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                </svg>
              </label>

              <label for="super-sad4">
                <input
                  type="radio"
                  name="rating"
                  class="super-sad"
                  id="super-sad4"
                  value="no"
                  onClick={(e)=>{console.log(e.target.value); setAnswers([...answers,0])}}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
                </svg>
              </label>
            </form>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      
          <div className="slide-container">
            <div className="slide-title">
            How often are dishes wahsed in your household?                            
            </div>
            <p className="center">
            <div className="slide-btn" onClick={()=>{ setAnswers([...answers,0])}}>No, dishes aren't washed in our household</div>
            <div className="slide-btn" onClick={()=>{setTf(tf+25); setAnswers([...answers,25])}}>Yes, Handwashing</div>
            <div className="slide-btn" onClick={()=>{setTf(tf+13); setAnswers([...answers,13])}}>Yes, with Dishwasher</div>
            </p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
              How much water is used to wash dishes? (in litres)                        
            </div>
            <input className="slide-input" type="number" min="1" max="45" onChange={(e)=>handleInputChange(e.target.value,"q4")}/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      
          <div className="slide-container">
            <div className="slide-title">
            What is your laundry routine?                            
            </div>
            <p className="center">
            <div className="slide-btn"  onClick={()=>{setPrev(35); setAnswers([...answers,35])}}>Wash by hand</div>
            <div className="slide-btn"  onClick={()=>{setPrev(130); setAnswers([...answers,130])}}>Old school washing machines</div>
            <div className="slide-btn"  onClick={()=>{setPrev(55); setAnswers([...answers,55])}}>Water/Energy efficient washing machines</div>
            </p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
              What is your laundry load in number of clothing items? (loads per day)(1 load=16 clothing items)                       
            </div>
            <input className="slide-input" type="number" min="1" max="45" onChange={(e)=>handleInputChange(e.target.value,"q5")}/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      
          <div className="slide-container">
            <div className="slide-title">
            How often do you clean your household?                            
            </div>
            <p className="center">
            <div className="slide-btn" onClick={()=>{setTf(tf+8); setAnswers([...answers,8])}}>Daily</div>
            <div className="slide-btn" onClick={()=>{setTf(tf+1.17); setAnswers([...answers,1.17])}}>Weekly</div>
            <div className="slide-btn" onClick={()=>{setTf(tf+0.26); setAnswers([...answers,0.26])}}>Monthly</div>
            <div className="slide-btn" onClick={()=>{setTf(tf+0); setAnswers([...answers,0])}}>Never</div>
            </p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
            How much water do you use for watering plants? (in litres)                       
            </div>
            <input className="slide-input" type="number" min="1" max="45" onChange={(e)=>handleInputChange(e.target.value,"q6")}/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      
        <div className="slide-container">
          <div className="slide-title">
          Do you have desert plants?
          </div>
          <div class="rating">
            <form class="rating-form-6">
              <label for="super-happy5">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy5"
                  value="yes" onClick={()=>{
                    setTf(tf-3.5); setAnswers([...answers,1])
                  }}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                </svg>
              </label>

              <label for="super-sad5">
                <input
                  type="radio"
                  name="rating"
                  class="super-sad"
                  id="super-sad5"
                  value="no"
                  onClick={(e)=>{console.log(e.target.value); setAnswers([...answers,0])}}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
                </svg>
              </label>
            </form>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
              How many vehicles do you own?                          
            </div>
            <input className="slide-input" type="number" min="1" max="6" onChange={(e)=>{setPrev(e.target.value); setAnswers([...answers,e.target.value])}}/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      
          <div className="slide-container">
            <div className="slide-title">
            What's your vehicle washing routine?                           
            </div>
            <p className="center">
            <div className="slide-btn" onClick = {()=>{setTf(tf+(60*prev));setPrev(prev => 60 * prev); setAnswers([...answers,60*prev])}}>Car Wash</div>
            <div className="slide-btn" onClick = {()=>{setTf(tf+(150*prev));setPrev(prev =>150*prev);setAnswers([...answers,150*prev])}}>DIY Scrub</div>
            <div className="slide-btn" onClick = {()=>{setTf(tf+(60*prev));setPrev(prev =>60*prev);setAnswers([...answers,60*prev])}}>Professional service</div>
            <div className="slide-btn" onClick = {()=>{setTf(tf+(0*prev));setPrev(1);setAnswers([...answers,0])}}>Never</div>
            </p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      
          <div className="slide-container">
            <div className="slide-title">
              How often do you give your vehicle for washing?                          
            </div>
            <p className="center">
            <div className="slide-btn" onClick={()=> {setTf(tf+ (prev/7));setAnswers([...answers,prev/7])}}>Weekly</div>
            <div className="slide-btn" onClick={()=> {setTf(tf+ (prev/30));setAnswers([...answers,prev/30])}}>Monthly</div>
            <div className="slide-btn" onClick={()=> {setTf(tf+ (prev*2/30));setAnswers([...answers,prev*2/30])}}>Twice A Month</div>
            </p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      
        <div className="slide-container">
          <div className="slide-title">
          Do you recycle plastic?
          </div>
          <div class="rating">
            <form class="rating-form-7">
              <label for="super-happy6">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy6"
                  value="yes" onClick={()=>{
                    setTf(tf-(members*0.15));
                    setAnswers([...answers,1])
                  }}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                </svg>
              </label>

              <label for="super-sad6">
                <input
                  type="radio"
                  name="rating"
                  class="super-sad"
                  id="super-sad6"
                  value="no"
                  onClick={()=>{
                    setTf(tf+(members*0.15))
                    setAnswers([...answers,0])
                  }}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
                </svg>
              </label>
            </form>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      
        <div className="slide-container">
          <div className="slide-title">
          Do you recycle paper?
          </div>
          <div class="rating">
            <form class="rating-form-8">
              <label for="super-happy7">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy7"
                  value="yes" onClick={()=>{
                    setTf(tf-(members*0.45))
                    setAnswers([...answers,1])
                  }}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                </svg>
              </label>

              <label for="super-sad7">
                <input
                  type="radio"
                  name="rating"
                  class="super-sad"
                  id="super-sad7"
                  value="no"
                  onClick={()=>{
                    setTf(tf+(members*0.45))
                    setAnswers([...answers,0])
                  }}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
                </svg>
              </label>
            </form>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      
        <div className="slide-container">
          <div className="slide-title">
          Do you donate or reuse clothes?
          </div>
          <div class="rating">
            <form class="rating-form-9">
              <label for="super-happy8">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy8"
                  value="yes" onClick={()=>{
                    setTf(tf-(members*1.22))
                    setAnswers([...answers,1])
                  }}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                </svg>
              </label>

              <label for="super-sad8">
                <input
                  type="radio"
                  name="rating"
                  class="super-sad"
                  id="super-sad8"
                  value="no"
                  onClick={()=>{
                    setTf(tf+(members*1.22))
                    setAnswers([...answers,0])
                  }}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
                </svg>
              </label>
            </form>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      
          <div className="slide-container">
            <div className="slide-title">
            What is the primary diet in your household?              
            </div>
            <p className="center">
            <div className="slide-btn" onClick={()=> {setPrev(1500);setAnswers([...answers,1500]);setTf(tf+ prev)}}>Vegan</div>
            <div className="slide-btn" onClick={()=> {setPrev(2000);setAnswers([...answers,2000]);setTf(tf+ prev)}} >Vegetarian</div>
            <div className="slide-btn" onClick={()=> {setPrev(2200);setAnswers([...answers,2200]);setTf(tf+ prev)}}>Semi-Vegetarian</div>
            <div className="slide-btn" onClick={()=> {setPrev(3500);}}>Non-Vegetarian</div>
            </p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
                How frequently do you consume meat?         
            </div>

            <div className="slide-btn" onClick={()=>{if(prev ===3500) setAnswers([...answers,prev*members]);setTf(tf+ (prev*members))}}>Daily</div>
            <div className="slide-btn" onClick={()=>{if(prev ===3500) setAnswers([...answers,prev*0.57*members]);setTf(tf+ (prev*0.57*members))}}>Several times a week</div>
            <div className="slide-btn" onClick={()=>{if(prev ===3500) setAnswers([...answers,prev*0.14*members]);setTf(tf+ (prev*0.14*members))}}>Weekly once</div>
            <div className="slide-btn" onClick={()=>{if(prev ===3500) setAnswers([...answers,prev*0.06*members]);setTf(tf+ (prev*0.06*members))}}>Ocassionally</div>
            <div className="slide-btn" onClick={()=>{if(prev ===3500) setAnswers([...answers,prev*members]);setTf(tf+ (prev*members))}}>Never</div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
                What's your frequency of consuming dairy products?       
            </div>
            <div className="slide-btn" onClick= {()=>{setAnswers([...answers,0.89*1*members]);setTf(tf+ (0.89*1*members))}}>Daily</div>
            <div className="slide-btn" onClick= {()=>{setAnswers([...answers,0.89*0.5*members]);setTf(tf+ (0.89*0.5*members))}}>Several times a week</div>
            <div className="slide-btn" onClick= {()=>{setAnswers([...answers,0.89*0.1*members]);setTf(tf+ (0.89*0.1*members))}}>Weekly once</div>
            <div className="slide-btn" onClick= {()=>{setAnswers([...answers,0.89*1*members]);setTf(tf+ (0.06*1*members))}}>Ocassionally</div>
            <div className="slide-btn" onClick= {()=>{setAnswers([...answers,0.89*0*members]);setTf(tf+ (0.89*0*members))}}>Never</div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
             What's your frequency of consuming beverages?      
            </div>
            <div className="slide-btn" onClick= {()=>{setAnswers([...answers,0.95*1*members]);setTf(tf+ (0.95*1*members))}}>Daily</div>
            <div className="slide-btn" onClick= {()=>{setAnswers([...answers,0.95*0.5*members]);setTf(tf+ (0.95*0.5*members))}}>Several times a week</div>
            <div className="slide-btn" onClick= {()=>{setAnswers([...answers,0.95*0.14*members]);setTf(tf+ (0.95*0.14*members))}}>Weekly once</div>
            <div className="slide-btn" onClick= {()=>{setAnswers([...answers,0.95*0.06*members]);setTf(tf+ (0.95*0.06*members))}}>Ocassionally</div>
            <div className="slide-btn" onClick= {()=>{setAnswers([...answers,0.95*0*members]);setTf(tf+ (0.95*0*members))}}>Never</div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
            How many pets do you own?                       
            </div>
            <input className="slide-input" type="number" min="1" max="6" onChange={(e)=>{handleInputChange(e.target.value,"q8")}}/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        
          <div className="slide-container">
            <div className="slide-title">
            How often do you wash your pets?                   
            </div>
            <div className="slide-btn" onClick = {()=>{setAnswers([...answers,prev*1*23]);setTf(tf+(prev*1*23))}}>Daily</div>
            <div className="slide-btn" onClick = {()=>{setAnswers([...answers,prev*0.14*23]);setTf(tf+(prev*0.14*23))}}>Once a week</div>
            <div className="slide-btn" onClick = {()=>{setAnswers([...answers,prev*0.28*23]);setTf(tf+(prev*0.28*23))}}>Weekly twice</div>
            <div className="slide-btn" onClick = {()=>{setAnswers([...answers,prev*0.03*23]);setTf(tf+(prev*0.03*23))}}>Once a month</div>
            <div className="slide-btn" onClick = {()=>{setAnswers([...answers,prev*0.06*23]);setTf(tf+(prev*0.06*23))}}>Twice a month</div>
            <div className="slide-btn" onClick = {()=>{setAnswers([...answers,prev*0*23]);setTf(tf+(prev*0*23))}}>Never</div>
          </div>
      </SwiperSlide>
    </Swiper>
    <a href="/graph">
    <div onSubmit={handleSubmit} className="q-submit">Submit</div>
    </a>
    </form>
  </>)}