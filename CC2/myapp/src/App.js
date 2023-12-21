import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Sign_up from "./Components/Sign_up";
import About from "./Components/About";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import PaymentPage  from "./Components/PaymentPage";
import CardPayment from "./Components/CardPayment";
import DigitalPayment from "./Components/DigitalPayment";
import CashOnDelivery from "./Components/CashOnDelivery";
import Order from "./Components/Order";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Nav /> 
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign_up" element={<Sign_up />} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/PaymentPage"element={<PaymentPage/>}/>
          <Route path="/CardPayment"element={<CardPayment/>}/>
          <Route path="/DigitalPayment"element={<DigitalPayment/>}/>
          <Route path="/CashOnDelivery"element={<CashOnDelivery/>}/>
          <Route path="/Order" element={<Order/>}/>

        
        </Routes>

      </Router>
    </>
  );
}
export default App;
