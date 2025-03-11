import React from "react"

import Index from "./homePage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import PolicySupport from "./pages/PolicySupport"
import AllCollection from "./pages/AllCollection"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import IndexCustomSuit from "./customSuite/IndexCustomSuit"
import ImageFilterComponent from './components/ImageCollector'
import IndexSizes from "./sizes/indexSizes"

const App = () => {
  return (
    <>
    <Router>
      {/* <NavBar /> */}
      {/* <AccessibilityMenu /> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/works" element={<AllCollection />} />
        <Route path="/customSuit" element={<IndexCustomSuit />} />
        <Route path="/PolicySupport" element={<PolicySupport />} />
        <Route path="/indexSizes" element={<IndexSizes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
