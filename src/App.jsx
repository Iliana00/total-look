import React from "react";
import { Route, Routes } from "react-router-dom";
import OrderModal from "./Components/Home/OrderModal";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<OrderModal />}/>
      </Routes>
    </Router>
  );
}

export default App;
