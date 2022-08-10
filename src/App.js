import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={
          <RequireAuth>
            <About></About>
          </RequireAuth>
        }></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
