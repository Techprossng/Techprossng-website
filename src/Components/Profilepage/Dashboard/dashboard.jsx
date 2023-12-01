import React from 'react';
import Navigation from '../Profilenavigation/navigation';
import Sidebar from '../Profilenavigation/sidebar';

const Dashboard = () => {
  return (
    <section>
    <Navigation />

    {/* path change */}

    <div className='bg-[aqua] mt-24 border'>
        <div className='border-r-1 w-1/5 bg-[red] flex justify-center'>
            <h1>Dashboard</h1>
        </div>
    </div>
    {/* sidebar */}

    <div className='bg-[#fff] flex justify-end border border-r-1 w-1/6 h-screen'>
        <Sidebar />
    </div>
    


    {/* main content */}

    {/* footer */}



    </section>
  )
}

export default Dashboard
