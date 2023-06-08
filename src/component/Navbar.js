import React, { useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import itemContext from '../context/item/ItemContext'



const Navbar = () => {

    const context = useContext(itemContext)
    const { setIsLogged, logout, isLogged } = context


    let location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    })



    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between">
                <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                    <span className="ml-3 text-xl">Todo List</span>
                </span>

                {isLogged ? <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={logout}> Logout </button>

                    :
                    location.pathname === '/login' ? <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={() => { navigate("/") }}> Home </button> : <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={() => { navigate("/login") }}> Login </button>}



            </div>
        </header>
    )
}

export default Navbar