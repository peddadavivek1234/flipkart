import React from 'react'
import './index.css'

const AllProductsContent = props => {
  const {productData} = props
  const {name,latestPrice,ratings,reviews} = productData
  return (
    <div className='imagesPosters'>
      <div className='firstImage'>
        <div className='imageFirst'>
            <div className='imagePost imagePostDup'>
                <img className='image' src='https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/6de302d092601491.jpg?q=50' alt=''/>
            </div>
        </div>
      </div>
      <div className='firstImage'>
        <div className='imageFirst'>
            <div className='imagePost imagePostDup'>
            <img className='image' src='https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/c6125ff768d1de7d.jpg?q=50' alt=''/>
            </div>
        </div>
      </div>
      <div className='firstImage'>
        <div className='imageFirst'>
            <div className='imagePost imagePostDup'>
            <img className='image' src='https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/45b9b99744a7b730.jpg?q=50' alt=''/>
            </div>
        </div>
      </div>
      <div className='firstImage'>
        <div className='imageFirst'>
            <div className='imagePost imagePostDup'>
            <img className='image' src='https://rukminim1.flixcart.com/fk-p-flap/844/140/image/c053532ffad05a8c.jpg?q=50' alt=''/>
            </div>
        </div>
      </div>
      <div className='firstImage'>
        <div className='imageFirst'>
            <div className='imagePost imagePostDup'>
            <img className='image' src='https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/e6c156775776a743.jpg?q=50' alt=''/>
            </div>
        </div>
      </div>
      <div className='firstImage'>
        <div className='imageFirst'>
            <div className='imagePost imagePostDup'>
            <img className='image' src='https://rukminim1.flixcart.com/flap/2000/2000/image/2c5966b93dac7f7e.jpg?q=50' alt=''/>
            </div>
        </div>
      </div>
      <div className='firstImage'>
        <div className='imageFirst'>
            <div className='imagePost imagePostDup'>
            <img className='image' src='https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/6431abdaa61d9317.jpg?q=50' alt=''/>
            </div>
        </div>
      </div>
      <div className='firstImage'>
        <div className='imageFirst'>
            <div className='imagePost imagePostDup'>
            <img className='image' src='https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c111540165983191.jpg?q=50' alt=''/>
            </div>
        </div>
      </div>
      <div>
        <img className='image' src='https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/85ac8f8191364ea0.jpg?q=50' alt=''/>
      </div>
      <div>
        <li>
          <h1>{name}</h1>
          <p>{latestPrice}</p>
          <p>{ratings}</p>
          <p>{reviews}</p>
        </li>
      </div>
    </div>
  )
}

export default AllProductsContent
