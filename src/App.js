import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Navbar from "./common/Navbar";
import Header from "./common/Header";
import Pricing from "./components/Pricing";
import Footer from "./common/Footer";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts"; // Ensure this import is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Magazine from "./components/Magazine";
import Youtube from "./components/Youtube";
import Books from "./components/Books";
import Articles from "./components/Articles";
import Success from "./components/Success";
import Insights from "./components/Insights";

export default function App() {
  const [route, setRoute] = useState("");
  const RouteChangeTracker = () => {
    const location = useLocation();

    useEffect(() => {
      setRoute(location.pathname);
    }, [location]);

    return null;
  };
  return (
    <Router>
      <Header route={route} />
      <RouteChangeTracker />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} /> {/* Ensure this route is correct */}
        <Route exact path="/navbar" element={<Navbar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/books" element={<Books />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/success" element={<Success />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
      <Footer route={route} />
    </Router>
  );
}
