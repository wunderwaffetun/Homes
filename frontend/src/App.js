import React from "react";
import Info from "./component/info";
import Form from "./component/form";
import Workers from "./component/workers";
import Map from "./component/map";
import Title from "./component/title.js";

class App extends React.Component {
  titleText = "Список объектов";

  constructor(params) {
    super(params);
    this.state = {
      inputValue: "",
      cordX: 46.043644, //37.497845;//46.043644;//
      cordY: 51.540884, //55.812580;//51.540884;//
    };
  }

  page = "main";

  objects = [
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
    /*{id: 15, name: 'bread'},
    {id: 16, name: 'cheese'},
    {id: 17, name: 'milk'},
    {id: 18, name: 'bread'},
    {id: 19, name: 'cheese'},
    {id: 20, name: 'milk'},
    {id: 21, name: 'bread'},*/
  ];

  findNameObj = document.getElementById("formFindName");

  UpdateName = (e) => {
    console.log("eeeeeeeeeeeeee", e.target.value, this.state.inputValue);
    this.setState({
      ...this.state,
      inputValue: e.target.value,
      cordX: this.state.cordX,
      cordY: this.state.cordY,
    });

    this.render();
  };

  res = this.objects.map(function (item) {
    console.log(item.name.indexOf(this.inputValue) >= 0);
    if (item.name.indexOf(this.inputValue) >= 0) {
      return (
        <p
          key={item.id}
          className="border blockObject"
          style={{ margin: "10px", fontSize: "28px" }}
        >
          {item.name}
        </p>
      );
    } else return;
  }, this);
  render() {
    console.log(this.state.cordX);
    //this.page = "showCard";
    if (this.page == "main") {
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
            <Map state={this.state} />
            <div className="hightBord fullScreen block gray hightSmoleBlock">
              <form className="col s12" id="formFindName" method="POST">
                <input
                  id="nameInput"
                  name="nameInput"
                  placeholder="Название объекта..."
                  onClick={(e) => {
                    this.UpdateName(e);
                  }}
                  type="text"
                  className="input-field col s6 row validate"
                  style={{ margin: "0px 0px 0 10px" }}
                />
                <a
                  onClick={(e) => {
                    this.UpdateName(e);
                  }}
                  className="btn-floating btn-medium waves-effect waves-light orange rightButmedium"
                  id="btnFind"
                >
                  <i className="material-icons">find_in_page</i>
                </a>
              </form>
            </div>
            <div className="blockWithObjects">
              <p>{this.res}</p>
            </div>
          </div>
        </div>
      );
    } else if (this.page == "showCard") {
      return (
        <div className="center">
          <div className="mainPart">
            <div className="blockUp">
              <a
                className="btn-floating btn-large waves-effect waves-light blue leftBut"
                id="btnFilter"
              >
                <i className="large material-icons">arrow_back</i>
              </a>
              <h1 className="center">Карточка Объекта</h1>
              <a
                className="btn-floating btn-large waves-effect waves-light yellow rightBut"
                id="btnEdit"
              >
                <i className="large material-icons">create</i>
              </a>
            </div>
          </div>
        </div>
      );
    } else if (this.page == "editCard") {
      return <div className="mainPart"></div>;
    } else if (this.page == "profile") {
      return <div className="mainPart"></div>;
    } else if (this.page == "login") {
      return <div className="mainPart"></div>;
    } else {
      return <div className="mainPart"></div>;
    }
  }
}

export default App;
