import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import profile from '../images/profile.jpg';

export default function Navbar() {
  useEffect(() => {
    // Define the callback function
    window.loadGoogleTranslate = function () {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_element');
    };

    // Clean up the callback function when the component is unmounted
    return () => {
      delete window.loadGoogleTranslate;
    };
  }, []);

  return (
    <>
     <Helmet>
        <script src="https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate" async></script>
      </Helmet>
      <header>
      <div className='goo-translate'>
      <div className='translate' id="google_element"></div>
      </div>
      <div class="nav-bar">
          <div class="navigation">
              <div class="nav-items">
                  <i class="uil uil-times nav-close-btn"></i>
                  <a href="/"><i class="uil uil-home"></i> <b>HydroMetrics</b></a>
                  <a href="/eduResources"><i class="uil uil-compass"></i> Educational Resources</a>
                  <a href="/newsAndArticles"><i class="uil uil-info-circle"></i>News & Articles</a>
                  <a href="/waterCalculator"><i class="uil uil-document-layout-left"></i>Water Footprint Calculator</a>
                  <a href="/dashboard"><img src={profile} alt="Profile Picture" class="profile-pic"></img></a>
                  {/* <a href="#"><i class="uil uil-document-layout-left"></i><div className='uil profile-icon-div'><img alt="profile-icon" src={profile}></img></div></a> */}
              </div>
          </div>
          <i class="uil uil-apps nav-menu-btn">
              
          </i>
      </div>
      <div class="scroll-indicator-container">
          <div class="scroll-indicator-bar"></div>
      </div>
      </header>
      
    </>
  );
}