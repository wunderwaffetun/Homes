import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import FileUpload from '../../component/FileUpload/FileUpload';

import "./CarouselCard.css"


interface ICarouselCard {
    adminPanel: boolean,
    images: File[],
    OnSumbitSliderFiles: (e: React.FormEvent<HTMLFormElement>) => void
    deleteSlide: (i: number) => void,
    setImages: (e: File[]) => void
}

const CarouselCard: React.FC<ICarouselCard> = ({ adminPanel, images, OnSumbitSliderFiles, deleteSlide, setImages }) => {

  return (
    <div className='sliderOne'>
        {
        adminPanel ? 
            <div className='adminSlider'>
                <Carousel infiniteLoop={true} dynamicHeight={true} showThumbs={false}>
                    {images.map((item) => {
                        return (
                        <div className='slideOne'>
                            <img className='imgSlide' src={URL.createObjectURL(item)} />
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
                        {adminPanel ? <a className='LinkDocument' download={`doc${i}.png`} href={"/" + images[i]}><img key={i}  src={URL.createObjectURL(item)} alt="" /></a> : <p className='LinkDocument'><img key={i} src={URL.createObjectURL(item)} alt="" /></p>}
                        </div>
                        )
                    })}
                <form className='centerForm' onSubmit={(e) => OnSumbitSliderFiles(e)}>
                    <FileUpload files={images} setFiles={setImages} />
                </form>    
                </div>
            </div>
          }
              
          
        </div>
  )
}

export default CarouselCard