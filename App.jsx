import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Sidebar from './components/Sidebar'

import DashboardOperacional from './pages/DashboardOperacional'
import Dashboard from './pages/Dashboard'
import Pedidos from './pages/Pedidos'
import PedidoDetalhes from './pages/PedidoDetalhes'
import Orcamentos from './pages/Orcamentos'
import Notas from './pages/Notas'
import Estoque from './pages/Estoque'
import Financeiro from './pages/Financeiro'
import Producao from './pages/Producao'
import Produtos from './pages/Produtos'
import MateriaPrima from './pages/MateriaPrima'
import OrcamentoDetalhes from './pages/OrcamentoDetalhes'
import ControleIndustrial from './pages/ControleIndustrial'
import NFe from './pages/NFe'

export default function App() {

  return (

    <BrowserRouter>

      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          background: '#f5f5f5'
        }}
      >

        {/* SIDEBAR */}
        <Sidebar />

        {/* CONTEÚDO */}
        <div
          style={{
            flex: 1
          }}
        >
          
          <Routes>

            {/* DASHBOARD */}
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/operacional"
              element={<DashboardOperacional />}
            />

            {/* NOTAS */}
            <Route
              path="/notas"
              element={<Notas />}
            />

            {/* NFE */}
            <Route
              path="/nfe"
              element={<NFe />}
            />

            {/* ESTOQUE */}
            <Route
              path="/estoque"
              element={<Estoque />}
            />

            {/* FINANCEIRO */}
            <Route
              path="/financeiro"
              element={<Financeiro />}
            />

            {/* PRODUÇÃO */}
            <Route
              path="/producao"
              element={<Producao />}
            />

            {/* PRODUTOS */}
            <Route
              path="/produtos"
              element={<Produtos />}
            />

            {/* INDUSTRIAL */}
            <Route
              path="/industrial"
              element={<ControleIndustrial />}
            />

            {/* MATÉRIA PRIMA */}
            <Route
              path="/materiaprima"
              element={<MateriaPrima />}
            />

            {/* PEDIDOS */}
            <Route
              path="/pedidos"
              element={<Pedidos />}
            />

            {/* DETALHES PEDIDO */}
            <Route
              path="/pedidos/:numero"
              element={<PedidoDetalhes />}
            />

            {/* ORÇAMENTOS */}
            <Route
              path="/orcamentos"
              element={<Orcamentos />}
            />

            {/* DETALHES ORÇAMENTO */}
            <Route
              path="/orcamentos/:id"
              element={<OrcamentoDetalhes />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>

  )

}