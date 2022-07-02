import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
    
    const userLogin=useSelector((state)=>state.userLogin)
    const {userInfo}=userLogin

    const dispatch=useDispatch()

    return (
        <div>
            Currently logged in as: {userInfo.name}
        </div>
  )
}

export default Header