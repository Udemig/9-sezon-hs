import { useEffect, useState } from 'react';
import Form from './components/Form';
import Loader from './components/Loader';
import ListItem from './components/ListItem';
import axios from 'axios';

const App = () => {
  // Tuttuğumuz state
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    // API'a todolar için GET isteği at
    axios
      .get('http://localhost:3000/todos')
      // istek başarılı olursa
      .then((res) => setTodos(res.data))
      // istek olumsuz olursa
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container p-3 p-md-5">
      <h1 className="text-center">
        Server <span className="text-warning">CRUD</span>
      </h1>

      <Form setTodos={setTodos} />

      <ul className="list-group">
        {/* veriler yoksa loader bas */}
        {!todos && <Loader />}

        {/* veriler geldiyse ekrana bas optioal chaining "?."  */}
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            allTodos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
