import React from 'react'
import "./DocumentsCard.css"

interface IDocCard {
    adminPanel: boolean,
    filesDocs: string[],
    images: string[],
    deleteDoc: (i: number) => void
}   

const DocumentsCard: React.FC<IDocCard> = ({ adminPanel, filesDocs, images, deleteDoc }) => {
  return (
    <div className='divFiles'>
        <p>Приложения</p>
        <input 
            multiple
            name='uploadFile' 
            type="file"
            />
        <div className='documents'>
            {filesDocs.map((item, i) => {
                return (
                <div className='document'>
                  {adminPanel ? <></> : <p onClick={() => deleteDoc(i)} className='deleteDoc'>x</p>}
                  {adminPanel ? <a className='LinkDocument' download={`doc${i}.png`} href={"/" + images[i]}><img key={i}  src={item} alt="" /></a> : <p className='LinkDocument'><img key={i} src={item} alt="" /></p>}
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default DocumentsCard