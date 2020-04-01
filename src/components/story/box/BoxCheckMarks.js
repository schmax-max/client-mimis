import React from 'react';
import {MdCheckCircle} from 'react-icons/md'
import './box.css'

export const BoxCheckMarks = ({checkMarks}) => (
  <div className='wrapperCheckMarksArray'>
    {checkMarks.map((checkMark, i) => {
      return <div className='wrapperCheckMark' key={i} >
        <MdCheckCircle className='checkIconContainer' size={'70%'}/>
        {checkMark}
      </div>
    })}
  </div>
)
