import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import InPlayScreen from "./screens/InPlayScreen.jsx";
import SettingHeader from "./components/Roshan/Profile/SettingHeader.jsx";
import ExchangeHeader from "./components/Roshan/Profile/ExchangeHeader.jsx";
import { Homescreen } from "./screens/Homescreen.jsx";
import GameDetailsScreen from "./screens/GameDetailsScreen.jsx";
import { EventDetails } from "./screens/EventDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AuthProvider> */}
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Homescreen />} />
          <Route path="/settings" element={<SettingHeader />} />
          <Route path="/account" element={<ExchangeHeader />} />
          <Route path="/in-play" element={<InPlayScreen />} />
          <Route path="/game" element={<GameDetailsScreen />} />
          <Route path="/casion/:id" element={<EventDetails />} />
        </Route>
      </Routes>
    </Router>
    {/* </AuthProvider> */}
  </StrictMode>
);
