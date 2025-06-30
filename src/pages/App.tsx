import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Card01 from './Card01';
import Card02 from './Card02';
import Card03 from './Card03';
import Editar from './Editar';
import Relatorios from './Relatorios';
import UpdatePedido from './UpdatePedido';
import UpdateEstoque from './UpdateEstoque';
import CreateEstoque from './CreateEstoque';
import CreatePedido from './CreatePedido';
import Estoque from './Estoque';
import Transacoes from './Transacoes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card01" element={<Card01 />} />
        <Route path="/card02" element={<Card02 />} />
        <Route path="/card03" element={<Card03 />} />
        <Route path="/editar" element={<Editar />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/updatePedido/:id" element={<UpdatePedido />} />
        <Route path="/updateEstoque/:id" element={<UpdateEstoque  />} />
        <Route path="/createEstoque" element={<CreateEstoque />} />
        <Route path="/createPedido" element={<CreatePedido />} />
        <Route path="/estoque" element={<Estoque />} />   
        <Route path="/transacoes" element={<Transacoes />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
