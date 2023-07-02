import React from 'react'
import './moreT.css'

const MoreT = () => {
  return (
    <div className='moretComponent'>
      <div className='motrTcontent'>
        <i class="fa-solid fa-bell"></i>
        <p className='paraContent'>Notification Preferences</p>
      </div>
      <div className='motrTcontent'>
        <i class="fa-regular fa-circle-question"></i>
        <p className='paraContent'>24x7 CustomerCare</p>
      </div>
      <div className='motrTcontent'>
        <i class="fa-solid fa-arrow-trend-up"></i>
        <p className='paraContent'>Advertise</p>
      </div>
      <div className='motrTcontent'>
        <i class="fa-solid fa-download"></i>
        <p className='paraContent'>Download</p>
      </div>
    </div>
  )
}

export default MoreT
