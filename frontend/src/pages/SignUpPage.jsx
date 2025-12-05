import React from 'react';

import signup from '../assets/signup/signup.png'

export default function SignUpPage() {
  return (
    <div className='container'>
      <div className='row m-5 p-5'>
        <div className="col-6">
          <img src={signup} alt="" width={500}/>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <h1>Signup now</h1>
          <p className='text-muted'>Or track your existing application</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "90%",
              border: "2px solid #eaeef9",
              height: "45px",
              overflow: "hidden",
              borderRadius: "3px"
            }}
          >
            <p
              style={{
                backgroundColor: "#eaeef2",
                width: "60px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 0,
                fontSize: "1.1rem",
              }}
            >
              +91
            </p>

            <input
              type="text"
              placeholder="Mobile Number"
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                height: "100%",
                paddingLeft: "10px",
                fontSize: "1rem",
              }}
              maxLength={10}
            />
          </div>
          <p className='text-muted mt-3' style={{fontSize: "0.8em"}}>You will recive an OTP on your number</p>
          <button
          className="p-2 btn btn-primary fs-5 mb-3"
          style={{ width: "40%", margin: "0 auto" }}
        >
          Continue
        </button>
        <div><a href="" className='fs-6' style={{textDecoration: "none"}}>Want to open an NRI account</a></div>
        </div>
      </div>

      <div className='text-center mx-2'>
        <p className='text-muted'>By submiting your contact details, you authorize Zerodha to contact even if you are registered on DND &amp; conduct online KYC for trading &amp; demat account opening as KRA regulations and PMLA guidelines. To learn about the details we collect when you sign up with Zerodha, visit our support article.</p>

        <p className='text-muted'>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here</p>
      </div>
    </div>
  )
}
