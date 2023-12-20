import '../css/community.css';
import { useState } from 'react';
import '../css/styles.css';
import Navbar from '../Components/navbar';
import profile from '../images/profile.jpg'
import Profile from './Profile';
import Community from './Coomunity';
import AchBadgs from './AchBadge';
import Refer from './Refer';
import Help from './Help';
import Settings from './Settings';

export default function Dashboard(){
    const [htmlContent, setHtmlContent] = useState(<Profile></Profile>);
    
    return (
<>  
        <Navbar></Navbar>
        <div class="spacer"></div>
    <div className="grid-container">  
        <aside id="sidebar">
            <div class="sidebar-title">
            <img className="sidebar-pic" src={profile}/>
            <span className="material-icons-outlined" onClick="closeSidebar()">close</span>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <button className="sidebar-button" data-page-id="profile" onClick = {()=>{
setHtmlContent(<Profile></Profile>)
                    }}>
                        Profile
                    </button>
                </li>
                <li className="sidebar-list-item">
                  <button className="sidebar-button" data-page-id="dashboard" onClick = {()=>{
setHtmlContent(<Profile></Profile>)
                    }}>
                   Dashboard
                </button>
                </li>
                <li className="sidebar-list-item">
                  <button className="sidebar-button" data-page-id="community" onClick = {()=>{
setHtmlContent(<Community></Community>)
                    }}>
                    Community Engagement
                </button>
                </li>
                <li className="sidebar-list-item">
                  <button className="sidebar-button" data-page-id="ach_bad" onClick = {()=>{
setHtmlContent(<AchBadgs></AchBadgs>)
                    }}>
                    Acheivements & Badges
                </button>
                </li>
                <li className="sidebar-list-item">
                    <button className="sidebar-button" data-page-id="refer" onClick = {()=>{
setHtmlContent(<Refer></Refer>)
                    }}>
                        Refer a friend
                    </button>
                </li>
                <li className="sidebar-list-item">
                  <button className="sidebar-button" data-page-id="settings" onClick = {()=>{
setHtmlContent(<Settings></Settings>)
                    }}>
                    Settings
                </button>
                </li>
                <li className="sidebar-list-item">
                  <button className="sidebar-button" data-page-id="help" onClick = {()=>{
setHtmlContent(<Help></Help>)
                    }}>
                    Help Desk & Feedback
                </button>
                </li>
                <li className="sidebar-list-item">
                  <button className="sidebar-button">
                   Logout
                </button>
                </li>
            </ul>
        </aside>
    

    
        <main class="main-container">
            {htmlContent}
        </main>
    </div>

    {/* <!-- Scripts -->
    <!-- ApexCharts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.35.5/apexcharts.min.js"></script> */}
   
{/* 
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const navMenuBtn = document.querySelector('.nav-menu-btn');
            const navItems = document.querySelector('.nav-items');
            const navCloseBtn = document.querySelector('.nav-close-btn');

            navMenuBtn.addEventListener('click', () => {
                document.body.classList.add('menu-active');
            });

            navCloseBtn.addEventListener('click', () => {
                document.body.classList.remove('menu-active');
            });
        });
    </script> */}


</>
    )
} 