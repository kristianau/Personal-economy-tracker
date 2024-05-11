import React from 'react'

export default function Modal({ setModal }) {
    return (
        <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
            <div className='bg-white p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-center text-lg my-5'>Edit savings categories</h1>
                <div className='flex justify-between mt-5'>
                    <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                        onClick={() => setModal(false)}
                    >Exit</button>
                </div>
            </div>
        </div>
    )
}