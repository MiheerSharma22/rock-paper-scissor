import React from 'react'
import rules from '../images/image-rules.svg'
import close from '../images/x-symbol.svg'
import {createPortal} from 'react-dom'

 function Modal ( {showRules , onClose} )  {
  return (
    showRules && createPortal(
        <div className='top-0 left-0 right-0 bottom-0 bg-[#00000088] absolute flex felx-col justify-center items-center'>
        <div className='bg-[#fff] w-[30%] h-[55%] flex flex-col justify-around items-center rounded-lg'>
            <img src = {rules} />

            <button onClick={onClose} className='rounded-full p-[0.75rem] bg-[#0000001d] hover:bg-[#00000032] transition-all duration-200'>
                <img src={close} className='w-[1rem]'/>  
            </button>
        </div>
        </div>
    , document.body ) 
  )
}

export default Modal;