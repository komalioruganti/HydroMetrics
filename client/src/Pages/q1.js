import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { debounce } from 'lodash';
import Navbar from "../Components/navbar";
import '../css/q1.css'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import axios from 'axios';

import { Navigation } from 'swiper/modules';


export default () => {
  const [members,setMembers] = useState(0);
  const [tf,setTf] = useState(0.0);
  const [answers,setAnswers] = useState([]);
  const [sec,setSec] = useState(1);
  const [secName,setSecName] = useState("General Information");
  const arr = [5,9,13,16,18,20,23];
  const handleSubmit = async (e)=>{
      e.preventDefault();
      try {
        const inputData = {
            annual_production_volume: answers[0],
            raw_material_water_usage: answers[1],
            dyeing_process_water_usage: answers[2],
            washing_finishing_water_usage: answers[3],
            supply_chain_water_footprint: answers[4]
          }
        const response = await axios.post('http://127.0.0.1:8000/predict', inputData);
        console.log(response.data.water_footprint)

        
    }catch(e){
        console.log(e);
    }     
  }
  const handleInputChange = debounce((value,q) => {
    if(q ==='q1'){
        setAnswers([...answers,value])
    }
    if(q ==='q2'){
        setAnswers([...answers,value])
    }
    if(q ==='q3'){
        setAnswers([...answers,value])
    }
    if(q ==='q4'){
        setAnswers([...answers,value])
    }
    }, 700);

    

return(<>
    <Navbar></Navbar>
    <div className="white-color q-water-footprint">Section: <span className="q-wf-number"> {sec}</span></div>
  <div className="white-color q-water-footprint1"> <span className="q-wf-number"> {secName} </span></div>  
    <form onSubmit={handleSubmit}>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Name of the Company:
          </div>
          <input className="slide-input" type="text" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Location of Production Facilities?
          </div>
          <input className="slide-input" type="text" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slide-container">
            <div className="slide-title">
            Type of Textiles Produced?                            
            </div>
            <p className="center">
                <div className="slide-btn">Cotton</div>
                <div className="slide-btn">Polyester</div>
                <div className="slide-btn">Wool</div>
                <div className="slide-btn">Silk</div>
                <div className="slide-btn">
                    <input
                        type="text"
                        placeholder="Others"
                    />
                    <button>Submit</button>
                </div>
            </p>
    </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Annual Production Volume?
          </div>
          <input className="slide-input" type="text" onChange={(e)=>{handleInputChange(e.target.value,"q1");setSec(2);setSecName('Raw Material Production')}}/>
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slide-container">
            <div className="slide-title">
                Type of Raw Materials Used?                            
            </div>
            <p className="center">
                <div className="slide-btn">Natural Fibers</div>
                <div className="slide-btn">Synthetic Fibers</div>
                <div className="slide-btn">Blends</div>
                <div className="slide-btn">Silk</div>
                <div className="slide-btn">
                    <input
                        type="text"
                        placeholder="Others"
                    />
                    <button>Submit</button>
                </div>
            </p>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slide-container">
            <div className="slide-title">
                Source of Raw Materials?                            
            </div>
            <p className="center">
                <div className="slide-btn">Natural Fibers</div>
                <div className="slide-btn">Synthetic Fibers</div>
                <div className="slide-btn">Blends</div>
                <div className="slide-btn">Silk</div>
                <div className="slide-btn">
                    <input
                        type="text"
                        placeholder="Others"
                    />
                    <button>Submit</button>
                </div>
            </p>
    </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Water Usage for Raw Material Production?
          </div>
          <input className="slide-input" type="text" onChange={(e)=>{handleInputChange(e.target.value,"q1")}}/>
      </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Water Conservation Practices in Raw Material Production?
          </div>
          <div class="rating">
            <form class="rating-form-2">
              <label for="super-happy1">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy1"
                  value="yes" onClick={(e)=>{setSec(3); setSecName('Fabric Manufacturing')}}
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
                  onClick={(e)=>{setSec(3);setSecName('Fabric Manufacturing')}}
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
                Key Stages in Fabric Manufacturing Process?                            
            </div>
            <p className="center">
                <div className="slide-btn">Spinning</div>
                <div className="slide-btn">Weaving</div>
                <div className="slide-btn">Dyeing</div>
                <div className="slide-btn">Finishing</div>
                <div className="slide-btn">
                    <input
                        type="text"
                        placeholder="Others"
                    />
                    <button>Submit</button>
                </div>
            </p>
    </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Water Usage in Dyeing Process?
          </div>
          <input className="slide-input" type="text" onChange={(e)=>{handleInputChange(e.target.value,"q2")}}/>
      </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Water Usage in Washing and Finishing Process?
          </div>
          <input className="slide-input" type="text" onChange={(e)=>{handleInputChange(e.target.value,"q3")}}/>
      </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Water Recycling in Manufacturing Process?
          </div>
          <div class="rating">
            <form class="rating-form-2">
              <label for="super-happy1">
                <input
                  type="radio"
                  name="rating"
                  className="super-happy"
                  id="super-happy1"
                  value="yes" onClick={(e)=>{setSec(4);setSecName('Energy Consumption and Water')}}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                </svg>
              </label>

              <label for="super-sad1">
                <input
                  type="radio"
                  name="rating"
                  className="super-sad"
                  id="super-sad1"
                  value="no"
                  onClick={(e)=>{}}
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
                Sources of Energy for Manufacturing?                            
            </div>
            <p className="center">
                <div className="slide-btn" onClick={() => {setSec(4);setSecName('Energy Consumption and Water');}}>Electricity</div>
                <div className="slide-btn" onClick={() => {setSec(4);setSecName('Energy Consumption and Water');}}>Natural Gas</div>
                <div className="slide-btn" onClick={() => {setSec(4);setSecName('Energy Consumption and Water');}}>Renewable Energy</div>
                <div className="slide-btn" onClick={() => {setSec(4);setSecName('Energy Consumption and Water');}}>
                    <input
                        type="text"
                        placeholder="Others"
                    />
                    <button>Submit</button>
                </div>
            </p>
    </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Water Usage for Energy Production?
          </div>
          <input className="slide-input" type="text" onChange={(e)=>{setSec(5);setSecName('Wastewater Treatment')}}/>
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slide-container">
            <div className="slide-title">
                Wastewater Treatment Methods Used?                            
            </div>
            <p className="center">
                <div className="slide-btn">Electricity</div>
                <div className="slide-btn">Natural Gas</div>
                <div className="slide-btn">Renewable Energy</div>
                <div className="slide-btn">
                    <input
                        type="text"
                        placeholder="Others"
                    />
                    <button>Submit</button>
                </div>
            </p>
    </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Volume of Wastewater Treated Annuall?
          </div>
          <input className="slide-input" type="text" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Reuse of Treated Water?
          </div>
          <div class="rating">
            <form class="rating-form-2">
              <label for="super-happy1">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy1"
                  value="yes" onClick={(e)=>{setSec(6);setSecName('Supply Chain and Transportation')}}
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
                  onClick={(e)=>{setSec(6);setSecName('Supply Chain and Transportation')}}
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
            Supply Chain Process Description?
          </div>
          <input className="slide-input" type="text" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Estimated Water Footprint of Supply Chain Activities?
          </div>
          <input className="slide-input" type="text" onChange={(e)=>{setSecName('Additional Information and Practices');handleInputChange(e.target.value,"q4");setSec(7)}}/>
      </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
          Water-Saving Measures Implemented?
          </div>
          <div class="rating">
            <form class="rating-form-2">
              <label for="super-happy1">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy1"
                  value="yes" onClick={(e)=>{}}
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
                  onClick={(e)=>{}}
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
                Certifications or Standards Related to Water Usage?                            
            </div>
            <p className="center">
                <div className="slide-btn">ISO 14046</div>
                <div className="slide-btn">Other ISO Standards</div>
                <div className="slide-btn">None</div>
                <div className="slide-btn">
                    <input
                        type="text"
                        placeholder="Others"
                    />
                    <button>Submit</button>
                </div>
            </p>
    </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Plans to Reduce Water Footprint?
          </div>
          <input className="slide-input" type="text" onChange={()=>{setSec(8);setSecName('Data Verification and Reporting')}}/>
      </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
            Method of Water Usage Data Collection and Verification?
          </div>
          <input className="slide-input" type="text" />
      </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="slide-container">
          <div className="slide-title">
          Water-Saving Measures Implemented?
          </div>
          <div class="rating">
            <form class="rating-form-2">
              <label for="super-happy1">
                <input
                  type="radio"
                  name="rating"
                  class="super-happy"
                  id="super-happy1"
                  value="yes" onClick={(e)=>{}}
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
                  onClick={(e)=>{}}
                />
                <svg viewBox="0 0 24 24">
                  <path d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
                </svg>
              </label>
            </form>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
   <a href = "/test">
    <button className="q-submit" type="submit" onSubmit={handleSubmit}>Submit</button>
    </a>
    
    </form>
</>
)}