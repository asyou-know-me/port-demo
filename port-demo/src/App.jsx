import Header from "./components/Header";
import Details from "./components/Details";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  const loction = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Header />} />
          <Route path="/me" element={<Details />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
