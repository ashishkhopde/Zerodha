import React from 'react';
import { useNavigate } from 'react-router-dom';

import homeHero from '../../assets/home/homeHero.png';

export default function Hero() {

  const navigate = useNavigate();

  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src={homeHero} alt="Hero Image" className='mt-5' />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={()=>{navigate('/signup'); scrollTo(0,0)}}
        >
          Signup Now
        </button>
      </div>
    </div>
  )
}
