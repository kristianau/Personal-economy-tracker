import React from 'react'
import { savingsBuckets } from '../../utils/SavingsOptions'

export default function Modal({ setModal }) {

    const categoryList = savingsBuckets.map(category =>
        <li>{category.label}</li>
    );

    return (
        <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
            <div className='bg-white pt-2 p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-center text-lg'>Edit savings categories</h1>
                <ul>{categoryList}</ul>
                <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                    onClick={() => setModal(false)}
                >Exit</button>

            </div>
        </div>
    )
}