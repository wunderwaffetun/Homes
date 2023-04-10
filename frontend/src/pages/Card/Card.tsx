import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { coordinates } from "../../pages/Home/Home"
import "./Card.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"

import DescriptionOfCard from '../../component/DescriptionOfCard/DescriptionOfCard';
import DocumentsCard from '../../component/DocumentsCard/DocumentsCard';
import CarouselCard from '../../component/CarouselCard/CarouselCard';

import Modal from '../../component/Modal/Modal'
import NeedFucts from '../../component/NeedFucts/NeedFucts'


interface fetchData {
  slides: File[],
  docs: File[],
  descriptionCard: string,
}

interface propCard {
  coordinates: coordinates
}

const coord: coordinates = {
  coordX: 46.043644, //37.497845;//46.043644;//
  coordY: 51.540884, //55.812580;//51.540884;//
} 

const param = 1

const role: string = "admin"

const Card: React.FC = () => {
  const id = useParams()

  const refFormSlider = React.useRef<HTMLFormElement>(null)
  const refFormDocs = React.useRef<HTMLFormElement>(null)

  const [description, setDescription] = React.useState<string>("")
  const [filesSlider, setFilesSlider] = React.useState<File[]>([])
  const [filesDocs, setFilesDocs] = React.useState<File[]>([])
  const [filesSliderforSave, setFilesSliderforSave] = React.useState<File[]>([])
  const [filesDocsforSave, setFilesDocsforSave] = React.useState<File[]>([])

  const [adminPanel, setAdminPanel] = React.useState<boolean>(true)

  const [deleteModal, setDeleteModal] = React.useState<boolean>(false)


  React.useEffect(() => {
    axios
      .get<fetchData>(`http://localhost:5001/project/${id}`)
      .then((response) => {
        setFilesSlider(response.data.slides)
        setFilesSliderforSave(response.data.slides)
        setFilesDocs(response.data.docs)
        setFilesDocsforSave(response.data.docs)
        setDescription(response.data.descriptionCard)
      })
      .catch((error) => console.log(error))
  }, [])


  const deleteDoc = (i: number) => {
    setFilesDocs(prev => prev.filter((item, j) => j !== i))
  }

  const deleteSlide = (i: number) => {
    setFilesSlider(prev => prev.filter((item, j) => j !== i))
  }

  const deleteProject = (i: number) => {
    axios.delete("")
    setDeleteModal(false)
  }

  const OnSumbitSliderFiles = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formdata

    if(refFormSlider.current !== null) {
      formdata = new FormData(refFormSlider.current)
    }
    

    axios
      .post("http://localhost:3000/upload", formdata, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .catch((err) => {
        console.log(err);
      });
      setAdminPanel(prev => !prev)
  }

  const OnSumbitDocsFiles = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formdata

    if (refFormSlider.current !== null) {
      formdata = new FormData(refFormSlider.current)
    }
    

    axios
      .post("http://localhost:3000/upload", formdata, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const OnSumbitTextAreaFiles = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:3000/upload", description, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const Reject = () => {
    setAdminPanel(prev => !prev)
    setFilesSlider(filesSliderforSave)
    setFilesDocs(filesDocsforSave)
    setDescription("")
  }

  return (
    <div className='container'>
      
      {/*<a className ="btn-floating btn-large waves-effect waves-light yellow rightBut" id="btnProfile">
      <i className="large material-icons">account_box</i></a>*/}
      {
         role === "admin" ? 
         <>
          {adminPanel ? 
            <button className='btn-floating btn-large waves-effect waves-light blue leftBut' id="btnFilter" onClick={() => setAdminPanel(prev => !prev)}>
              <i className="large material-icons">create</i>
            </button>
          :
            <div className=''>
              {/*<button className="btn-floating btn-large waves-effect waves-light blue leftBut" id="btnFilter" onClick={() => Reject()}>
                <i className="large material-icons">create</i>
          </button>*/}
              <button type='submit' className ="btn-floating btn-large waves-effect waves-light yellow leftBut" id="btnEdit" form='files' >
                <i className="large material-icons">save</i>
              </button>
            </div>
          }
        </>
        :
        <></>
      }
        
        <div className=''>
          <h1 className='ProjectName'>{/*testObjects[Number(id)].name*/}Название Проекта</h1>
        </div>

        <CarouselCard adminPanel={adminPanel} images={filesSlider} OnSumbitSliderFiles={OnSumbitSliderFiles} deleteSlide={deleteSlide} setImages={setFilesSlider} refer={refFormSlider} />

        <NeedFucts adminPanel={adminPanel} coordinates={coord} />

        <DocumentsCard adminPanel={adminPanel} filesDocs={filesDocs} images={filesDocsforSave} deleteDoc={deleteDoc} OnSumbitSliderFiles={OnSumbitDocsFiles} setImages={setFilesDocs} refer={refFormDocs} />

        <DescriptionOfCard adminPanel={adminPanel} description={description} setDescription={setDescription} OnSumbitSliderFiles={OnSumbitTextAreaFiles}  />

        {adminPanel && role === "admin" ? 
          <button className='deleteButton' onClick={() => setDeleteModal(true)}>
            Удалить проект
          </button>
        :
          <></>
        }

        {deleteModal && role === "admin" ?
          <Modal width={"30%"} height={"30%"} isOpen={deleteModal}>
            <div className='modalDelete'>
              <h1 className='textDelete'>вы уверены?</h1>
              <div>
                <button onClick={() => deleteProject(param)}>да</button>
                <button onClick={() => setDeleteModal(false)}>нет</button>
              </div>
            </div>
          </Modal>
        :
          <></>  
        }  
    </div>
  )
}

export default Card