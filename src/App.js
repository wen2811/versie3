import './App.css';
import Navigation from "./components/navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Treatments from "./pages/treatments/Treatments";
import Pricing from "./pages/pricing/Pricing";
import OurStory from "./pages/ourStory/OurStory";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <>
            <div className="body">
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/treatments" element={<Treatments />} />
                    <Route path="/prices" element={<Pricing />} />
                    <Route path="/ourStory" element={<OurStory />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;











