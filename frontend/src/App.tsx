import React, { FC, useState } from "react";
import Map from "./component/map";

interface coordinates {
  coordX: number,
  coordY: number
}

interface hint {
  id: number,
  name: string
}



const testObjects: hint[] = [
  { id: 1, name: "ТЦ Метрополис" },
  { id: 2, name: "СК Металург" },
  { id: 3, name: "ГЗ Бауманки" },
  { id: 4, name: "УЛК Бауманки" },
  { id: 5, name: "Общежитие Икар" },
  { id: 6, name: "Общежитие Морг" },
  { id: 7, name: "Парк Стрешнево" },
  { id: 8, name: "ТЦ Зимняя вишня" },
  { id: 9, name: "Парк Горького" },
  { id: 10, name: "Соколовая гора" },
  { id: 11, name: "Общежитие Космос" },
  { id: 12, name: "Общежитие Альфа" },
  { id: 13, name: "Магазин Квака" },
  { id: 14, name: "СК Черепаха" },
];

const initialCoords: coordinates = {
  coordX: 46.043644, //37.497845;//46.043644;//
  coordY: 51.540884, //55.812580;//51.540884;//
}

 export  const App: FC = () => {
  const [ coords, setCoords ] = useState<coordinates>(initialCoords)
  const [ inputValue, setInputValue ] = useState<string>('')
  const [ objects, setObjects ] = useState<hint[]>(testObjects)

  


  


  const UpdateName = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  };

  // res = this.objects.map(function (item) {
  //   console.log(item.name.indexOf(this.inputValue) >= 0);
  //   if (item.name.indexOf(this.inputValue) >= 0) {
  //     return (
  //       <p
  //         key={item.id}
  //         className="border blockObject"
  //         style={{ margin: "10px", fontSize: "28px" }}
  //       >
  //         {item.name}
  //       </p>
  //     );
  //   } else return;
  // }, this);
    //this.page = "showCard";


      return (
        <div className="center">
          <div className="mainPart">
            <div className="blockUp">
              <a
                className="btn-floating btn-large waves-effect waves-light blue leftBut"
                id="btnFilter"
              >
                <i className="large material-icons">build</i>
              </a>
              <h1 className="center">Реестр объектов</h1>
              <a
                className="btn-floating btn-large waves-effect waves-light yellow rightBut"
                id="btnProfile"
              >
                <i className="large material-icons">account_box</i>
              </a>
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
            {/* <div className="blockWithObjects">
              <p>{this.res}</p>
            </div> */}
          </div>
        </div>
      );
  }


