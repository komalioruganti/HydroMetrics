// App.js
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Article from './Pages/Article';
import NewsAndArticles from './Pages/NewsAndArticles.js'
import EduResources from './Pages/EducationalResources.js';
import './App.css';
import WaterCalculator from './Pages/WaterCalculator.js';
import FoodGuide from './Pages/FoodGuide.js';
import Scan from './Pages/Scan.js';

import BarChart from './Components/BarGraph.js';
import Graphs from './Pages/Graphs.js';
import AchBadgs from './Pages/AchBadge.js';
import Help from './Pages/Help.js'
import Refer from './Pages/Refer.js'
import Community from './Pages/Coomunity.js';
import Dashboard from './Pages/DashBoard.js';
import Profile from './Pages/Profile.js';
import Settings from './Pages/Settings.js';
import Qu from './Pages/q.js'
import Hardware from './Pages/Hardware.js';
import Q1 from './Pages/q1.js'
import Check from './Pages/test.js'
import Ques from './Pages/Questionairre.js';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="newsAndArticles" element={<NewsAndArticles />} />
      <Route path="newsAndArticles/article" element={<Article />} />
      <Route path="eduResources" element={< EduResources/>} />
      <Route path="eduResources/article" element={<Article />} />
      <Route path="waterCalculator" element={<WaterCalculator />} />
      <Route path="FoodGuide" element={<FoodGuide/>}/>
      <Route path="Scan" element={<Scan/>}/>
      <Route path="graph" element={<Graphs/>}/>
      <Route path="AchBadges" element={<AchBadgs/>}/>
      <Route path="help" element={<Help/>}/>
      <Route path="refer" element={<Refer/>}/>
      <Route path="community" element={<Community/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="settings" element={<Settings/>}/>
      <Route path="q" element={<Qu/>}/>
      <Route path="hardware" element={<Hardware/>}/>
      <Route path="q1" element={<Q1/>}/>
      <Route path="test" element={<Check></Check>}/>
      <Route path = "questionairre" element={<Ques/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
