import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Intro from "./components/Intro";
import Home from "./components/Home";
import ProjetDMZ from "./pages/ProjetDMZ";
import ProjetDiscordMonitoring from "./pages/ProjetDiscordMonitoring";

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      <div id="bg-blobs">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            !showHome ? (
              <Intro onAccess={() => setShowHome(true)} />
            ) : (
              <Home />
            )
          } />
          <Route path="/projet-dmz" element={<ProjetDMZ />} />
          <Route path="/projet-discord-monitoring" element={<ProjetDiscordMonitoring />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
