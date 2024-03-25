import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';

const ListTodos = () => {
  // storedaki verilere abone olma
  // direkt store'u return edersek uyarı verir (çok fazla render)
  // genelde sadece ihtiyacımız olan reducer'a abone oluruz
  const storeState = useSelector((store) => store.todoReducer);

  return (
    <div>
      {storeState.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
