import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../app/actions/userActions';

const UserListUpdated = () => {
  const state = useSelector((store) => store.updatedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers()); //askiyonu çağırdık
  }, []);

  return (
    <div>
      {state.isLoading ? (
        <h1>Yükleniyor</h1>
      ) : state.isError ? (
        <h1>{state.isError}</h1>
      ) : (
        state.users.map((i) => <h1>{i.name}</h1>)
      )}
    </div>
  );
};

export default UserListUpdated;
