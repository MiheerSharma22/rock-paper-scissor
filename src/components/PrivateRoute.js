import React from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({selected , children}) => {
    const navigate = useNavigate();
  if(selected === "") {
    return <div className='min-w-[50%] flex justify-center mt-[7rem]'>
    <button className="py-[0.3rem] px-[1.5rem] rounded-md bg-headerOutline font-medium text-lg text-white" onClick={() => navigate("/")}>
            Play Again
        </button>
  </div>
  }
  else{
    return children
  }
}

export default PrivateRoute