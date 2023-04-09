import React, { TextareaHTMLAttributes } from 'react'
import "./Card.css"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from '../../component/Modal/Modal.js';
import axios from 'axios'
import DescriptionOfCard from '../../component/DescriptionOfCard/DescriptionOfCard.tsx';
import DocumentsCard from '../../component/DocumentsCard/DocumentsCard.tsx';
import CarouselCard from '../../component/CarouselCard/CarouselCard.tsx';

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

const role = "admin"

const Card: React.FC = () => {
  const [description, setDescription] = React.useState<string>("")
  const [filesSlider, setFilesSlider] = React.useState<string[]>(images)
  const [filesDocs, setFilesDocs] = React.useState<string[]>(images)
  const [adminPanel, setAdminPanel] = React.useState<boolean>(false)

  const deleteDoc = (i: number) => {
    setFilesDocs(prev => prev.filter((item, j) => j !== i))
  }

  const deleteSlide = (i: number) => {
    setFilesSlider(prev => prev.filter((item, j) => j !== i))
  }

  const OnSumbitSliderFiles = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.form);

    axios
      .post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(`Success` + res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const Save = () => {
    setAdminPanel(prev => !prev)
  }

  const Reject = () => {
    setAdminPanel(prev => !prev)
    setFilesSlider(images)
    setFilesDocs(images)
    setDescription("")
  }

  return (
    <div className='container'>
        {adminPanel ? 
          <div className='redactorButton' onClick={() => setAdminPanel(prev => !prev)}>
            редактировать
          </div>
        :
          <div className='redactorButton'>
            <p onClick={() => Save()}>сохранить</p>
            <p onClick={() => Reject()}>отменить</p>
          </div>
        }
        <div className=''>
          <h1 className='ProjectName'>Название Проекта</h1>
        </div>
        <CarouselCard adminPanel={adminPanel} images={images} OnSumbitSliderFiles={OnSumbitSliderFiles} deleteSlide={deleteSlide} />

        <DocumentsCard adminPanel={adminPanel} filesDocs={filesDocs} images={images} deleteDoc={deleteDoc} />

        <DescriptionOfCard adminPanel={adminPanel} description={description} setDescription={setDescription} />

        {adminPanel ? 
          <div className='redactorButton' onClick={() => setAdminPanel(prev => !prev)}>
            Удалить проект
          </div>
        :
          <div className='redactorButton'>
            <p onClick={() => Save()}>сохранить</p>
            <p onClick={() => Reject()}>отменить</p>
          </div>
        }
    </div>
  )
}

export default Card