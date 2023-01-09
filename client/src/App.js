import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import NewForm from "./components/NewForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SaldoForm from "./components/SaldoForm";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<NewForm />} />
        <Route path="/saldo" element={<SaldoForm />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
