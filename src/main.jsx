import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
// import SettingHeader from "./components/SettingHeader.jsx";
// import ExchangeHeader from "./components/ExchangeHeader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     {/* <AuthProvider> */}
     <Router>
      {/* <Routes>
        <Route path="/" element={<App />} >
        <Route path="/" element={<Homescreen />} />
        <Route path="/settings" element={<SettingHeader/>} />
        <Route path="/Profile" element={<ExchangeHeader />} /> */}
        {/* <Route path="/casion/:id" element={<Casino />} /> */}
        {/* </Route>
      </Routes> */}
      <App />
    </Router>
    {/* </AuthProvider> */}
  </StrictMode>
);
