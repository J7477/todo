import React, { useContext, useState } from 'react'
import itemContext from '../context/item/ItemContext'


const Notes = (props) => {

    const [done, setDone] = useState(false)

    const { item } = props
    const context = useContext(itemContext)
    const { delNote } = context



    return (
        <div>
            <div className="flex mb-4 items-center">
                <p className={`w-full text-grey-darkest ${done ? 'line-through' : 'none'}`}>{item.title}</p>


                {/* {done ? <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green-200 hover:bg-green-200 " onClick={() => { setDone(false) }}>Undo</button> : <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green-200 hover:bg-green-200 " onClick={() => { setDone(true) }}>Done</button>} */}

                {done ? <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " onChange={() => { setDone(false) }} />

                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Undo</label>
                </div>
                    :
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " onChange={() => { setDone(true) }} />
                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Done</label>
                    </div>}

                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red-200 hover:text-white hover:bg-red-200" onClick={() => { delNote(item._id) }}>Remove</button>
            </div>
        </div>
    )
}

export default Notes