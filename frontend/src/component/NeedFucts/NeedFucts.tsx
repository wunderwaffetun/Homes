import React from 'react'
import { coordinates } from "../../pages/Home/Home"
import { Link, useParams } from 'react-router-dom'
import "./NeedFucts.css"
import "./NeedFucts.css"


interface INeedFucts {
    adminPanel: boolean,
    coordinates: coordinates
}


const NeedFucts: React.FC<INeedFucts> = ( { adminPanel, coordinates } ) => {

    const [nameObject, setNameObject] = React.useState<string>("")    
    const [coord, setCoord] = React.useState<coordinates>(coordinates)

    const { id } = useParams<string>()

  return (
    <>
    {adminPanel ? 
    <div className="center">     
        <div className="mainPart">
            <div className = "blockUp" >
                
            </div>
          <Link to={`/decisions/${id}`} > Решения </Link>
        </div>
    </div>
    :   
    <div className="center"> 
            <div className="mainPart">
              <div className = "blockUp" >
                
                <h1 className = "center-h">Карточка Объекта</h1> 
                
              </div>
  
          <form className="block gray fullScreen border" style={{padding:"20px"}} id = "formCard" method = "POST">
              <div className="marginFivePersent">
                <div className="blockWithoutMargin margin fiftin">
                <label htmlFor="adres" className = "blockWithoutMargin textForCard">Округ</label><br></br>
                <select className="blockObject border normal">
                  <option defaultValue="" disabled selected>Выбрать округ</option>
                  <option defaultValue="1">ЗАО</option>
                  <option defaultValue="2">СЗАО</option>
                  <option defaultValue="3">САО</option>
                  <option defaultValue="4">СВАО</option>
                  <option defaultValue="5">ВАО</option>
                  <option defaultValue="6">ЮВАО</option>
                  <option defaultValue="7">ЮАО</option>
                  <option defaultValue="8">ЮЗАО</option>
                  <option defaultValue="9">ЦАО</option>
                  <option defaultValue="10">ЗелАО</option>
                  <option defaultValue="11">ТАО</option>
                  <option defaultValue="12">НМАО</option>
                </select>
                </div>
  
                <div className="blockWithoutMargin margin fiftin">
                  <label htmlFor="adres" className = "blockWithoutMargin textForCard">Район</label><br></br>
                  <select className="blockObject border normal fullScreen">
                    <option defaultValue="" disabled selected>Выбрать район</option>
                    <option defaultValue="1">ЗАО</option>
                    <option defaultValue="2">СЗАО</option>
                    <option defaultValue="3">САО</option>
                    <option defaultValue="4">СВАО</option>
                    <option defaultValue="5">ВАО</option>
                    <option defaultValue="6">ЮВАО</option>
                    <option defaultValue="7">ЮАО</option>
                    <option defaultValue="8">ЮЗАО</option>
                    <option defaultValue="9">ЦАО</option>
                    <option defaultValue="10">ЗелАО</option>
                    <option defaultValue="11">ТАО</option>
                    <option defaultValue="12">НМАО</option>
                  </select>
                </div>
  
                <div className="blockWithoutMargin margin fiftin">
                  <label htmlFor="adres" className = "textForCard blockWithoutMargin">Адрес</label><br></br>
                  <div className="normal blockObject border hungreed">
                    <input name = "adres" id = "adres" type="text" placeholder="Адрес.." className="normal blockObject hungreed"></input>
                  </div>
                </div> 
  
                <div className="blockWithoutMargin margin fiftin">
                  <label htmlFor="okrug" className = "textForCard blockWithoutMargin">
                    Округ</label><br></br>
                  <div className="normal blockObject border hungreed">
                    <input name = "okrud" id = "okrug" type="text" 
                    placeholder="Округ.." className="normal blockObject hungreed"></input>
                  </div>
                </div>
  
                <div className="blockWithoutMargin margin fiftin">
                  <label htmlFor="raion" className = "textForCard blockWithoutMargin">
                    Район</label><br></br>
                  <div className="normal blockObject border hungreed">
                    <input name = "raion" id = "raion" type="text" 
                    placeholder="Район.." className="normal blockObject hungreed"></input>
                  </div>
                </div>
  
                <div className="blockWithoutMargin margin fiftin">
                  <label htmlFor="typeObj" className = "textForCard blockWithoutMargin">
                    Тип объекта</label><br></br>
                  <div className="normal blockObject border hungreed">
                    <input name = "typeObj" id = "typeObj" type="text" 
                    placeholder="Тип объекта.." className="normal blockObject hungreed"></input>
                  </div>
                </div>
  
                <div className="blockWithoutMargin margin fiftin">
                  <label htmlFor="healseObject" className = "textForCard blockWithoutMargin">
                    Состояние объекта</label><br></br>
                  <div className="normal blockObject border hungreed">
                    <input name = "healseObject" id = "healseObject" type="text" 
                    placeholder="Состояние.." className="normal blockObject hungreed"></input>
                  </div>
                </div>
  
  
                <div className="blockWithoutMargin margin fiftin">
                  <label htmlFor="aria" className = "textForCard blockWithoutMargin">
                    Площадь объекта</label><br></br>
                  <div className="normal blockObject border hungreed">
                    <input name = "aria" id = "aria" type="text" 
                    placeholder="Площадь.." className="normal blockObject hungreed"></input>
                  </div>
                </div>
  
  
                <div className="blockWithoutMargin margin fiftin">
                  <label htmlFor="owner" className = "textForCard blockWithoutMargin">
                    Собственник</label><br></br>
                  <div className="normal blockObject border hungreed">
                    <input name = "owner" id = "owner" type="text" 
                    placeholder="Собственник.." className="normal blockObject hungreed"></input>
                  </div>
                </div>
  
  
                
                <div className="blockWithoutMargin margin fiftin">
                  <label htmlFor="user" className = "textForCard blockWithoutMargin">
                    Фактический пользователь</label><br></br>
                  <div className="normal blockObject border hungreed">
                    <input name = "user" id = "user" type="text" 
                    placeholder="Пользователь.." className="normal blockObject hungreed inputText"></input>
                  </div>
                </div>
                </div>
                
                {/* <FileUpload></FileUpload> */}
              
          </form>
        </div>
    </div> 
    }
    </>
    
  )
}

export default NeedFucts