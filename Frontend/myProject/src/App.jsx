import "./App.css";
import Login from "./Component/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import Signup from "./Component/Signup";
import Dashboard from "./Component/Dashboard";
import About from "./Component/About";
import Gallery from "./Component/Gallery";
import Form from "./Component/Form";
import AdminPage from "./Component/AdminPage";
import Bookevent from "./Component/BookEvent";
import EventDetails from "./Component/EventDetails";

// import EventRegistrationForm from "./Component/EventRegistrationForm";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/form" element={<Form />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/book" element={<Bookevent/>} />
            <Route path="/eventdetails/:id" element={<EventDetails/>} />
            
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
