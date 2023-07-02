import React, { useState } from 'react'
import './index.css'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import "tippy.js/themes/light.css"
import ViewElectronics from '../../tippy/viewElectronics/ViewElectronics';
import TvAppliences from '../../tippy/tvappliences/TvAppliences';
import MenTippy from '../../tippy/menTippy/MenTippy';
import WomenTippy from '../../tippy/womentippy/WomenTippy';
import AllProductsSection from '../allProductsSection/AllProductsSection';



const Mobile = props => {
    const [isCursorPlaced, setIsCursorPlaced] = useState(false);
    const [isAppliancesCursorPlaced, setIsAppliancesCursorPlaced] = useState(false);
    const [isMenCursorPlaced, setIsMenCursorPlaced] = useState(false);
    const [isWoMenCursorPlaced, setIsWoMenCursorPlaced] = useState(false);

  const handleMouseEnter = () => {
    setIsCursorPlaced(true);
  };

  const handleMouseLeave = () => {
    setIsCursorPlaced(false);
  };

  const handleAppliancesMouseEnter = () => {
    setIsAppliancesCursorPlaced(true);
  };

  const handleAppliancesMouseLeave = () => {
    setIsAppliancesCursorPlaced(false);
  };
  
  const handleMenMouseEnter = () => {
    setIsMenCursorPlaced(true);
  };

  const handlemenMouseLeave = () => {
    setIsMenCursorPlaced(false);
  };

  const handleWoMenMouseEnter = () => {
    setIsWoMenCursorPlaced(true);
  };

  const handleWomenMouseLeave = () => {
    setIsWoMenCursorPlaced(false);
  };


  return (
    <div className='allelectronicsNav'>
      <div className='viewAllelectronics'>
        <div className='viewElecContent'>
            <div
              className='elecarrow'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
            <Tippy theme='light' content={<ViewElectronics />} interactive={true} className='tippy'>
              <div className='Viewelectronic'>
                Electronics
              </div>
            </Tippy>
            {isCursorPlaced ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
            </div>
            <div className='elecarrow' 
                onMouseEnter={handleAppliancesMouseEnter}
                onMouseLeave={handleAppliancesMouseLeave}
            >
                <Tippy theme='light' content={<TvAppliences></TvAppliences>} interactive={true}>
                    <div className='Viewelectronic'>
                        Tv's&Appliences
                    </div>
                </Tippy>
                {isAppliancesCursorPlaced ? (
                    <i className="fa-solid fa-angle-down"></i>
                    ) : (
                    <i className="fa-solid fa-angle-up"></i>
                    )}
                {isAppliancesCursorPlaced ? (
                    <i className="fa-solid fa-angle-up" style={{ display: 'none' }}></i>
                    ) : (
                    <i className="fa-solid fa-angle-down" style={{ display: 'none' }}></i>
                )}
            </div>
            <div className='elecarrow' 
                onMouseEnter={handleMenMouseEnter}
                onMouseLeave={handlemenMouseLeave}
            >
                <Tippy theme='light' content={<MenTippy></MenTippy>} interactive={true}>
                    <div className='Viewelectronic'>
                        Men
                    </div>
                </Tippy>
                {isMenCursorPlaced ? (
                    <i className="fa-solid fa-angle-down"></i>
                    ) : (
                    <i className="fa-solid fa-angle-up"></i>
                    )}
                {isMenCursorPlaced ? (
                    <i className="fa-solid fa-angle-up" style={{ display: 'none' }}></i>
                    ) : (
                    <i className="fa-solid fa-angle-down" style={{ display: 'none' }}></i>
                )}
            </div>
            <div className='Viewelectronic' 
                onMouseEnter={handleWoMenMouseEnter}
                onMouseLeave={handleWomenMouseLeave}
            >
                <Tippy theme='light' content={<WomenTippy></WomenTippy>} interactive={true}>
                    <div className='Viewelectronic'>
                        WoMen
                    </div>
                </Tippy>
                {isWoMenCursorPlaced ? (
                    <i className="fa-solid fa-angle-down"></i>
                    ) : (
                    <i className="fa-solid fa-angle-up"></i>
                    )}
                {isWoMenCursorPlaced ? (
                    <i className="fa-solid fa-angle-up" style={{ display: 'none' }}></i>
                    ) : (
                    <i className="fa-solid fa-angle-down" style={{ display: 'none' }}></i>
                )}
            </div>
            <div className='Viewelectronic'>
                Baby & Kids
            </div>
            <div className='Viewelectronic'>
                Home & Furniture
            </div>
            <div className='Viewelectronic'>
                Sports, Books & More
            </div>
        </div>
      </div>
      <div className='mobileContentPage'>
        <div className='mobileComponentPage'>
            <h1 className='mobilephones'>Mobile Phones</h1>
            <div className='mobilephonespara'>
                <div className='mobileContentPara'>
                    <p>Mobile phones are no more merely a part of our lives. 
                        Whether it's to stay connected with friends and family or to keep abreast of important developments around the world, 
                        mobiles are no longer for sending a text or making a call. From budget to state-of-the-art smartphones; indigenous names 
                        to global big-wigs - a whole universe of mobiles await you on Flipkart. Whether you’re looking for waterdrop notch screens, 
                        a high screen to body ratio, AI-powered sensational cameras, high storage capacity, blazing quick processing engines or reflective 
                        glass designs, rest assured you won’t have to venture anywhere else for your smartphone&nbsp;
                    </p>
                    <div className='mobileTcontent'>
                        <p>vivo T1X</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p>OPPO Reno 8 Pro 5G</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p>OPPO Reno7 Pro 5G</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p>OPPO Reno7 5G</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p>iPhone 13 Mini</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p>iPhone 12</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p>OPPO Find N2 Flip</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p>iphone 14</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p>Infinix Smart 7 HD</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p>Pixel 7a</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p>POCO F5</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p>Moto Edge 40</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div>
        <AllProductsSection />
      </div>
    </div>
    
  )
}

export default Mobile
