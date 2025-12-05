import React from 'react';
import { useNavigate } from 'react-router-dom';

import smallcaseLogo from '../../assets/products/smallcaseLogo.png';
import streakLogo from '../../assets/products/streakLogo.png';
import sensibullLogo from '../../assets/products/sensibullLogo.svg';
import zerodhaFundhouse from '../../assets/products/zerodhaFundhouse.png';
import goldenpiLogo from '../../assets/products/goldenpiLogo.png';
import dittoLogo from '../../assets/products/dittoLogo.png';

export default function Universe() {

  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src={smallcaseLogo} className='mb-1'/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={streakLogo} style={{width: "170px"}}/>
          <p className="text-small text-muted">Algo &amp; strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={sensibullLogo} style={{width: "200px"}} className='my-3'/>
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={zerodhaFundhouse} style={{width: "200px"}} className='mb-1'/>
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={goldenpiLogo} style={{width: "200px"}} className='mb-1'/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={dittoLogo} style={{width: "140px"}} className='mb-1'/>
          <p className="text-small text-muted">Instructions</p>
        </div>
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
