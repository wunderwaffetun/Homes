import React from 'react'
import "./Card.css"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Modal from '../../component/Modal/Modal.tsx';

const images=[
  'https://picsum.photos/250/250?image=0',
  'https://picsum.photos/250/250?image=1',
  'https://picsum.photos/250/250?image=2',
  'https://picsum.photos/250/250?image=3',
  'https://picsum.photos/250/250?image=4',
  'https://picsum.photos/250/250?image=0',
  'https://picsum.photos/250/250?image=1',
  'https://picsum.photos/250/250?image=2',
  'https://picsum.photos/250/250?image=3',
  'https://picsum.photos/250/250?image=4',
  'https://picsum.photos/250/250?image=0',
  'https://picsum.photos/250/250?image=1',
  'https://picsum.photos/250/250?image=2',
  'https://picsum.photos/250/250?image=3',
  'https://picsum.photos/250/250?image=4',
  'https://picsum.photos/250/250?image=0',
  'https://picsum.photos/250/250?image=1',
  'https://picsum.photos/250/250?image=2',
  'https://picsum.photos/250/250?image=3',
  'https://picsum.photos/250/250?image=4',
  'https://picsum.photos/250/250?image=2',
  'https://picsum.photos/250/250?image=3',
  'https://picsum.photos/250/250?image=4',
  'https://picsum.photos/250/250?image=0',
  'https://picsum.photos/250/250?image=1',
  'https://picsum.photos/250/250?image=2',
  'https://picsum.photos/250/250?image=3',
  'https://picsum.photos/250/250?image=4',
  
]

const Card: React.FC = () => {
  const [files, setFiles] = React.useState<string[]>(images)
  const [modal, setModal] = React.useState<boolean>(true)
  const [modalImage, setModalImage] = React.useState<number>(0)

  const openImage = (i: number) => {
    setModalImage(i)
    setModal(true)
  }


  return (
    <div className='container'>

        <div className=''>
          <h1 className='ProjectName'>Название Проекта</h1>
        </div>
        <div className=''>
          <Carousel dynamicHeight={true} showThumbs={false}>
            <div>
              <img src={images[0]} />
              <p className="">Legend 1</p>
            </div>
            <div>
              <img src={images[1]} />
              <p className="">Legend 2</p>
            </div>
            <div>
              <img src={images[2]} />
              <p className="">Legend 3</p>
            </div>
          </Carousel>
        </div>
        <div className='divFiles'>
          <p>Приложения</p>
          <input 
          multiple
          name='uploadFile' 
          type="file"
          />
          <div className='documents'>
            <Modal width={400} height={400} isOpen={modal}>
              <img src={images[modalImage]} alt="" />
            </Modal>
          {files.map((item, i) => {
            return (
              <img key={i} className='document' onClick={() => openImage(i)} src={item} alt="" />
            )
          })}
          </div>
          
        </div>
        <div className=''>
          описание
        </div>
        <div className=''>
          допинфа
        </div>
    </div>
  )
}

export default Card