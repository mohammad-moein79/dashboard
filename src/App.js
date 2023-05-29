import React from 'react';
import { Link, useRoutes } from 'react-router-dom';
import { Routes } from './routes';
import SideBar from './Components/SideBar/SideBar';
import TopBar from './Components/TopBar/TopBar';

function App() {

  let routes = useRoutes(Routes)

  return (
    <div className='flex p-3 bg-white dark:bg-[#0E131A] h-full'>
      <div className='w-[18%]'>
        <SideBar></SideBar>
      </div>
      <div className='w-[82%] pl-[19px] flex flex-col gap-[15px] '>
        <div>
          <TopBar />
        </div>
        <div className=''>
          {routes}
        </div>
      </div>
    </div>
  )
}

export default App
