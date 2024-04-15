import { useEffect } from 'react';
import axios from 'axios';
import { setError, setLoading, setUsers } from '../app/slices/classicSlice';
import { useDispatch, useSelector } from 'react-redux';

const UserListClassic = () => {
  const state = useSelector((store) => store.classicReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => dispatch(setUsers(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, []);

  return (
    <div>
      {state.isLoading ? (
        <h1>Yükleniyor...</h1>
      ) : state.isError ? (
        <h1>
          {state.isError}
          <button>Tekrar Dene</button>
        </h1>
      ) : (
        state.users.map((user) => <h1>{user.name}</h1>)
      )}
    </div>
  );
};

export default UserListClassic;
