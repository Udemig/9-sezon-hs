import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './pages/Counter';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import Crud from './pages/Crud';

const App = () => {
  const { isDarkTheme } = useSelector((store) => store.counterReducer);
  return (
    <BrowserRouter>
      <div
        style={{ height: '100vh' }}
        className={isDarkTheme ? 'bg-dark text-white' : 'bg-white text-dark'}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
