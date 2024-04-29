import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Homepage from "./comportments/HomePage/Homepage";
import ProductPage from "./comportments/HomePage/ProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}