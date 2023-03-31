import React from 'react'
import './ScoreCard.css'
import { useState } from 'react';

const ScoreCard = ({score}) => {
  return (
    <div className='score-card-container flex md:min-w-[40%] py-[1rem] px-[1rem] justify-between border-4 border-headerOutline rounded-lg'>
        <div className='heading text-white font-bold flex flex-col text-[2rem] uppercase h-fit w-[26%] p-0 gap-0 leading-none'>
            <p>
                Rock
                Paper
                Scissors
            </p>
        </div>

        <div className='scoreboard bg-white min-w-[25%] p-[0.5rem] flex flex-col rounded-md leading-none'>
            <span className='uppercase tracking-widest grid place-items-center text-scoreText  font-[600] text-[1.25rem] pt-[0.25rem]'>
                Score
            </span>
            <p className=' h-full grid place-items-center text-[2.75rem] text-darkText font-extrabold '>
                {score}
            </p>
        </div>
    </div>
  )
}

export default ScoreCard