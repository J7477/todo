import React, { useContext, useEffect, useState } from 'react'
import itemContext from '../context/item/ItemContext'
import Notes from './Notes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {


    const context = useContext(itemContext)
    const { fetchNotes, notes, addNote, setIsLogged } = context

    const [value, setValue] = useState({ title: "" })


    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchNotes()
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    })


    const handleClick = (event) => {
        if (localStorage.getItem('token')) {
            event.preventDefault();
            addNote(value.title)
        } else {
            toast.error('Login to add items', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        setValue({ title: "" })
    }


    const onChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }


    return (

        <div className="h-200 w-full flex items-center justify-center  font-sans">
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" onChange={onChange} value={value.title} name='title' />
                        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal-200 hover:text-white hover:bg-teal-200" onClick={handleClick}>Add</button>
                    </div>
                </div>

                {notes.map((item) => {
                    return <Notes item={item} />
                })}

            </div>
        </div>
    )
}
