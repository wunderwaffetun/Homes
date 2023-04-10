import React from 'react'
import "./DescriptionOfCard.css"

interface IDescCard {
    adminPanel: boolean,
    description: string,
    setDescription: (e: string) => void,
    OnSumbitSliderFiles: (e: React.FormEvent<HTMLFormElement>) => void,
}

const DescriptionOfCard: React.FC<IDescCard> = ({adminPanel, description, setDescription, OnSumbitSliderFiles}) => {
  return (
    <div className=''>
          {adminPanel ?
            <div className='container'>
              <h1>Описание</h1>
              <p>{description} 
        <div>
          <div>Тип: <p className = "normal">Ветхое и Пажароопасное</p><br></br>Адрес: <p className = "normal">Ленинградское ш., 16А, стр. 4 </p><br/> Состояние: <p className = "normal">Приемлимое</p></div>
        </div></p>
            </div>
          :
            <form id='files' className='container' onSubmit={OnSumbitSliderFiles} action="">
              <h1>Описание</h1>
              <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} value={description}></textarea>
            </form>
        }
        </div>
  )
}

export default DescriptionOfCard