import Header from '../../Shared/Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import coxs from '../../assets/images/sajek.png';
import sremongol from '../../assets/images/sreemongol.png';
import sundorbon from '../../assets/images/sundorbon.png';   
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <div className="bg-[url('../../assets/images/banner-1.png')] bg-center bg-cover h-[100vh] bg-no-repeat">
      <div className='w-full h-full bg-black bg-opacity-70'>
        <Header></Header>
        <div className="container h-[85%] m-auto lg:flex justify-center items-center">
          <div className='lg:w-2/5 px-5 py-8'>
            <h1 className="text-white lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-2xl mb-4 font-bold">COX'S BAZAR</h1>
            <p className='text-white mb-5 text-[15px]'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <button className='bg-yellow-500 text-black py-2 px-5 rounded-md'>Booking</button>
          </div>
          <div className='lg:w-3/5 px-5'>
            <Swiper className='w-full h-full' 
              spaceBetween={30}
              slidesPerView={3}
              zoom={true}
              loop={true}
              modules={[Pagination]}
              >
              <SwiperSlide className='w-full relative'>
                <Link to='/destination'>
                <img className='w-full rounded-2xl' src={coxs} alt="" />
                <div className='bg-black rounded-2xl absolute bottom-0 left-0 bg-opacity-50 h-full w-full'>
                  <h1 className='text-white text-2xl font-bold absolute bottom-5 left-2'>Cox's Bazar</h1>
                </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className='w-full relative'>
                <img className='w-full rounded-2xl' src={sremongol} alt="" />
                <div className='bg-black rounded-2xl absolute bottom-0 left-0 bg-opacity-50 h-full w-full'>
                  <h1 className='text-white text-2xl font-bold absolute bottom-5 left-2'>Sremongol</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full relative'>
                <img className='w-full rounded-2xl' src={sundorbon} alt="" />
                <div className='bg-black rounded-2xl absolute bottom-0 left-0 bg-opacity-50 h-full w-full'>
                  <h1 className='text-white text-2xl font-bold absolute bottom-5 left-2'>Sundorban</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full relative'>
                <img className='w-full rounded-2xl' src={coxs} alt="" />
                <div className='bg-black rounded-2xl absolute bottom-0 left-0 bg-opacity-50 h-full w-full'>
                  <h1 className='text-white text-2xl font-bold absolute bottom-5 left-2'>Cox's Bazar</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Home