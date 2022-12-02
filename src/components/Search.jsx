import React, { useState, useContext } from 'react'
import { db } from '../firebase';
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc  } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';
const Search = () => {
  // username é o nome pesquisado
  const [username, setUsername] = useState()
  //user é o nome encontrado na base de dados
  const [user, setUser] = useState();

  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext)

  const handleSearch = async () => {
    // cria uma consulta na coleção 'collection' com o parâmetro depois de 'where'
    const q = query(collection(db, 'users'), where('displayName', '==', username));
    try {
      // recupera os arquivos de acordo com a consulta
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {
      setError(true)
    }
  }

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  }

  const handleSelect = async () => {
    //checar se o grupo(coleção chats no firestore) existe, se não cria um
    const combinedID =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, 'chats', combinedID));
      if (!res.exists()) {
        //cria um chat entre dois usuários na coleção chats
        await setDoc(doc(db, 'chats', combinedID), {messages: []});

        //cria lista de chats do usuários
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedID+'.userInfo']: {
            uid:user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedID+'.date']: serverTimestamp()
        });

        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedID+'.userInfo']: {
            uid:currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedID+'.date']: serverTimestamp()
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername('');
  }


  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" value={username} placeholder='Buscar contatos' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} />
      </div>
      {error && <span>Usuário não encontrado</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search;
