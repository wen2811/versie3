import './App.css';
import Navigation from "./components/navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Treatments from "./pages/treatments/Treatments";
import Pricing from "./pages/pricing/Pricing";
import OurStory from "./pages/ourStory/OurStory";
import Contact from "./pages/contact/Contact";


function App() {
  return (
      <>
    <div className="App">
        <Navigation />
        <Routes>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/treatments">
                <Treatments/>
            </Route>
            <Route path="/prices" >
                <Pricing/>
            </Route>
            <Route path="/ourStory">
                <OurStory/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
        </Routes>
    </div>

</>
);
}




export default App;
