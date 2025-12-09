import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Accommodation from "./Pages/Accommodation";
import StyleIdeas from "./Pages/Stylepage";
import OurStory from "./Pages/OurStory";
import Moment from "./Pages/Moment";
import Gallery from "./Pages/Gallery";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/rsvp" element={<Home />} />
          <Route path="travel" element={<Accommodation />} />
          <Route path="stylepage" element={<StyleIdeas />} />
          <Route path="ourstory" element={<OurStory />} />
          <Route path="moment" element={<Moment />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
