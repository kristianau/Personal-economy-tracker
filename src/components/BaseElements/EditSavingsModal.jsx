import React, { useState } from 'react'
import { savingsBuckets } from '../../utils/SavingsOptions'
import camelCase from '../../utils/CamelCaseConverter'
import SavingsList from './SavingsBucketList'

export default function Modal({ setModal }) {

    const [savings, setSavings] = useState(savingsBuckets);
    const [newItem, setNewItem] = useState('');


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
            <div className='bg-white pt-5 p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-center text-2xl pb-4'>Edit savings categories</h1>
                <div className="flex flex-col w-full gap-2">

                    <SavingsList savings={savings} setSavings={setSavings} />

                    <div className="flex flex-row gap-2 items-center my-4">
                        <input type='text' onChange={(e) => setNewItem(e.target.value)} placeholder='New savings category' className='p-2 font-medium border rounded-md border-black placeholder:opacity-60 bg-green-100' />
                        <button type='button' onClick={handleAdd} className='w-24 font-medium rounded border-solid border py-1 px-6 border-black hover:bg-green-200 text-green-950'>Add</button>
                    </div>

                    <div className="flex flex-row gap-2 justify-center">
                        <button type='button' className='w-28 font-semibold rounded border-solid border py-1 px-6 border-slate-300 hover:bg-slate-300'
                            onClick={() => {
                                handleSave(savings);
                                setModal(false);
                            }}
                        >SAVE</button>
                        <button type='button' className='w-28 font-semibold rounded border-solid border py-1 px-6 border-slate-300 hover:bg-slate-300'
                            onClick={() => setModal(false)}
                        >CANCEL</button>
                    </div>
                </div>

            </div>
        </div>
    )
}