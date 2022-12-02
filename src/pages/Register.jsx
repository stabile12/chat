import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from '../firebase';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Add from '../img/addAvatar.png';

const Register = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, `${displayName}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(

        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            //atualiza usuário
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            })
            // cria usuário
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })

            // cria coleção userChats na base de dados com o id de usuário
            await setDoc(doc(db, 'userChats', res.user.uid), {})
            navigate('/');
          });
        }
      );
    } catch (err) {
      setErr(true)
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Spot</span>
        <span className='title'>Criar Conta</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='nome' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='senha' />
          <input style={{ display: 'none' }} type="file" id='file' />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Adicionar foto</span>
          </label>
          <button>Criar Conta</button>
          {err && <span>Algo deu errado!</span>}
        </form>
        <p>Já tem uma conta? <Link to='/login'>Entrar</Link></p>
      </div>
    </div>
  )
}

export default Register;