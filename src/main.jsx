import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import InPlayScreen from "./screens/InPlayScreen.jsx";
import SettingHeader from "./components/Roshan/Profile/SettingHeader.jsx";
import ExchangeHeader from "./components/Roshan/Profile/ExchangeHeader.jsx";
import { Homescreen } from "./screens/Homescreen.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
     {/* <AuthProvider> */}
     <Router>
      <Routes>
        <Route path="/" element={<App />} >
        <Route path="/home" element={<Homescreen />} />
        <Route path="/settings" element={<SettingHeader/>} />
        <Route path="/Profile" element={<ExchangeHeader />} />
        <Route path="/in-play" element={<InPlayScreen/>} />
        {/* <Route path="/casion/:id" element={<Casino />} /> */}
         </Route>
      </Routes>
     
    </Router>
    {/* </AuthProvider> */}
  </StrictMode>
);
