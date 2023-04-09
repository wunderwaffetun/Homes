import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'

type Props = {}

export default function Header({}: Props) {

  const location = useLocation()

  const setActive = ({isActive}: {isActive: boolean}) =>  {
    const defaultCl = 'nav-link'
    return isActive ? `nav-active ${defaultCl}` : `${defaultCl}`
  } 

  return (
    <nav>
      <NavLink to="/" className={setActive}>
        <span className="nav-text">Реестр</span>
      </NavLink>
      <NavLink to="/activities" className={setActive}>
        <span className="nav-text">Мерроприятия</span>
      </NavLink>
      <NavLink to="/auth" className={setActive}>
        <span className="nav-text">Войти</span>
      </NavLink>
    </nav>
  )
}