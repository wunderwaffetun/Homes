import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "./CarouselCard.css"

interface ICarouselCard {
    adminPanel: boolean,
    images: string[],
    OnSumbitSliderFiles: (e: React.FormEvent<HTMLFormElement>) => void
    deleteSlide: (i: number) => void
}

const CarouselCard: React.FC<ICarouselCard> = ({ adminPanel, images, OnSumbitSliderFiles, deleteSlide }) => {

  return (
    <div className='sliderOne'>
        {
        adminPanel ? 
            <div className='adminSlider'>
                <Carousel infiniteLoop={true} dynamicHeight={true} showThumbs={false}>
                    {images.map((item) => {
                        return (
                        <div className='slideOne'>
                            <img className='imgSlide' src={item} />
                        </div>
                        )
                    })}
                </Carousel>
            </div>
        :
            <div className='adminSlider'>
                <div className='slidesChange'>
                    {images.map((item, i) => {
                        return (
                        <div className='slideChange'>
                        {adminPanel ? <></> : <p onClick={() => deleteSlide(i)} className='deleteSlide'>x</p>}
                        {adminPanel ? <a className='LinkDocument' download={`doc${i}.png`} href={"/" + images[i]}><img key={i}  src={item} alt="" /></a> : <p className='LinkDocument'><img key={i} src={item} alt="" /></p>}
                        </div>
                        )
                    })}
                <form onSubmit={(e) => OnSumbitSliderFiles(e)}>
                <input
                  name="customFile"
                  multiple
                  type="file"
                />
                
              </form>    
                </div>
            </div>
          }
              
          
        </div>
  )
}

export default CarouselCard