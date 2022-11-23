import React from 'react';
import Add from '../img/addAvatar.png';

const Login = () => {
  return(
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Spot</span>
        <span className='title'>Entrar</span>
        <form>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='senha' />
          <button>Login</button>
        </form>
        <p>Não tem uma conta? Criar</p>
      </div>
    </div>
  )
}

export default Login;