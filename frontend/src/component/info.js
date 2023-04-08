import React from "react";

const Info = (props) => (
    <div className="block">
        <h2> Офисы нашей команды! </h2>
        <p> Обратись к нам и персесядь с метро на собственный automobile! </p>
        <form id = "formOffice " >
            <label htmlFor = "office">Офис:</label> 
            <select name="office" id="office">
                <option>Москва Дубосековская 13</option>
                <option>Саратов Радищева 74</option>
            </select>

            <input type = "button" name = "butForm" id = "butFormOffice" className = "button" value = "выбрать..." onClick={props.userInfo}/>
                            
        </form>
    </div>
);



export default Info;