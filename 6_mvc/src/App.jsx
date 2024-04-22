import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListController from './pages/List/ListController';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListController />} />
        <Route path="/create" element={<h1>OLUŞTURMA SAYFASI</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
