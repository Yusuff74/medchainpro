import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Procure from "./components/Procure";
import MedChainProPay from "./components/MedChainProPay";
import MarketAccess from "./components/MarketAccess";
import RxInsight from "./components/RxInsight";
import Partnership from "./components/Partnership";
import Careers from "./components/Careers";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solution/procure-direct" element={<Procure />} />
        <Route path="/solution/medchainpropay" element={<MedChainProPay />} />
        <Route path="/solution/market-access" element={<MarketAccess />} />
        <Route path="/solution/rx-insight" element={<RxInsight />} />
        <Route path="/partnerships" element={<Partnership />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
