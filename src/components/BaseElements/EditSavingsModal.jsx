import React, { useState } from 'react'
import { savingsBuckets } from '../../utils/SavingsOptions'
import camelCase from '../../utils/CamelCaseConverter';

export default function Modal({ setModal }) {

    const [savings, setSavings] = useState(savingsBuckets);
    const [newItem, setNewItem] = useState('');

    function handleRemove(id) {
        const newList = savings.filter((item) => item.id !== id);
        setSavings(newList);
    }

    function handleSave(updatedSavings) {
        // Update the original list
        savingsBuckets.splice(0, savingsBuckets.length, ...updatedSavings);
        setSavings(updatedSavings);
    }

    function handleAdd() {
        if (newItem.trim() !== '') {
            const newId = Math.max(...savings.map(item => item.id)) + 1;
            const newValue = camelCase(newItem);
            const newItemObj = { id: newId, value: newValue, label: newItem };
            setSavings([...savings, newItemObj]);
            setNewItem('');
            console.log(newItemObj);
        }
    }

    return (
        <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
            <div className='bg-white pt-2 p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-center text-lg'>Edit savings categories</h1>

                <ul>
                    {savings.map((item) => (
                        <li key={item.id}>
                            <span>{item.label}</span>
                            <button type="button" onClick={() => handleRemove(item.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
                    <input type='text' onChange={(e) => setNewItem(e.target.value)} className='p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60' />
                    <button type='button' onClick={handleAdd} className='w-24 font-medium rounded border-solid border py-1 px-6 border-slate-300'>Add</button>
                </div>

                <div>
                    <button type='button' className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                        onClick={() => {
                            handleSave(savings);
                            setModal(false);
                        }}
                    >Save</button>
                    <button type='button' className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                        onClick={() => setModal(false)}
                    >Cancel</button>
                </div>

            </div>
        </div>
    )
}