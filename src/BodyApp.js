import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Widget from './Widget'

function BodyApp() {
  return (
    <div className="max-w-[1124px] w-full mx-auto h-full flex justify-around items-start mt-[25px]
    ">
        <Sidebar />
        <Feed />
        <Widget />
    </div>
  )
}

export default BodyApp