import React from 'react'
import "./Modal.css"

interface Modal {
  width: string,
  height: string,
  isOpen: boolean,
  children: JSX.Element | JSX.Element[]
}

const Modal: React.FC<Modal> = ({width, height, isOpen, children}) => {
  return (
    <div style={{width: width, height: height, display: isOpen ? "flex" : "none"}} className='modal'>
        {children}
    </div>
  )
}

export default Modal