const Navbar = () => {
  return(
    <div className='navbar'>
      <span className='logo'>Spot</span>
      <div className='user'>
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <span>Joao</span>
        <button>Logout</button>
      </div>
    </div>
  )
};

export default Navbar;