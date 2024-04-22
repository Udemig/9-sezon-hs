import React from 'react';

const Login = () => {
  return (
    <>
      <div>
        <label>İsminiz</label>
        <input className="form-control shadow" />
      </div>
      <div>
        <label>Şifre</label>
        <input className="form-control shadow" />
      </div>
    </>
  );
};

export default Login;
