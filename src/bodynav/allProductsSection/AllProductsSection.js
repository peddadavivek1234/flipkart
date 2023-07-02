import React from 'react';
import './index.css'
import AllProductsContent from '../allProductsContent/AllProductsContent';


const AllProductsSection = () => {
  
  return (
      <div className='allProductsSection'>
        <div className='productSection'>
        <div className='AllProducts'>
          <section className='filterSection'>
            <div className='filterContent'>
              <div className='filterComponent'>
                <span>Filters</span>
              </div>
            </div>
          </section>
          <div className='categoriesList'>
            <div className='CategoriesListContent'>
              <div className='CategoriesListComponent'>
                CATEGORIES
              </div>
              <div className='mobilesAndCategories'>
                <div className='mobileCategoriesCon'>
                  Mobiles & Accessories
                </div>
              </div>
            </div>
          </div>
          <div className='priceContent'>
            <div className='allPriceContent'>
              <div className='priceComponent'>
                <span>Price</span>
              </div>
            </div>
          </div>
          <div className='minToMax'>
            <div className='minPrice'>
              <select className='selectCategory'>
                <option className='Min'>Min</option>
                <option className='Min'>₹10000</option>
                <option className='Min'>₹15000</option>
                <option className='Min'>₹20000</option>
                <option className='Min'>₹30000</option>
              </select>
              <i className="fa-solid fa-caret-down downArrow"></i>
            </div>
            <div className='To'>to</div>
            <div className='Max'>
              <select className='selectCategory'>
                <option className='Max'>₹20000</option>
                <option className='Max'>₹30000</option>
                <option className='Max'>₹30000+</option>
              </select>
              <i className="fa-solid fa-caret-down downArrow"></i>
            </div>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Brand
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div>
                  <p>SAMSUNG</p>
                </div>
              </div>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div>
                  <p>APPLE</p>
                </div>
              </div>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div>
                  <p>realme</p>
                </div>
              </div>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div>
                  <p>POCO</p>
                </div>
              </div>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div>
                  <p>Infinix</p>
                </div>
              </div>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div>
                  <p>OPPO</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  CUSTOMER RATINGS
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  4★ & above
                </div>
              </div>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  3★ & above
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  GST INVOICE AVAILABLE
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  GST Invoice Available
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  RAM
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  4 GB
                </div>
              </div>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  3 GB
                </div>
              </div>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  2 GB
                </div>
              </div>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  8 GB and Above
                </div>
              </div>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  6 GB
                </div>
              </div>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  1 GB and Below
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  INTERNAL STORAGE
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  256 GB & Above
                </div>
              </div>
              <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  128 - 255.9 GB
                </div>
              </div>
              <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  64 - 127.9GB
                </div>
              </div>
              <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  32 - 63.9 GB
                </div>
              </div>
              <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  8 - 15.9 GB
                </div>
              </div>
              <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  4 - 7.9 GB
                </div>
              </div>
              <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  1 - 1.9 GB
                </div>
              </div>
              <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Less than 1 GB
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  BATTERY CAPACITY
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  1000 - 1999 mAh
                </div>
              </div>
              <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  2000 - 2999 mAh
                </div>
              </div>
              <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  1000 - 1999 mAh
                </div>
              </div>
              <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  1000 - 1999 mAh
                </div>
              </div>
              <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  1000 - 1999 mAh
                </div>
              </div>
              <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  1000 - 1999 mAh
                </div>
              </div>
              <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  1000 - 1999 mAh
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                  SCREEN SIZE
                </button>
              </h2>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  5.7 - 5.9 inch
                </div>
              </div>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  5.4 - 5.6 inch
                </div>
              </div>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  5.2 - 5.4 inch
                </div>
              </div>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  5 - 5.1 inch
                </div>
              </div>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  4.5 - 4.9 inch
                </div>
              </div>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  4 - 4.4 inch
                </div>
              </div>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  5.7 - 5.9 inch
                </div>
              </div>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  3.5 - 3.9 inch
                </div>
              </div>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  3 - 3.4 inch
                </div>
              </div>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Less than 3 inch
                </div>
              </div>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  6.4 inch & inch
                </div>
              </div>
              <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  6 - 6.3 inch
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                  PRIMARY CAMERA
                </button>
              </h2>
              <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  5 - 7.9 MP
                </div>
              </div>
              <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Below 5 MP
                </div>
              </div>
              <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  8 - 11.9 MP
                </div>
              </div>
              <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  12 - 15.9 MP
                </div>
              </div>
              <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  16 - 20.9 MP
                </div>
              </div>
              <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  21 - 31.9 MP
                </div>
              </div>
              <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  32 - 47.9 MP
                </div>
              </div>
              <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  48 - 63.9 MP
                </div>
              </div>
              <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  64 MP & Above
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEignt" aria-expanded="false" aria-controls="collapseEignt">
                  SECONDARY CAMERA
                </button>
              </h2>
              <div id="collapseEignt" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  12 - 15.9 MP
                </div>
              </div>
              <div id="collapseEignt" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  16 - 20.9 MP
                </div>
              </div>
              <div id="collapseEignt" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  21 MP & Above
                </div>
              </div>
              <div id="collapseEignt" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  5 - 7.9 MP
                </div>
              </div>
              <div id="collapseEignt" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  8 - 11.9 MP
                </div>
              </div>
              <div id="collapseEignt" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Below 5 MP
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  PROCESSOR BRAND
                </button>
              </h2>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  AMD
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Apple
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  ARM
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Exynos
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Google
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  HiSilicon
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Huawei
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Intel
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Mediatek
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  RDA
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Snapdragon
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Spreadtrum
                </div>
              </div>
              <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Unisoc
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                  SPECIALITY
                </button>
              </h2>
              <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Big Storage
                </div>
              </div>
              <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Higher Performance
                </div>
              </div>
              <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Long-Lasting Battery
                </div>
              </div>
              <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Selfie Camera
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                  Resolution Type
                </button>
              </h2>
              <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Full HD
                </div>
              </div>
              <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Full HD+
                </div>
              </div>
              <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Full HD+ AMOLED Display
                </div>
              </div>
              <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Full HD+ E3 Super AMOLED Display
                </div>
              </div>
              <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Full HD+
                </div>
              </div>
              <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Full HD+
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <AllProductsContent />
        
      </div>  
  );
};

export default AllProductsSection;
