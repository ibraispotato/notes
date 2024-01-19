import MainPage from "./mainPage/mainPage"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GetContext } from "./context/context";
import './App.css';

function App() {
  return (
    <div >
      <Router>
        <GetContext>
        <Routes>
          <Route path="/notes" element={<MainPage />} />
          
          </Routes>
          </GetContext>
      </Router>
      
    </div>
  );
}

export default App;
