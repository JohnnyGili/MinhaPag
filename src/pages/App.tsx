import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Card01 from './Card01';
import Card02 from './Card02';
import Card03 from './Card03';
import Editar from './Editar';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card01" element={<Card01 />} />
        <Route path="/card02" element={<Card02 />} />
        <Route path="/card03" element={<Card03 />} />
        <Route path="/editar" element={<Editar />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
