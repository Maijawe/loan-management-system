import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registrants from "./Registrants";
import AdvanceRequest from "./AdvanceRequest";
import Receipts from "./Receipts.jsx";
import Youtube from "./Youtube.jsx";
import Affordability from "./Affordability.jsx";
import Reminders from "./Reminders.jsx";
import KPI from "./KPI.jsx";


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registrants" element={<Registrants />} />
      <Route path="/AdvanceRequest" element={<AdvanceRequest />} />
      <Route path="/receipts" element={<Receipts />} />
      <Route path="/youtube" element={<Youtube />} />
      <Route path="/affordability" element={<Affordability />} />
      <Route path="/reminders" element={<Reminders />} />
      <Route path="/kpi" element={<KPI />} />
      
  
    </Routes>
  </BrowserRouter>
 

  );
}

export default App;

