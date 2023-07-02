import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import "tippy.js/themes/light.css"
import MoreT from '../moreT/moreT';
import LoginT from '../loginT/LoginT';

function Navbar() {
  return (
    <nav>
      <div className='navbarComponent'>
        <div className='navbarContent'>
            <div className='navbar'></div>
            <div className='allContent'>
                <div className="flipkartlogo">
                    <div className='flipImg'>
                        <Link to="/">
                            <img className='flipkartImg' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='flipkart'/>
                        </Link>
                        <div className='exploreLink'>
                            <Link to="/plus" className="exploreContent">
                                <p className='explorePara'>Explore</p>
                                <span className='plusContent'>
                                    Plus
                                </span>
                                <img className='plusImg' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' alt=''/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='searchContent'>
                    <div className='searchComponent'>
                        <div className='searchInput col-12-12'>
                            <div className='searchType'>
                                <input type='search' className='input'/>
                            </div>
                            <button type='submit' className='searchbutton'>
                                <i className="fa-solid fa-magnifying-glass searchIcon"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='buttonContent loginButton'>
                    <div className='loginContent'>
                        <div className='loginComponent'>
                            <Tippy theme='light' content={<LoginT></LoginT>} interactive={true}>
                                <Link to="/products" className="Login">Login</Link>
                            </Tippy>
                        </div>
                    </div>
                </div>
                <div className='buttonContent'>
                    <Link to="/about" className="becomeSeller">Become a Seller</Link>
                </div>
                <div className='buttonContent'>
                    <div className='moreComponent'>
                        <div className='moreContent'>
                            <div className='more'>
                                <Tippy theme='light' content={<MoreT></MoreT>} interactive={true}>
                                    <Link to="/contact" className="MorePara">More</Link>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttonContent'>
                    <div className='cartComponent'>
                        <div className='cartContent'>
                            <div className='cart'>
                                <i className="fa-solid fa-cart-shopping shopImg"></i>
                                <Link to="/contact" className="CartPara">Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
