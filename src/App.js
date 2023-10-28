// import "./App.css";
import Covid from "./components/covid";
import BookStor from "./components/bookStor";
import FormExm from "./components/formExm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Covid />} />
          <Route exact path="/calc" element={<FormExm />} />
          <Route exact path="/book" element={<BookStor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
