import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './icons/Logo'

import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { MdOutlineHome, MdPermIdentity, MdListAlt } from 'react-icons/md'

const SideNav = () => {

    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];

    function handleMouseEntry() {
        if(open) return

        setOpen(true)
    }

    function handleMouseExit() {
        if(!open) return

        setOpen(false)
    }

  return (

    <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-4   relative duration-300 bg-[#F7F7F9] border-2`}
        onMouseEnter={() => handleMouseEntry()}
      >
        <HiChevronDoubleLeft
          className={`absolute cursor-pointer -right-3 top-6 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          {/* <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          /> */}
          {/* ${
              !open && "scale-0"
            } */}
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 flex items-center `}
          >
            <span className=''>
                <Logo />
            </span>
            <span className={`text-lg text-[#4C4E64]/[.87] font-bold -ml-2 ${!open && 'scale-0'}`}>GCX</span>
          </h1>
        </div>

        <ul className='pt-6'>
            <div className={open ? 'mb-4' : 'hidden'}>
                <span>Main Section</span>
            </div>
                <li className='flex items-center py-[0.5625rem] px-[0.75rem]'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'border-2 flex' : 'flex'} >
                    <span className='text-lg text-[#4C4E64]/[.87]'><MdOutlineHome /></span>
                    <span className={`${!open && "hidden"} origin-left duration-200 text-[#4C4E64]/[.87]`}>
                        Dashboard
                    </span>
            </NavLink>
                </li>

            <li className='flex items-center py-[0.5625rem] px-[0.75rem]'>
                <span className='text-lg text-[#4C4E64]/[.87]'><MdPermIdentity /></span>
                <span className={`${!open && "hidden"} origin-left duration-200 text-[#4C4E64]/[.87]`}>
                    Users
                </span>
            </li>

            <li className='flex items-center py-[0.5625rem] px-[0.75rem] border-2 rounded-lg'>
                <span className='text-lg text-[#4C4E64]/[.87]'><MdListAlt /></span>
                <span className={`${!open && "hidden"} origin-left duration-200 text-[#4C4E64]/[.87]`}>
                    Forms
                </span>
            </li>
        </ul>
        {/* <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul> */}
      </div>

    // <div className="drawer h-screen">
    //     <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    //     <div className="drawer-content">
    //         {/* <!-- Page content here --> */}
    //         <div className='border-2 max-w-[64px] h-screen'>

    //             <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
    //         </div>
    //     </div> 
    //     <div className="drawer-side">
    //     <label htmlFor="my-drawer" className="drawer-overlay"></label>
    //     <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    //         {/* <!-- Sidebar content here --> */}
    //         <li><a>Sidebar Item 1</a></li>
    //         <li><a>Sidebar Item 2</a></li>
            
    //     </ul>
    //     </div>
    // </div>

  )
}

export default SideNav