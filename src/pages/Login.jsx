import React, { useState,} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import Add from '../img/addAvatar.png';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setErr(err)
    }
  }
  return(
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Spot</span>
        <span className='title'>Entrar</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='senha' />
          <button>Login</button>
          {err && <span>Algo deu errado!</span>}
        </form>
        <p>Não tem uma conta? <Link to='/register'>Criar</Link></p>
      </div>
    </div>
  )
}

export default Login;