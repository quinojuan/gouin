import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import NewForm from "./components/NewForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<NewForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
