import React, { MutableRefObject } from 'react'
import FileUpload from '../../component/FileUpload/FileUpload';

import "./DocumentsCard.css"

interface IDocCard {
    adminPanel: boolean,
    filesDocs: File[],
    images: File[],
    deleteDoc: (i: number) => void
    OnSumbitSliderFiles: (e: React.FormEvent<HTMLFormElement>) => void,
    setImages: (e: File[]) => void,
    refer: React.RefObject<HTMLFormElement>
}   

const DocumentsCard: React.FC<IDocCard> = ({ adminPanel, filesDocs, images, deleteDoc, OnSumbitSliderFiles, setImages, refer }) => {
  return (
    <div className='divFiles'>
        <p>Приложения</p>
        
        <div className='documents'>
            {filesDocs?.map((item, i) => {
                return (
                <div key={i} className='document'>
                  {adminPanel ? <></> : <p onClick={() => deleteDoc(i)} className='deleteDoc'>x</p>}
                  {adminPanel ? <a className='LinkDocument' download={`doc${i}.png`} href={'/' + filesDocs[i]}><img key={i}  src={URL.createObjectURL(item)} alt="" /></a> : <p className='LinkDocument'><img key={i} src={URL.createObjectURL(item)} alt="" /></p>}
                </div>
                )
            })}
            {adminPanel ? 
              <></>
            :
            <form ref={refer} id='files' className='centerForm' onSubmit={(e) => OnSumbitSliderFiles(e)}>
                <FileUpload files={filesDocs} setFiles={setImages} />
            </form>
          }
            
        </div>
    </div>
  )
}

export default DocumentsCard