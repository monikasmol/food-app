import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FoodDiary from "./components/FoodDiary/FoodDiary";
import FoodForm from "./components/FoodForm/FoodForm";
import FoodTable from "./components/FoodTable/FoodTable";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Register from "./components/Login/Register/Register";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "./helpers/firebaseConfig";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} />
        <Routes>
          <Route
            path="/"
            element={loggedIn ? <FoodDiary /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
