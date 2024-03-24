import { useSelector } from 'react-redux';

const ListTodos = () => {
  // storedaki verilere abone olma
  // direkt store'u return edersek uyarı verir (çok fazla render)
  // genelde sadece ihtiyacımız olan reducer'a abone oluruz
  const storeState = useSelector((store) => store.todoReducer);

  console.log(storeState);

  return <div>ListTodos</div>;
};

export default ListTodos;
