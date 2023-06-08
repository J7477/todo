import React, { useState } from 'react';
import ItemContext from './ItemContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const ItemState = (props) => {


    const host = 'http://localhost:5000'
    const navigate = useNavigate();

    const initial = []
    const [notes, setNotes] = useState(initial)

    const [isLogged, setIsLogged] = useState(false)


    const fetchNotes = async () => {
        const token = localStorage.getItem('token')

        if (isLogged) {
            try {
                const response = await axios.get(`${host}/api/notes/fetchallnotes`, {
                    headers: {
                        authToken: token
                    }
                })

                setNotes(response.data)
            } catch (err) {
                alert(err)
            }
        }
    }

    const addNote = async (title) => {
        const token = localStorage.getItem('token')

        try {
            const data = {
                title
            };

            let config = {
                headers: {
                    authToken: token
                }
            };

            await axios.post(`${host}/api/notes/addnote`, data, config)
        } catch (err) {
            alert(err)
        }
    }

    const delNote = async (id) => {

        const token = localStorage.getItem('token')
        try {
            await axios.delete(`${host}/api/notes/deletenote/${id}`, {
                headers: {
                    authToken: token
                }
            })
        } catch (err) {
            alert(err)
        }
    }

    const login = async (email, password) => {


        try {
            const response = await axios.post(`${host}/api/auth/login`, {
                email: email,
                password: password
            });
            if (response) {
                localStorage.setItem('token', response.data)
                setIsLogged(true)
                navigate('/')
            }
        } catch (err) {
            alert(err)
        }
    }


    const signUp = async (email, name, password) => {


        try {
            const response = await axios.post(`${host}/api/auth/createuser`, {
                email: email,
                name,
                password: password
            });

            if (response) {
                localStorage.setItem('token', response.data.authToken)
                setIsLogged(true)
                navigate('/')
            }
        } catch (err) {
            alert(err)
        }
    }


    const logout = () => {
        localStorage.clear()
        setIsLogged(false)
        window.location.reload();
        navigate('/')
    }

    return (
        <ItemContext.Provider value={{ fetchNotes, login, signUp, notes, setNotes, addNote, delNote, isLogged, logout, setIsLogged }}>
            {props.children}
        </ItemContext.Provider>
    )

}


export default ItemState;