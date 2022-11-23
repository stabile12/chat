import React from 'react'

const Search = () => {
  return(
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Buscar contatos' />
      </div>
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search;
