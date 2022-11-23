import React from 'react';
import Add from '../img/addAvatar.png';

const Register = () => {
  return(
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Spot</span>
        <span className='title'>Criar Conta</span>
        <form>
          <input type="text" placeholder='nome' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='senha' />
          <input style={{display:'none'}}type="file" id='file'/>
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Adicionar foto</span>
          </label>
          <button>Criar Conta</button>
        </form>
        <p>Já tem uma conta? Entrar</p>
      </div>
    </div>
  )
}

export default Register;