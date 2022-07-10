import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FoodDiary from "./components/FoodDiary/FoodDiary";
import FoodForm from "./components/FoodForm/FoodForm";
import FoodTable from "./components/FoodTable/FoodTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FoodDiary />
      
    </div>
  );
}

export default App;
