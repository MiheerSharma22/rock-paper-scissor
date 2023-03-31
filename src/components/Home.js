import React from 'react'
import './Home.css'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissor from '../images/icon-scissors.svg'
import { useNavigate } from 'react-router-dom'

const Home = ( { setSelected } ) => {
    
    const navigate = useNavigate();

    const clickHandler = (event) => {
        // console.log(event.target.name);
        setSelected(event.target.name);
        navigate("/result");
    }

  return (
    <div className='relative w-[250px] h-[220px] mt-[9rem] icons-container'>

        <button className='rock-button bg-white rounded-full w-[110px] aspect-square absolute top-[-2rem] left-[-2rem] grid place-items-center border-[12px] border-red-500' onClick={clickHandler} name="rock">
            <img src={rock} draggable="false" name="rock"/>
        </button>

        <button className='rock-button bg-white rounded-full w-[110px] aspect-square absolute top-[-2rem] right-[-2rem] grid place-items-center border-[12px] border-blue-500 ' onClick={clickHandler} name="paper">
            <img src={paper} draggable="false" name="paper"/>
        </button>

        <button className='rock-button bg-white rounded-full w-[110px] aspect-square absolute bottom-[-2rem] left-[30%] grid place-items-center border-[12px] border-yellow-400' onClick={clickHandler} name="scissor">
            <img src={scissor} draggable="false" name="scissor"/>
        </button>

    </div>
  )
}

export default Home