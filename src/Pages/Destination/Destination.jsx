import React, { useState } from 'react'
import Header from '../../Shared/Header/Header'
import DatePicker from 'react-datepicker'
import { FaRegCalendar } from 'react-icons/fa'
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from 'react-icons/ci';


const Destination = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="bg-[url('../../assets/images/banner-1.png')] bg-center bg-cover h-[100vh] bg-no-repeat">
      <div className='w-full h-full bg-black bg-opacity-70'>
        <Header></Header>
        <div className="container h-[85%] m-auto lg:flex justify-between items-center">
          <div className='lg:w-1/2 px-5 py-8'>
            <h1 className="text-white lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-2xl mb-4 font-bold">COX'S BAZAR</h1>
            <p className='text-white mb-5 text-[15px]'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            <button className='bg-yellow-500 text-black py-2 px-5 rounded-md'>Booking</button>
          </div>
        <div className='lg:w-1/2 px-5 lg:py-8'>
          <div className="rounded-lg bg-base-100 w-full lg:float-right md:m-auto sm:m-auto max-sm:m-auto max-w-sm shrink-0 shadow-2xl">
            <form className="card-body p-5">
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Origin</span>
              </label>
              <input type="text" placeholder="Type your origin" className="py-2 px-2 rounded-md bg-slate-300" required />
              </div>
              <div className="form-control">
                <label className="label">
                    <span className="label-text">Destination</span>
                </label>
                <input type="text" placeholder="Type your destination" className="py-2 px-2 rounded-md bg-slate-300" required />
              </div>
              <div className='flex gap-2'>
                <div className="form-control w-1/2">
                  <label className="label">
                      <span className="label-text">From</span>
                  </label>
                  <div className='flex justify-between items-center py-2 px-2 rounded-md bg-slate-300'>
                    <DatePicker selected={startDate} onChange={(date) =>setStartDate(date)} className='w-full bg-transparent focus:outline-none'></DatePicker>
                    <CiCalendar className='w-10'></CiCalendar>
                  </div>
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                      <span className="label-text">To</span>
                  </label>
                  <div className='flex justify-between items-center py-2 px-2 rounded-md bg-slate-300'>
                    <DatePicker selected={endDate} onChange={(date) =>setEndDate(date)} className='w-full bg-transparent focus:outline-none'></DatePicker>
                    <CiCalendar className='w-10'></CiCalendar>
                  </div>
                </div>
              </div>
              <div className="form-control mt-3">
              <button className="btn bg-yellow-600 text-black hover:bg-yellow-400">Start booking</button>
              </div>
            </form>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Destination