import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import "tippy.js/themes/light.css"
import Fashion from '../../tippy/fashion/Fashion';
import Electronics from '../../tippy/electronics/Electronics';
import HomeT from '../../tippy/home';
import BeautyT from '../../tippy/beautymore/BeautyT';

const Home = () => {
  const [isFashionCursorPlaced, setIsFashionCursorPlaced] = useState(false);
  const [isElectronicsCursorPlaced, setIsElectronicsCursorPlaced] = useState(false);
  const [isHomeCursorPlaced, setIsHomeCursorPlaced] = useState(false);
  const [isBeautyCursorPlaced, setIsBeautyCursorPlaced] = useState(false);
  
  
  const handleFashionMouseEnter = () => {
    setIsFashionCursorPlaced(true);
  };

  const handleFashionMouseLeave = () => {
    setIsFashionCursorPlaced(false);
  };

  const handleElectronicsMouseEnter = () => {
    setIsElectronicsCursorPlaced(true);
  };

  const handleElectronicsMouseLeave = () => {
    setIsElectronicsCursorPlaced(false);
  };

  const handleHomeMouseEnter = () => {
    setIsHomeCursorPlaced(true);
  };

  const handleHomeMouseLeave = () => {
    setIsHomeCursorPlaced(false);
  };

  const handleBeautyMouseEnter = () => {
    setIsBeautyCursorPlaced(true);
  };

  const handleBeautyMouseLeave = () => {
    setIsBeautyCursorPlaced(false);
  };

   
  return(
    <div>
      <div className='homeComponent'>
        <div className='homeContent'>
          <div className='homeNav'>
            <div className='GroceryContent'>
              <div className='GroceryComponent'>
                <Link to="/grocery" className="linkGrocery">
                <div className='GroceryImg'>
                  <img className='groceryImage' src='https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' alt=''/>
                </div>
                <p className='groceryPara'>Grocery</p>
                </Link>
              </div>
              </div>
              <div className='GroceryContent'>
              <div className='GroceryComponent'>
                <Link to="/mobiles" className="linkGrocery">
                  <div className='GroceryImg'>
                    <img className='groceryImage' src='https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' alt=''/>
                  </div>
                  <p className='groceryPara'>Mobiles</p>
                </Link>
              </div>
              </div>
              <div className='GroceryContent'>
              <div className='GroceryComponent'>
                <div className='GroceryImg'>
                  <img className='groceryImage' src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100' alt=''/>
                </div>
                <div className='tippyImg' 
                  onMouseEnter={handleFashionMouseEnter}
                  onMouseLeave={handleFashionMouseLeave}
                >
                  <Tippy theme='light' content={<Fashion></Fashion>} interactive={true}>
                    <p className='groceryPara'>Fashion</p>
                  </Tippy>
                  {isFashionCursorPlaced ? (
                    <i className="fa-solid fa-angle-down"></i>
                    ) : (
                    <i className="fa-solid fa-angle-up"></i>
                    )}
                {isFashionCursorPlaced ? (
                    <i className="fa-solid fa-angle-up" style={{ display: 'none' }}></i>
                    ) : (
                    <i className="fa-solid fa-angle-down" style={{ display: 'none' }}></i>
                )}
                </div>
              </div>
              </div>
              <div className='GroceryContent'>
              <div className='GroceryComponent'>
                <div className='GroceryImg'>
                  <img className='groceryImage' src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' alt=''/>
                </div>
                <div className='tippyImg' 
                  onMouseEnter={handleElectronicsMouseEnter}
                  onMouseLeave={handleElectronicsMouseLeave}
                >
                  <Tippy theme='light' content={<Electronics></Electronics>} interactive={true}>
                    <p className='groceryPara'>Electronics</p>
                  </Tippy>
                  {isElectronicsCursorPlaced ? (
                    <i className="fa-solid fa-angle-down"></i>
                    ) : (
                    <i className="fa-solid fa-angle-up"></i>
                    )}
                {isElectronicsCursorPlaced ? (
                    <i className="fa-solid fa-angle-up" style={{ display: 'none' }}></i>
                    ) : (
                    <i className="fa-solid fa-angle-down" style={{ display: 'none' }}></i>
                )}
                </div>
              </div>
              </div>
              <div className='GroceryContent'>
              <div className='GroceryComponent'>
                <div className='GroceryImg'>
                  <img className='groceryImage' src='https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' alt=''/>
                </div>
                <div className='tippyImg'
                  onMouseEnter={handleHomeMouseEnter}
                  onMouseLeave={handleHomeMouseLeave}
                >
                  <Tippy theme='light' content={<HomeT></HomeT>} interactive={true}>
                    <p className='groceryPara'>Home</p>
                  </Tippy>
                  {isHomeCursorPlaced ? (
                    <i className="fa-solid fa-angle-down"></i>
                    ) : (
                    <i className="fa-solid fa-angle-up"></i>
                    )}
                {isHomeCursorPlaced ? (
                    <i className="fa-solid fa-angle-up" style={{ display: 'none' }}></i>
                    ) : (
                    <i className="fa-solid fa-angle-down" style={{ display: 'none' }}></i>
                )}
                </div>
              </div>
              </div>
              <div className='GroceryContent'>
              <div className='GroceryComponent'>
                <Link to="/appliences" className="linkGrocery">
                <div className='GroceryImg'>
                  <img className='groceryImage' src='https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' alt=''/>
                </div>
                <p className='groceryPara'>Appliences</p>
                </Link>
              </div>
              </div>
              <div className='GroceryContent'>
              <div className='GroceryComponent'>
                <Link to="/travel" className="linkGrocery">
                <div className='GroceryImg'>
                  <img className='groceryImage' src='https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' alt=''/>
                </div>
                <p className='groceryPara'>Travels</p>
                </Link>
              </div>
              </div>
              <div className='GroceryContent'>
              <div className='GroceryComponent'>
                <Link to="/topOffers" className="linkGrocery">
                <div className='GroceryImg'>
                  <img className='groceryImage' src='https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' alt=''/>
                </div>
                <p className='groceryPara'>Top Offers</p>
                </Link>
              </div>
              </div>
              <div className='GroceryContent'>
              <div className='GroceryComponent'>
                <div className='GroceryImg'>
                  <img className='groceryImage' src='https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' alt=''/>
                </div>
                <div className='tippyImg' 
                  onMouseEnter={handleBeautyMouseEnter}
                  onMouseLeave={handleBeautyMouseLeave}
                >
                  <Tippy theme='light' content={<BeautyT></BeautyT>} interactive={true}>
                    <p className='groceryPara'>Beauty , Toys & More</p>
                  </Tippy>
                  {isBeautyCursorPlaced ? (
                    <i className="fa-solid fa-angle-down"></i>
                    ) : (
                    <i className="fa-solid fa-angle-up"></i>
                    )}
                {isBeautyCursorPlaced ? (
                    <i className="fa-solid fa-angle-up" style={{ display: 'none' }}></i>
                    ) : (
                    <i className="fa-solid fa-angle-down" style={{ display: 'none' }}></i>
                )}
                </div>
              </div>
              </div>
              <div className='GroceryContent'>
            <div className='GroceryComponent'>
              <div className='GroceryImg'>
                <img className='groceryImage' src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' alt=''/>
              </div>
              <p className='groceryPara'>Two Whellers</p>
            </div>
              </div>
          </div>
        </div>
      </div>
      <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/f0775bb4ff9bde7a.jpeg?q=50" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/05cdea6dbe08c481.jpg?q=50" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/57ef8eea79cce781.jpg?q=50" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className='bodyContent'>
      <div className='bodyComponent'>
        <div className='bodyAll'>
          <div className='bestComponent'>
            <div className='bestContent'>
              <h2 className='bestofElectric'>Best Of Electronics</h2>
              <div className='viewAllContent'>
                <Link to="/BestOfElectronins" className="viewLink">View All</Link>
              </div>
            </div>
          </div>
          <div className='electronicDevices'>
            <div className='electDev'>
              <div className='productDevices'>
                <div className='devicesContent'>
                  <div className='devicesComponent'>
                    <div className='bestTrimmers'>
                      <Link to="/bestTrimmers" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Best or Trimmer</div>
                        <div className='trimmerPrice'>From ₹399</div>
                        <div className=''>realme, Mi, Philips &amp; more</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/printers" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Printers</div>
                        <div className='trimmerPrice'>From ₹1,649</div>
                        <div className=''>HP</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/bestshavers" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Best or Shavers</div>
                        <div className='trimmerPrice'>From ₹1,649</div>
                        <div className='productsName'>Philips & Havells</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/monitors" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/xif0q/monitor/k/s/l/ls24ag300nwxxl-full-hd-24-ls24ag300nwxxl-samsung-original-imagzs3tebgzcftg.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Monitors</div>
                        <div className='trimmerPrice'>From ₹9999</div>
                        <div className=''>Samsung</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/hairdryers" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Best of Hair Dryers</div>
                        <div className='trimmerPrice'>From ₹399</div>
                        <div className=''>realme, Mi, Philips &amp; more</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='bodyContent'>
      <div className='bodyComponent'>
        <div className='bodyAll'>
          <div className='bestComponent'>
            <div className='bestContent'>
              <h2 className='bestofElectric'>Beauty,Food, Toys & More</h2>
              <div className='viewAllContent'>
                <Link to="/BeautyFood&more" className="viewLink">View All</Link>
              </div>
            </div>
          </div>
          <div className='electronicDevices'>
            <div className='electDev'>
              <div className='productDevices'>
                <div className='devicesContent'>
                  <div className='devicesComponent'>
                    <div className='bestTrimmers'>
                      <Link to="/nongearedcycles" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Non-Geared Cycles</div>
                        <div className='trimmerPrice'>Upto 40% Off</div>
                        <div className=''>Hercules, Hero & More</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/gearedcycles" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Geared Cycles</div>
                        <div className='trimmerPrice'>From ₹3,999</div>
                        <div className=''>Leader, Cradiac &amp; more</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/bestTrimmers" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>String Instruments</div>
                        <div className='trimmerPrice'>Upto 70% Off</div>
                        <div className='productsName'>Guitars, Ukuleles &amp; More</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/bestTrimmers" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/krtjgcw0/microphone/x/h/j/3-5mm-clip-metal-microphone-for-voice-recording-lapel-mic-mobile-original-imag5gxrug6fcbct.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>MicroPhones</div>
                        <div className='trimmerPrice'>Upto 70% Off</div>
                        <div className=''>Explore Now</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/bestTrimmers" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/kc3p30w0/headphone/i/h/z/k52-akg-original-imaftb5hptnuajfu.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Studio HeadPhones</div>
                        <div className='trimmerPrice'>Upto 80% Off</div>
                        <div className=''>Explore Now</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='bodyContent'>
      <div className='bodyComponent'>
        <div className='bodyAll'>
          <div className='bestComponent'>
            <div className='bestContent'>
              <h2 className='bestofElectric'>Sports, HealthCare & More</h2>
              <div className='viewAllContent'>
                <Link to="/BeautyFood&more" className="viewLink">View All</Link>
              </div>
            </div>
          </div>
          <div className='electronicDevices'>
            <div className='electDev'>
              <div className='productDevices'>
                <div className='devicesContent'>
                  <div className='devicesComponent'>
                    <div className='bestTrimmers'>
                      <Link to="/foodspreads" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Food Spreads</div>
                        <div className='trimmerPrice'>Upto 75% Off</div>
                        <div className=''>Myfiness,Alpino &amp; More</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/gymessentials" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Gym Essentials</div>
                        <div className='trimmerPrice'>From ₹139</div>
                        <div className=''>Shop Now</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/dryfruits" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Dry Fruits</div>
                        <div className='trimmerPrice'>Upto 75% Off</div>
                        <div className='productsName'>Happilo, Farmley &amp; More</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/helmets" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/kz5vwy80/helmet/o/4/k/-original-imagb8azfdthjhqr.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Rider Helmets</div>
                        <div className='trimmerPrice'>From 699</div>
                        <div className=''>Vega, Steelbird, HRX and More</div>
                      </Link>
                    </div>
                    <div className='bestTrimmers'>
                      <Link to="/coffepowders" className="trimmerLink">
                        <div className='trimmerImg'>
                          <img className='trimmerImage' src='https://rukminim1.flixcart.com/image/200/200/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=70' alt=''/>
                        </div>
                        <div className='trimmerPara'>Coffee Powder</div>
                        <div className='trimmerPrice'>Upto 80% Off</div>
                        <div className=''>Nescafe, Continental &amp; More</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home;
