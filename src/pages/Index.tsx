import React from 'react'

import SideNav from '../components/SideNav'
import Navigation from '../components/Navigation'
import TotalFXChart from '../components/TotalFXChart'
import FXRadar from '../components/FXRadar'
import TotalXXX from '../components/TotalXXX'

import { TfiAngleUp } from 'react-icons/tfi'
import { FiLink2 } from 'react-icons/fi'
import { FaDollarSign } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdTrendingUp, MdTrendingDown } from 'react-icons/md'
import AppDrawer from '../components/AppDrawer'
import Grid from '@mui/material/Grid/Grid'

const Home = () => {
  return (
    <div>
        <>
            <AppDrawer>
            </AppDrawer>
            <main className="bg-[#F7F7F9] relative flex flex-col lg:flex-row h-screen">
                {/* <SideNav /> */}

                <div className='lg:flex flex-col lg:w-full h-screen'>
                {/* <Navigation /> */}

                <div className='px-4 py-6 bg-[#F7F7F9] flex flex-col gap-y-6 lg:grid lg:gap-y-6 lg:max-w-[1400px] mx-auto lg:w-full'>

                    <div className='grid grid-flow-row gap-y-6 lg:grid-flow-col lg:gap-x-6 lg:grid-cols-3'>
                    <div className='bg-white p-4 rounded-lg shadow-md lg:col-span-1'>
                        <div className='flex items-start justify-between mb-5'>
                        <div className='bg-[#26C6F9]/[.12] w-[40px] h-[40px] grid place-items-center rounded-lg'>
                            <span className='text-[#26C6F9] text-xl'><FiLink2/></span>
                        </div>
                        <div className='flex items-center text-[#72E128] text-sm'>
                            <span>+122%</span>
                            <span><TfiAngleUp/></span>
                        </div>
                        </div>
                        <div className='flex flex-col mb-4'>
                        <span className='text-lg text-[#4C4E64]/[.87] font-semibold'>168.1k</span>
                        <span className='text-sm text-[#4C4E64]/[.68]'>Total XXX</span>
                        </div>
                        <div className='bg-[#6D788D]/[.12] w-fit grid place-items-center px-2 rounded-full'>
                        <span className='text-[#4C4E64]/[.68] text-xs'>Last One Year</span>
                        </div>
                    </div>

                    <div className='bg-white p-4 rounded-lg shadow-md lg:col-span-1'>
                        <div className='flex items-start justify-between mb-5'>
                        <div className='bg-[#72E128]/[.12] w-[40px] h-[40px] grid place-items-center rounded-lg'>
                            <span className='text-[#72E128] text-xl'><FaDollarSign/></span>
                        </div>
                        <div className='flex items-center text-[#72E128] text-sm'>
                            <span>+38%</span>
                            <span><TfiAngleUp/></span>
                        </div>
                        </div>
                        <div className='flex flex-col mb-4'>
                        <span className='text-lg text-[#4C4E64]/[.87] font-semibold'>$22.5k</span>
                        <span className='text-sm text-[#4C4E64]/[.68]'>Total ABC</span>
                        </div>
                        <div className='bg-[#6D788D]/[.12] w-fit grid place-items-center px-2 rounded-full'>
                        <span className='text-[#4C4E64]/[.68] text-xs'>Last Six Months</span>
                        </div>
                    </div>

                    <div className='bg-white p-4 rounded-lg shadow-md lg:col-span-1 '>
                        <div className='flex items-start justify-between mb-5'>
                        <div className=''>
                            <div className='flex items-center'>
                                <span className='text-[#72E128] text-xl mr-[0.2rem]'>$67.2k</span>
                                <span className='text-red-500 text-xs'>-20%</span>
                            </div>
                            <div>
                                <span className='text-sm text-[#4C4E64]/[.68]'>Total FX</span>
                            </div>
                        </div>
                        {/* <div className='flex items-center text-[#72E128] text-sm'>
                            <span>+38%</span>
                            <span><TfiAngleUp/></span>
                        </div> */}
                        </div>
                        <div>
                        <TotalFXChart />
                        </div>
                        
                    </div>
                    </div>

                    <div className='flex flex-col gap-y-6 lg:grid grid-flow-row lg:gap-y-6 lg:grid-flow-col lg:gap-x-6 lg:grid-cols-3'>

                        <div className='bg-white flex flex-col lg:col-span-2 lg:flex lg:flex-row rounded-lg shadow-md'>
                            <div className='basis-[58.3333%] p-4'>
                                <div>
                                    <span className='text-[#4C4E64]/[.87] text-xl font-semibold'>Total XXX</span>
                                </div>
                                <div>
                                    <TotalXXX />
                                </div>
                            </div>

                            <div className='lg:border-l-2 p-4 flex flex-col lg:max-w-[41.6667%] lg:basis-[41.6667%] w-full'>
                                <div className='flex justify-between pb-5'>
                                    <div className='flex flex-col'>
                                        <span className='text-[#4C4E64]/[.87] text-xl font-semibold'>Report</span>
                                        <span className='text-sm text-[#4C4E64]/[.68]'>Last month transactions $200k</span>
                                    </div>
                                <span className='text-[#4C4E64]/[.87]'><BsThreeDotsVertical/></span>
                                </div>

                                <div className='flex items-center justify-center w-full pb-5 border-b-[1px]'>
                                    <div className='border-r-[1px] flex flex-col items-center pr-6'>
                                        <div className='bg-[#72E128]/[.12] w-[40px] h-[40px] grid place-items-center rounded-lg'>
                                            <span className='text-[#72E128] text-xl'><MdTrendingUp /></span>
                                        </div>
                                        <div className='flex flex-col text-center'>
                                            <span className='text-sm text-[#4C4E64]/[.68]'>This Week</span>
                                            <span className='text-[#4C4E64]/[.87] font-semibold'>+69.42%</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center pl-6'>
                                        <div className='bg-[#72E128]/[.12] w-[40px] h-[40px] grid place-items-center rounded-lg'>
                                            <span className='text-[#72E128] text-xl'><MdTrendingDown /></span>
                                        </div>
                                        <div className='flex flex-col text-center'>
                                            <span className='text-sm text-[#4C4E64]/[.68]'>Last Week</span>
                                            <span className='text-[#4C4E64]/[.87] font-semibold'>-5%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-evenly justify-self-end pt-5'>
                                    <div className='flex flex-col'>
                                        <span className='text-sm text-[#4C4E64]/[.68]'>Performance</span>
                                        <span className='text-[#4C4E64]/[.87] font-semibold'>+99.99%</span>
                                    </div>
                                    <div>
                                        <button className='rounded-lg bg-[#72E128] text-white text-sm px-[1.375rem] min-w-[64px] w-full  py-[0.4375rem]'>VIEW REPORT</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white p-4 rounded-lg shadow-md lg:col-span-1'>
                            <div className='flex items-start justify-between mb-5'>
                                <div className=''>
                                    <span className='text-[#4C4E64]/[.87] text-xl font-semibold'>FX Radar</span>
                                </div>
                                <div className='flex items-center text-[#4C4E64]/[.87] cursor-pointer text-sm'>
                                    <span><BsThreeDotsVertical /></span>
                                </div>
                            </div>
                            <div className=''>
                                <FXRadar />
                            </div>
                            {/* <div className='flex flex-col mb-4'>
                                <span className='text-lg text-[#4C4E64]/[.87] font-semibold'>168.1k</span>
                                <span className='text-sm'>Total XXX</span>
                            </div>
                            <div className='bg-[#6D788D]/[.12] w-fit grid place-items-center px-2 rounded-full'>
                                <span className='text-[#4C4E64]/[.68] text-xs'>Last One Year</span>
                            </div> */}
                        </div>
                    </div>
                </div>
                </div>
            
            </main>
        </>
    </div>
  )
}

export default Home