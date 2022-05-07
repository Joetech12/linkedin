import React from 'react'
import Feed from './Feed'
import Footer2 from './Footer2'
import Sidebar from './Sidebar'
import Widget from './Widget'


function BodyApp() {
  return (
    <div className="flex flex-col items-center ">
      <div className="max-w-[1200px] w-full mx-auto h-full flex justify-around items-start xs:mt-[10px] md:mt-[25px]
      ">
          <Sidebar />
          <Feed />
          <Widget />
      </div>

      <Footer2/>
      
    </div>
  )
}

export default BodyApp