import React from 'react'
import './LoginT.css'

const LoginT = () => {
  return (
    <div className='loginT'>
      <div className='loginT_Content'>
        <div className='NewSing'>
            <h4>New Customer?</h4>
            <p className='singContent'>SingUp</p>
        </div>
      </div>
      <div className='loginT_Content'>
        <i className="fa-solid fa-user plusImgge"></i>
        My Profile
      </div>
      <div className='loginT_Content'>
        <img className='plusImgge' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' alt=''/>
        FlipkartPlus Zone
      </div>
      <div className='loginT_Content'>
        <i className="fa-sharp fa-solid fa-credit-card-blank plusImgge"></i>
        Orders
      </div>
      <div className='loginT_Content'>
        <i className="fa-solid fa-heart plusImgge"></i>
        Wishlist
      </div>
      <div className='loginT_Content'>
        <i className="fa-sharp fa-light fa-crate-empty plusImgge"></i>
        Rewards
      </div>
      <div className='loginT_Content'>
        <i className="fa-solid fa-gift-card plusImgge"></i>
        Gift Cards
      </div>
    </div>
  )
}

export default LoginT
