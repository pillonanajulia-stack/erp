import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Estoque from "./pages/Estoque";
import Pedidos from "./pages/Pedidos";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/compras" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}