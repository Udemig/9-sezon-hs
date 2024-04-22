import FunctionComp from './components/functionComp';
import Pagination from './components/classComp';
import UserPage from './components/UserPage';
import CountDown from './components/CountDown';
import RefExample from './newComponents/refExample';
import FilterUser from './newComponents/FilterUser';

import { useState } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="container">
      <button
        className="btn btn-danger mb-5"
        onClick={() => setIsVisible(!isVisible)}
      >
        Gizle / Göster
      </button>

      {isVisible && (
        <>
          {/* <Pagination /> */}
          {/* <FunctionComp /> */}
          {/* <UserPage /> */}
          {/* <CountDown /> */}
          {/* <RefExample /> */}
          <FilterUser />
        </>
      )}
    </div>
  );
};

export default App;
