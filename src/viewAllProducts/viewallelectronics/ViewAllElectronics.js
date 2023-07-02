import React, { useState } from 'react'
import './index.css'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import "tippy.js/themes/light.css"
import ViewElectronics from '../../tippy/viewElectronics/ViewElectronics';
import TvAppliences from '../../tippy/tvappliences/TvAppliences';
import MenTippy from '../../tippy/menTippy/MenTippy';
import WomenTippy from '../../tippy/womentippy/WomenTippy';

const ViewAllElectronics = () => {
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
      <div className='viewElecBody'>
            <div className='viewAllComponent col-12-12'>
                <div className='electronicBody'>
                    <div className='bestOfElectContent'>
                        <div className='BestOfElectronicsContent'>Best of Electronics</div>
                        <div className='twentyItemProducts'>20 Items</div>
                    </div>
                </div>
            </div>
      </div>
      <div className='bodyProductsContent'>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Printers</div>
                    <div className='PrintersPrice'>From ₹3999</div>
                    <div className='PrintersCompany'>HP</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Top Mirrorless Cameras</div>
                    <div className='PrintersPrice'>Shop Now!</div>
                    <div className='PrintersCompany'>Canon, Sony</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Best Of Trimmers</div>
                    <div className='PrintersPrice'>From ₹399</div>
                    <div className='PrintersCompany'>Realme, Mi, Philips & More</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/xif0q/power-bank/j/i/v/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagn22tuac3hqnz.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Premium Power Banks</div>
                    <div className='PrintersPrice'>Shop Now</div>
                    <div className='PrintersCompany'>Mi, Realme & More</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Best of Shavers</div>
                    <div className='PrintersPrice'>From ₹1,649</div>
                    <div className='PrintersCompany'>Philips & Havells</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/kkh6zrk0/monitor/p/w/q/xl2546k-xl2546k-benq-original-imafzthb6ztpfjr8.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>BenQ Monitors</div>
                    <div className='PrintersPrice'>From ₹9990</div>
                    <div className='PrintersCompany'>Top Rated</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Projectors</div>
                    <div className='PrintersPrice'>From ₹9999</div>
                    <div className='PrintersCompany'>Zebronics</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/xif0q/monitor/v/i/j/-original-imagn6h2gfmkm774.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Monitors</div>
                    <div className='PrintersPrice'>From ₹9999</div>
                    <div className='PrintersCompany'>Samsung</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Monitors</div>
                    <div className='PrintersPrice'>From ₹8,279</div>
                    <div className='PrintersCompany'>Dell</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/k4a7c7k0/printer/y/j/z/canon-e3370-original-imafn2wyyxjjvzd6.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Printes</div>
                    <div className='PrintersPrice'>From ₹2336</div>
                    <div className='PrintersCompany'>Canon</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Monitors</div>
                    <div className='PrintersPrice'>From ₹6,499</div>
                    <div className='PrintersCompany'>acer</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Best Hair Dryers</div>
                    <div className='PrintersPrice'>From 549</div>
                    <div className='PrintersCompany'>Realme,Philips & more</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/xif0q/printer/r/c/4/dcp-t420w-all-in-one-system-with-built-in-wireless-technology-original-imagpmfpz4e764gw.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Printers</div>
                    <div className='PrintersPrice'>From ₹10190</div>
                    <div className='PrintersCompany'>Brother</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/xif0q/projector/q/r/2/k9-pro-max-android-full-hd-4k-support-android-9-0-4d-keystone-original-imagam4xntyzkk8g.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Projector</div>
                    <div className='PrintersPrice'>From ₹3999</div>
                    <div className='PrintersCompany'>Egate</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/jwzabgw0/trimmer/y/4/r/sensitive-touch-expert-veet-original-imafhjh5ah7vf9zc.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Best of Women Trimmers</div>
                    <div className='PrintersPrice'>From ₹599</div>
                    <div className='PrintersCompany'>Veet,Braun,Phillips, & more</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/kkbh8cw0/printer/a/n/j/m1180-epson-original-imafzp7wchxj5qhh.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Printers</div>
                    <div className='PrintersPrice'>From ₹10999</div>
                    <div className='PrintersCompany'>Epson</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/xif0q/monitor/h/8/n/proart-display-pa247cv-professional-full-hd-23-8-90lm03y1-b01310-original-imagg9nc8nv8qb88.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Ausus Monitors</div>
                    <div className='PrintersPrice'>From ₹14999</div>
                    <div className='PrintersCompany'>Top Rated</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/kp4difk0/hair-straightener/w/u/r/bhs397-40-philips-original-imag3ffu6tzr5j39.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Best Hair Straighteners</div>
                    <div className='PrintersPrice'>From ₹3999</div>
                    <div className='PrintersCompany'>HP</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/kt39jm80/monitor/2/l/x/td2423-full-hd-23-6-vs18312-viewsonic-original-imag6gde2zycnqty.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>View Sonic Monitors</div>
                    <div className='PrintersPrice'>From ₹8000</div>
                    <div className='PrintersCompany'>Top Rated</div>
                </div>
            </div>
            <div className='AllProductsComponent'>
                <div className='ViewAllPrintersContent'>
                    <div className='printersImagesContent'>
                    <img className='printImage' src='https://rukminim1.flixcart.com/image/200/200/kltryq80/monitor/f/q/u/thinkvision-e22-20-21-5-62a4mat4eu-lenovo-original-imagyv94zkgg4mf6.jpeg?q=70' alt=''/>
                    </div>
                    <div className='PrintersContet'>Monitors</div>
                    <div className='PrintersPrice'>From ₹7949</div>
                    <div className='PrintersCompany'>Lenovo</div>
                </div>
            </div>
      </div>
    </div>
    
  )
}

export default ViewAllElectronics
