import { Link } from "react-router-dom"
import logo from '../../assets/images/frame.png';
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
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
    <li><Link to='/news' className='text-white'>News</Link></li>
    <li><Link to='/destination' className="text-white">Destination</Link></li>
    <li><Link to='/blog' className='text-white'>Blog</Link></li>
    <li><Link to='/contact' className="text-white">Contact</Link></li>
    {
      user ? <div className="flex justify-between items-center">
        <Link className="mr-2 font-bold text-white hover:text-gray-300">{user.displayName}</Link>
        <button onClick={handleLogOut} className="bg-black rounded-md hover:bg-slate-800 text-white px-3 py-2 font-semibold">Log out</button>
      </div> : <li><Link to='/login' className="text-black bg-yellow-500 hover:bg-yellow-400">Login</Link></li>
    }  </>
  return (
    <div className="container m-auto">
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black bg-opacity-95 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="w-20" src={logo} alt="" />
          </Link>
        </div>
        {/* Search button */}
        <div className="navbar-end">
          <div className="form-control">
            <div className="flex justify-between items-center input  bg-white bg-opacity-40 border-1 border-white h-9">
              <CiSearch className="text-white font-bold mr-2"></CiSearch>
              <input type="text" placeholder="Search your destination ..." className="w-24 md:w-auto placeholder-white text-white" />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {navLinks}
          </ul>
        </div>        
      </div>
    </div>
  )
}

export default Header