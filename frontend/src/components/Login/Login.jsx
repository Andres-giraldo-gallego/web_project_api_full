import { useState } from 'react';

const Login = (props) => {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSignin(data.email, data.password);
  };

  const handleOnChange = (e) => {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <div className='login-form'>
          <h1>Inicia sesión</h1>
          <form className='login__form' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Correo electrónico'
              name='email'
              value={data.email}
              onChange={handleOnChange}
            />
            <input
              type='password'
              placeholder='Contraseña'
              name='password'
              value={data.password}
              onChange={handleOnChange}
            />
            <button type='submit' onClick={handleSubmit}>
              Inicia sesión
            </button>
          </form>
        </div>
        <div className='login-footer'>
          <p>
            <a href='/signup'>¿Aún no eres miembro? Regístrate aquí</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
