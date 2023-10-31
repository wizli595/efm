// import "./App.css";
// import Covid from "./components/covid";
// import BookStor from "./components/bookStor";
// import FormExm from "./components/formExm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar";

import Ordinateur from "./components/tpSynthese/ordinature";

// import Calculatrice from "./components/calc";
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Covid />} />
          <Route exact path="/calc" element={<FormExm />} />
          <Route exact path="/book" element={<BookStor />} />
          <Route exact path="/c" element={<Calculatrice />} />
        </Routes>
      </Router> */}
      <Ordinateur />
    </div>
  );
}

export default App;
