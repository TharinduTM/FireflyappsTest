import React, { useEffect, useState } from 'react'
import { useStore } from 'react-redux'
import MenuService from '../../api/Api'
import Basket from './component/Basket'
import Category from './component/Category'
import MenuItem from './component/MenuItem'

function DashboardMain() {
    const [menuData, setMenuData] = useState([])
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("false")
    const [errorType, setErrorType] = useState("")

        useEffect(() => {
            MenuService.getMenu().then((response) => {
            setMenuData(response.data)
        }).catch((error)=>{
            setError(true)
            setErrorMsg("Something went wrong Please try again")
        })

    },[])
   
    return (
        <div className="md:grid grid-cols-12 bg-gray-50">
            <div className="col-span-1"></div>
            <div className="col-span-2">
                <Category menu={menuData} />
            </div>
            <div className="xl:col-span-5 col-span-4">
                <MenuItem menu={menuData}/>
            </div>
            <div className="xl:col-span-3 col-span-4">
                <Basket />
            </div>
            <div className="col-span-1"></div>
        </div>
    )
}

export default DashboardMain

