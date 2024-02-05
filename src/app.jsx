import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./page/HomePage";
import CheckoutPage from "./page/CheckoutPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
