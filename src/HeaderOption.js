import React from 'react'

function HeaderOption({Avatar, Icon, title}) {
  return (
    <div className="flex flex-col items-center justify-center mr-[20px] text-gray-500 cursor-pointer hover:text-black">
        {Icon && <Icon className="" />}
        {/* {Avatar && <Avatar className="" src={Avatar} />} */}
        <h3 className="text-[12px]">{title}</h3>
    </div>
  )
}

export default HeaderOption