import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import FooterComponenr from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <FooterComponenr />
    </BrowserRouter>
  );
};

export default App;
