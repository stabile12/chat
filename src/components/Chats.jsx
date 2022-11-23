import React from 'react';

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="" 
        />
        <div className="userChatInfo">
          <span>Sofia</span>
          <p>Hello!</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="" 
        />
        <div className="userChatInfo">
          <span>Marcus</span>
          <p>Bye!</p>
        </div>
      </div>
    </div>
  )
}

export default Chats;