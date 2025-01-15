import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Header2 = () => {
  const {user, logOut, loading} = useContext(AuthContext);
  
  const handleLogOut = () =>{
    logOut()
    .then(() =>{
      if(loading){
        return <span className="loading loading-ring loading-lg"></span>
      }
    })
    .catch()
  }
  const navLinks = <>
    <li><NavLink to='/news' className=''>News</NavLink></li>
    <li><NavLink to='/destination' className="">Destination</NavLink></li>
    <li><NavLink to='/blog' className=''>Blog</NavLink></li>
    <li><NavLink to='/contact' className="">Contact</NavLink></li>
    {
      user ? <div className="flex justify-between items-center">
        <Link className="mr-2 font-bold">{user.displayName}</Link>
        <button onClick={handleLogOut} className="bg-black rounded-md hover:bg-slate-700 text-white px-3 py-2 font-semibold">Log out</button>
      </div> : <li><Link to='/login' className="text-black bg-yellow-500 hover:bg-yellow-400">Login</Link></li>
    }
  </>
  return (
  <div className="container m-auto mb-12">
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-80 p-5 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">{navLinks}</ul>
      </div>
    </div>
    <ToastContainer></ToastContainer>
  </div>
  )
}

export default Header2