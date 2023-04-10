import React from 'react'
import './Auth.css'


const Auth: React.FC = () => {
  return ( 
  <div className='Page'>
  <div className="registration-cssave">
  <form>
      <h3 className="text-center">Форма входа</h3>
      <div className="form-group">
          <input className="form-control item" type="text" name="username"   pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Логин" required/>
      </div>
      <div className="form-group">
          <input className="form-control item" type="password" name="Пароль"  id="password" placeholder="Пароль" required/>
      </div>
      <div className="form-group">
          <button className="btn btn-primary btn-block create-account" type="submit">Вход в аккаунт</button>
      </div>
      {/*<Button to="/" text="Домой" />*/}
  </form>
</div>
</div>
  )
}

export default Auth