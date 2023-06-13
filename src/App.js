import "./App.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import NewsGrid from "./Components/NewsGrid.1";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <NewsGrid></NewsGrid>
      <Cards></Cards>
    </div>
  );
}

export default App;
