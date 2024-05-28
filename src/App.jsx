import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Learn } from "./pages/Learn.jsx";
import { About } from "./pages/About.jsx";
import { Blog } from "./pages/Blog.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Body } from "./components/Body.jsx";
import { Collaborative } from "./components/Collaborative.jsx";
import { Itembased } from "./components/Itembased.jsx";
import { Userbased } from "./components/Userbased.jsx";
import { Contentbased } from "./components/Contentbased.jsx";
import { Sessionbased } from "./components/Sessionbased.jsx";
import { Introduction } from "./components/Introduction.jsx";
import ScrollRouter from "./components/ScrollRouter.jsx";
import { Search } from "./components/Search.jsx";
import SearchShortcut from "./components/SearchShortcut.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ScrollRouter />
        <Navigation />
        <SearchShortcut />

        <Routes>
          <Route exact path="/" element={<Body />} />

          <Route path="learn" element={<Learn />}>
            <Route path="search" element={<Search />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="collaborative-filtering" element={<Collaborative />} />
            <Route path="user-based-filtering" element={<Userbased />} />
            <Route path="item-based-filtering" element={<Itembased />} />
            <Route path="content-based-filtering" element={<Contentbased />} />
            <Route
              path="session-based-recommender-systems"
              element={<Sessionbased />}
            />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
