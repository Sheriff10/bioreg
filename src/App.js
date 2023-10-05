import "./App.css";
import "./header.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
   window.api = "http://localhost:5000"
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route index element={<Home />} />
            <Route path="/enroll" element={<Signup />} />
            <Route path="/verify" element={<Login />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
