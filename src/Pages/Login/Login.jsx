import React, { useContext, useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import Header2 from '../../Shared/Header2/Header2'
import { AuthContext } from '../../Providers/AuthProvider'
import { toast, ToastContainer } from 'react-toastify'

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState('');
  const {signIn, signUpWithGoogle, signUpWithFb, loading} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    setError('');
    signIn(email, password)
    .then(() =>{
      toast.success('You are logged in successfully');
      navigate(location?.state ? location.state : '/');
      e.target.reset();
    })
    .catch(err =>{
      setError(err.message);
    })
  }
  const handleGoogleSignUp = () =>{
    signUpWithGoogle()
    .then(()=>{
      navigate('/');
    })
    .catch(err =>{
      setError(err.message);
    })
  }
  const handleFbSignUp = () =>{
    signUpWithFb()
    .then(()=>{
      navigate('/');
    })
    .catch(err =>{
      setError(err.message);
    })
  }

  return (
    <div>
      <Header2></Header2>
      <div className="container m-auto p-2">
        <div className="p-5 border-2 lg:w-1/2 m-auto">
          <h3 className="text-2xl font-bold">Login</h3>
          <form onSubmit={handleSignIn} className="card-body pt-3 px-0 pb-0">
            <div className="form-control">
              <input name="email" type="text" placeholder="Username or Email" className="py-2 px-2 border-b focus:outline-0 placeholder:text-slate-700" required />
            </div>
            <div className="form-control border-b ">
              <div className="flex justify-between items-center">
                <input type={showPassword ? 'password' : 'text'} name="password" placeholder="Password" className="py-2 px-2 focus:outline-0 placeholder:text-slate-700 w-full" required />
                <div onClick={()=>setShowPassword(!showPassword)} className="flex justify-center items-center cursor-pointer">
                  {showPassword ? <IoMdEyeOff></IoMdEyeOff> : <IoMdEye></IoMdEye>}
                </div>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              {/* Remember me */}
              <div className='felx justify-start items-center'>
                <input className='mr-2' type="checkbox" name="check" id="" />
                <span>Remember me</span>
              </div>
              {/* Forgot password */}
              <div>
                <Link className='text-[#F9A51A]'>Forgot password?</Link>
              </div>
            </div>
            <div>
              <p className="text-orange-600">{error}</p>
            </div>
            <div className="mt-5">
              <input type="submit" value="Login" className="bg-[#F9A51A] w-full  py-2 text-black font-semibold cursor-pointer"/>
            </div>
            <div className="mt-3 text-center">
              <p>Don't have an account? <Link to="/signup" className="text-yellow-500">Create an account</Link></p>
            </div>
          </form>
        </div>
        <div className="p-5 lg:w-1/2 m-auto text-center">
          <div className="w-full mb-2">
            <p className="orselection relative">Or</p>
          </div>
          <div className="px-16">
            {/* Facebook */}
            <button onClick={handleFbSignUp} className="w-full">
              <div className="facebook mb-3 flex justify-start items-center border rounded-full p-2">
                <div className="bg-[#3076FF] w-8 h-7 flex justify-center items-center text-white rounded-full">
                  <FaFacebookF></FaFacebookF>
                </div>
                <div className="flex justify-center w-full">
                <span className="font-semibold">Continue with Facebook</span>
                </div>
              </div>
            </button>
            {/* Google */}
            <button onClick={handleGoogleSignUp} className="w-full">
              <div className="facebook flex justify-start items-center border rounded-full p-2">
                <div className="w-8 h-7 flex justify-center items-center">
                  <FcGoogle className="text-3xl"></FcGoogle>
                </div>
                <div className="flex justify-center w-full">
                <span className="font-semibold">Continue with Google</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login