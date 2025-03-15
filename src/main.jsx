import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import InPlayScreen from "./screens/InPlayScreen.jsx";
import SettingHeader from "./components/Roshan/Profile/SettingHeader.jsx";
import ExchangeHeader from "./components/Roshan/Profile/ExchangeHeader.jsx";
import { Homescreen } from "./screens/Homescreen.jsx";
import EndedGameDetailsScreen from "./screens/EndedGameDetailsScreen.jsx";
import { EventDetails } from "./screens/EventDetails.jsx";
import CasinoProvider from "./services/casino/casino.context.jsx";
import SportsProvider from "./services/allsports/sports.context.jsx";
import Fullgame from "./screens/Fullgame.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AuthProvider> */}
    <SportsProvider >
    <CasinoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Homescreen />} />
            <Route path="/sports" element={< ></>} />
            <Route path="/settings" element={<SettingHeader />} />
            <Route path="/account" element={<ExchangeHeader />} />
            <Route path="/in-play" element={<InPlayScreen />} />
            <Route path="/game" element={<EndedGameDetailsScreen />} />
            <Route path="/casino/:id" element={<EventDetails />} />
            <Route path="/fullgame/:id" element={<Fullgame />} />
          </Route>
        </Routes>
      </Router>
    </CasinoProvider>
    </SportsProvider>
    {/* </AuthProvider> */}
  </StrictMode>
);
