import React, { useState } from 'react'
import Map from '../../component/map';
import { useNavigate } from 'react-router-dom';


export interface coordinates {
  coordX: number,
  coordY: number
}



interface hint {
  id: number,
  name: string,
  src: string,
  adres: string,
  type: string
}

export const testObjects: hint[] = [
  {id: 1, name: 'ТЦ Метрополис', src : "https://invme-s3.s3.amazonaws.com/lg9bzc6u8mkrtniksjer.jpg", adres:"Ленинградское ш., 16А, стр. 4", type:"Пожароопасные"},
  {id: 2, name: 'СК Металург', src : "http://moscowalk.ru/images/2013/sport/metalurg/Metallurg_stadium1.jpg", adres:"гдето на бауманской", type:"Ветхое"},
  {id: 3, name: 'ГЗ Бауманки', src : "https://avatars.mds.yandex.net/i?id=abad6c751bc45eac93e458ef189310fc6d5c78a8-6218602-images-thumbs&n=13", adres:"гдето на бауманской", type:"Пожароопасные"},
  {id: 4, name: 'УЛК Бауманки', src : "https://rismdata.nostroy.ru/logo/logoman041.png",adres:"гдето на бауманской", type:"Ветхое"},
  {id: 5, name: 'Общежитие Икар', src : "https://avatars.mds.yandex.net/i?id=2a0000017a07c4e1c833f72bb173283a9a8c-5161315-images-thumbs&n=13",adres:"Дубосековская 13", type:"Ветхое"},
  {id: 6, name: 'Общежитие Морг', src : "https://avatars.mds.yandex.net/i?id=7ed56d5ec73eb18e3a928f29e5dab7c44d053a29-8318446-images-thumbs&n=13", adres:"гдето на войковской", type:"Пожароопасные"},
  {id: 7, name: 'Парк Стрешнево', src : "https://rismdata.nostroy.ru/logo/logoman041.png", adres:"гдето на войковской", type:"Ветхое"},
  {id: 8, name: 'ТЦ Зимняя вишня', src : "https://rismdata.nostroy.ru/logo/logoman041.png", adres:"гдето в городе на К**", type:"Пожароопасные"},
  {id: 9, name: 'Парк Горького', src : "https://rismdata.nostroy.ru/logo/logoman041.png", adres:"гдето в мск", type:"Без санкции>"},
  {id: 10, name: 'Соколовая гора', src : "https://rismdata.nostroy.ru/logo/logoman041.png", adres:"Великий город Саратов", type:"Без комуникаций"},
  {id: 11, name: 'Общежитие Космос', src : "https://avatars.mds.yandex.net/i?id=2a0000017a0fc0a84886a549ffb59783a50b-4339445-images-thumbs&n=13", adres:"гдето на войковской", type:"Пожароопасные"},
  {id: 12, name: 'Общежитие Альфа', src : "https://rismdata.nostroy.ru/logo/logoman041.png", adres:"гдето на войковской", type:"Без санкции"},
  {id: 13, name: 'Магазин Квака', src : "https://avatars.mds.yandex.net/i?id=5f7d5e09d0bf0e9c619f5a7b7b2ffe9134fbfcb4-7570876-images-thumbs&n=13", adres:"гдето на войковской", type:"Без санкции"},
  {id: 14, name: 'СК Черепаха', src : "https://rismdata.nostroy.ru/logo/logoman041.png", adres:"гдето на войковской", type:"Без комуникаций"}
  
];

const initialCoords: coordinates = {
  coordX: 46.043644, //37.497845;//46.043644;//
  coordY: 51.540884, //55.812580;//51.540884;//
}

