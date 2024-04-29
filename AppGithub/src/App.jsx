import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Homepage from "./comportments/HomePage/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}