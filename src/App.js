
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './Component/Home1';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import "./Component/nav.css"
import InteriorHome from './Component/InteriorHome';
import About from './Component/About';
import MoveUp from './Component/MoveUp';
import Renovation from './Component/Renovation';
import { Navbar } from 'react-bootstrap';
import NavBarHome from './Component/NavBar';
import Contact from './Component/Contact';
import RealEstate from './Component/RealEstate';
import HomeFooter from './Component/HomeFooter';
import Construction from './Component/Construction';
import RealEstateDetailProp from './Component/RealEstateDetailProp';
import HouseConstruction from './Component/HouseConstruction';
import HouseConstructiondivision from './Component/HouseConstructiondivision';
import ComercialConstruction from './Component/ComercialConstruction';
import Interior from './Component/Interior';
import RenovationExterior from './Component/RenovationExterior';
import Paint from './Component/Paint';
import PaintSubpage from './Component/PaintSubpage';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     {/* <NavBarHome/> */}
        <Routes>
          <Route path='/*' element={<Home1/>}/>
          <Route path='/interiordesigning/*' element={<Interior/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/renovation' element={<Renovation/>}/>
          <Route path='/renovation/:type/*' element={<RenovationExterior/>}/>
          <Route path='/renovationExterior/:category' element={<HouseConstructiondivision/>}/>
          <Route path='/renovationInterior/:category' element={<HouseConstructiondivision/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/realestate' element={<RealEstate/>}/>
          <Route path='/construction' element={<Construction/>}/>
          <Route path='/homeconstruction' element={<HouseConstruction/>}/>
          <Route path='/commercialconstruction' element={<ComercialConstruction/>}/>
          <Route path='/homeconstruction/:category' element={<HouseConstructiondivision/>}/>
          <Route path='/realestate/:pid' element={<RealEstateDetailProp/>}/>
          <Route path='/paintworks' element={<Paint/>}/>
          <Route path='/paintworks/:type' element={<PaintSubpage/>}/>
        </Routes>
        <MoveUp/>
        <HomeFooter/>
     </BrowserRouter>
    </div>
  );
}

export default App;