const Home: React.FC = () => {const [ coords, setCoords ] = useState<coordinates>(initialCoords)
  const [ inputValue, setInputValue ] = useState<string>('')
  const [ objects, setObjects ] = useState<hint[]>(testObjects)
  const [ activeType, setActiveType ] = useState<string>('')
  const [ countFire, setCountFire ] = useState<number>(5)
  const [ countSanction, setCountSanction ] = useState<number>(4)
  const [ countCrush, setCountCrush ] = useState<number>(4)
  const [ countComunic, setCountComunic ] = useState<number>(2)
  const [ countAll, setCountAll ] = useState<number>(15)
  const navigate = useNavigate()
  

const UpdateName = (e: React.FormEvent<HTMLInputElement>) => {
  setInputValue(e.currentTarget.value)
};

const UpdateCount = (obj:hint[]) => {
  var countFire = 0;
  var countSanction = 0;
  var countCrush = 0;
  var countComunic = 0;
  var countAll = 0;
  for (let i=0;i<14;i++)
  {
    if (obj[i].type == "Ветхое")
    countCrush +=1;

    if (obj[i].type == "Пожароопасные")
    countFire +=1;
    
    if (obj[i].type == "Без санкции")
    countSanction +=1;
    
    if (obj[i].type == "Без комуникаций")
    countComunic +=1;
  }
  countAll = countComunic + countSanction + countFire +countCrush;
  setCountCrush(countCrush);
  setCountSanction(countSanction);
  setCountFire(countFire);
  setCountComunic(countComunic);
  setCountAll(countAll);
}

//UpdateCount(testObjects);

const filerByType = (type:string) => {
  setActiveType(type);
  //Фильтрация по типy
}

const goToCard = (id:number) => {
  console.log(id)
  navigate(`/cards/${id}, ${testObjects}`)
  //Открыть страницу карточки объекта id объекта props
}

const res = testObjects.map(function(item) {
console.log (item.name.indexOf(inputValue)>= 0);
if((item.name.indexOf(inputValue)>= 0) && ((item.type == activeType) || (activeType == "")))
{
  return (
    <p key={item.id} className="border fullScreen block gray heightlyBlockObject normal forMicroCard" 
    onClick={() => goToCard(item.id)}>
    <img src = {item.src} className="left margin"></img> 
    {item.name}<br></br><br></br>
    Адрес:{item.adres} <br></br>
    Тип:{item.type} <br></br>
    </p>
    );
}
else 
return;
},inputValue);

      return (
        <div className="center">
          <div className="mainPart">
            {/*<div className="blockUp">
              <a href='./'
                className="btn-floating btn-large waves-effect waves-light blue leftBut"
                id="btnFilter"
              >
                <i className="large material-icons">build</i>
              </a>
              <a href='./'
                className="btn-floating btn-large waves-effect waves-light yellow rightBut"
                id="btnProfile"
              >
                <i className="large material-icons">account_box</i>
              </a>
      </div>*/}

            <div className="hungreed center">
            <div className="blockUp block fourte">
                <div className =" border box" onClick={() => filerByType("Пожароопасные")}>
                    
                    <img className="center" src = "https://img.icons8.com/ios/512/fire-hazard.png"></img>
                    <p>Пожароопасные</p>
                    <p className="bold">{countFire} объектов</p>
                    
                </div>
                <div className =" border box" onClick={() => filerByType("Ветхое")}>
                  <img className="center" src = "https://img.icons8.com/ios/512/foreclosure.png"></img>
                  <p>Ветхое</p>
                    <p className="bold">{countCrush} объектов</p>
                    
                </div>
                <div className =" border box" onClick={() => filerByType("Без санкции")}>
                  <img className="center" src = "https://img.icons8.com/external-ddara-lineal-ddara/512/external-reject-logistics-ddara-lineal-ddara.png"></img>
                  <p>Отсутствие санкции</p>
                    <p className="bold">{countSanction} объектов</p>

                </div>
                <div className =" border box" onClick={() => filerByType("Без комуникаций")}>
                  <img className="center" src = "https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/512/external-plumbing-recycling-kmg-design-detailed-outline-kmg-design.png"></img>
                    <p>Без коммуникаций</p>
                   <p className="bold">{countComunic} объектов</p>

                </div>
                <div className =" border box" onClick={() => filerByType("")}>
                  <img className="center" src = "https://img.icons8.com/ios/512/neighborhood.png"></img>
                    <p>Все объекты</p>
                   <p className="bold">{countAll} объектов</p>

                </div>
            </div>
          </div>


            <Map coordinates={coords} />
            <div className="hightBord fullScreen block gray hightSmoleBlock">
              <form className="col s12" id="formFindName" method="POST">
                <input
                  id="nameInput"
                  name="nameInput"
                  placeholder="Название объекта..."
                  onChange={(e) => {
                    UpdateName(e);
                  }}
                  value={inputValue}
                  type="text"
                  className="input-field col s6 row validate"
                  style={{ margin: "0px 0px 0 10px" }}
                />
                {/* <a href="./"
                  onClick={(e: React.MouseEventHandler<HTMLAnchorElement>) => {
                    UpdateName(e);
                  }}
                  className="btn-floating btn-medium waves-effect waves-light orange rightButmedium"
                  id="btnFind"
                >
                  <i className="material-icons">find_in_page</i>
                </a> */}
              </form>
            </div>

            <div className = "blockWithObjects marginTop">
              <p>{res}</p>
            </div>




          </div>
        </div>
      );
}

export default Home



