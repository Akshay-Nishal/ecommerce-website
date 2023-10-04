import React from 'react'
import UICarousel from './Carousel'
import './Home.css'

const stores =[
  {location:'USA',storename:"Store 1"},
  {location:'USA',storename:"Store 2"},
  {location:'USA',storename:"Store 3"},
  {location:'USA',storename:"Store 4"}
]

export default function Home() {
  return (
    <div className='homePage'>
      <div className='homePageTop'>
        <div className='carouselDiv'>
          <UICarousel/>
        </div>
      </div>
      <div className='homePageBottom'>
        <center>
          <h2>Store Locations</h2>
          <div className='storeList'>
            {stores.map((store)=>{
              return(
                <div key={store.storename} className='storeItem'>
                  <span className='storeLocation'>{store.location}</span>
                  <span className='storeName'>{store.storename}</span>
                  <img src="https://imgs.search.brave.com/LFu4-Q7eoXvrR7COYKXY-gkWj2GpO9x7yXulmLpW0hw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvODU0Lzg1NDg3/OC5wbmc" alt="Location" />
                </div>
              )
            })}
          </div>
        </center>
      </div>
    </div>
  )
}
