import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobList from './pages/JobList';
import AddJob from './pages/AddJob';
import Header from './components/Header';
import { useEffect } from 'react';
import api from './utils/api';
import { setJobs, setError, setLoading } from './app/slices/jobSlice';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  const getJobs = () => {
    dispatch(setLoading());

    api
      .get('/jobs')
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList retry={getJobs} />} />
        <Route path="/new" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
