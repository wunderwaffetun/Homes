import React from 'react'
import FileUpload from '../../component/FileUpload/FileUpload';

import "./DocumentsCard.css"

interface IDocCard {
    adminPanel: boolean,
    filesDocs: File[],
    images: string[],
    deleteDoc: (i: number) => void
    OnSumbitSliderFiles: (e: React.FormEvent<HTMLFormElement>) => void,
    setImages: (e: File[]) => void
}   

const DocumentsCard: React.FC<IDocCard> = ({ adminPanel, filesDocs, images, deleteDoc, OnSumbitSliderFiles, setImages }) => {
  return (
    <div className='divFiles'>
        <p>Приложения</p>
        
        <div className='documents'>
            {filesDocs.map((item, i) => {
                return (
                <div className='document'>
                  {adminPanel ? <></> : <p onClick={() => deleteDoc(i)} className='deleteDoc'>x</p>}
                  {adminPanel ? <a className='LinkDocument' download={`doc${i}.png`} href={"/" + images[i]}><img key={i}  src={URL.createObjectURL(item)} alt="" /></a> : <p className='LinkDocument'><img key={i} src={URL.createObjectURL(item)} alt="" /></p>}
                </div>
                )
            })}
            <form className='centerForm' onSubmit={(e) => OnSumbitSliderFiles(e)}>
                <FileUpload files={filesDocs} setFiles={setImages} />
            </form>
        </div>
    </div>
  )
}

export default DocumentsCard