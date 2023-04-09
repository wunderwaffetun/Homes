import React from 'react'
import "./DescriptionOfCard.css"

interface IDescCard {
    adminPanel: boolean,
    description: string,
    setDescription: (e: string) => void
}

const DescriptionOfCard: React.FC<IDescCard> = ({adminPanel, description, setDescription}) => {
  return (
    <div className=''>
          {adminPanel ?
            <div className='container'>
              <h1>Описание</h1>
              <p>{description}</p>
            </div>
          :
            <form className='container' action="">
              <h1>Описание</h1>
              <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} value={description}></textarea>
            </form>
        }
        </div>
  )
}

export default DescriptionOfCard