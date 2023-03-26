import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./components/AboutPage/AboutPage";
import CategorySelectionPage from "./components/CategorySelectionPage/CategrotySelectionPage";
import NavBarPage from "./components/NavBarPage/NavBarPage";
import TeamPage from "./components/TeamPage/TeamPage";
import EventsPage from "./components/EventsPage/EventsPage";
function App() {
  return (
    <div className="App w-fit h-fit bg-background">
      <BrowserRouter>
        <main>
          <Routes>
            <Route exact path="/" element={<NavBarPage />} />
            <Route exact path="/events" element={<EventsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
