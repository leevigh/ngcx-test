import React from 'react'
import Container from '@mui/material/Container'

import { AiOutlineSearch } from 'react-icons/ai'

const Navigation = () => {
  return (
        <div className=''>
            <nav className='w-full lg:px-4 lg:max-w-[1400px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        {/* <span className="text-[20px] lg:hidden drawer-button cursor-pointer text-black" >&#9776;</span> */}
                        <span className='text-[#4C4E64]'><AiOutlineSearch/></span>
                    </div>

                    <div>
                        <div className='relative w-[40px] h-[40px] bg-[#EAEAED] rounded-full text-[1.25rem] text-[#4C4E64] grid place-items-center'>
                            <span>U</span>
                            <span className='absolute w-[8px] h-[8px] right-1 bottom-0 rounded-full bg-[#72E128]'></span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
  )
}

export default Navigation