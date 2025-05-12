import { useState } from 'react';

const Register = (Props) => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Props.handleSignup(data.email, data.password);
  };

  return (
    <div className='Register'>
      <div className='Register-container'>
        <div className='Register-form'>
          <h1>Regístrate</h1>
          <form className='Register__form' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Correo electrónico'
              name='email'
              value={data.email}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Contraseña'
              name='password'
              value={data.password}
              onChange={handleChange}
            />
            <button type='submit' onClick={handleSubmit}>
              Regístrate
            </button>
          </form>
        </div>
        <div className='Register-footer'>
          <p>
            <a href='/signin'>¿Ya eres miembro? Inicia sesión aquí</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
