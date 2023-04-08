import React from "react";


class Form extends React.Component {
    state = {
        name: undefined,
        contact:undefined,
        error: undefined
    }   
    
    

    FormProcessing = async() => {
        var flag = true;
        var mes = "Не все поля заполненны!";
        var form = document.getElementById('formForAuto');
        if (form.name.value.length < 2)
        {
            flag = false;
            mes = 'Поле "имя" заполненно некорректно..';
        }
        else if (form.email.value.length <6 || (form.email.value.indexOf("@",2)==-1 && form.email.value.indexOf("8")==-1 && form.email.value.indexOf("+7")==-1))
        {
            flag = false;
            mes = "Контакт некорректен...";
        }
        else
        {
            mes = "Все верно!";
        }
        
        await this.setState({
            name: form.name.value,
            contact: form.email.value,
            error: mes
        });
        
        document.write("name: ",this.state.name,
        "contact: ",this.state.contact,
        "error: ",this.state.error);/**/
    }

    /*constructor(props) {
        super(props);
        this.FormProcessing = this.FormProcessing.bind(this);
     }*/
     

    render(){
        return(
            <div>
                <form method = "POST" id = "formForAuto" className = "block border fullScreen center">
                    <h3>Можете нам отправить запрос. Мы с вами свяжемся!</h3>
                    <label htmlFor = "name" >Имя:</label>
                    <input type = "name" name = "name" id = "name" placeholder = "Введите имя.."></input>
                    <label htmlFor = "email">Email or phone:</label>
                    <input type = "email" name = "email" id = "email" placeholder = "Введите свой контакт.."></input>
                    <input type = "button" name = "butForm" id = "butForm" className = "button" value = "Отправить"
                    onClick = {this.FormProcessing}>
                        
                    </input>
                </form>
            </div>
        );
    }
    
    
}
export default Form;

