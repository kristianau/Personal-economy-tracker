import React, { useState } from 'react'
import camelCase from '../../utils/CamelCaseConverter'
import SavingsList from './SavingsBucketList'
import { collection, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Modal({ setModal, options, isExpenses }) {

    const [items, setItems] = useState(options);
    const [newItem, setNewItem] = useState("");
    let dbName = null;

    if (isExpenses) dbName = "expensesCategory"
    else dbName = "savingsGoal"

    const collectionRef = collection(db, dbName);

    async function handleSave() {
        // Filter out unique items between database list and ui list
        const unique = []
        for (var i = 0; i < items.length; i++) {
            for (var j = 0; j < options.length; j++) {
                if (items[i].editItemTag === options[j].editItemTag) break;
            }
            unique.push(items[i]);
        }

        // 1. if the item is in db and unique items list (not in ui list) then it should be removed from db
        // 2. if the item is in ui and unique items list (not in db) then it is new and should be added to db

        // 1. keep or delete items from the original savings option list
        for (i = 0; i < options.length; i++) {
            var deleteItem = true;
            for (j = 0; j < unique.length; j++) {
                if (options[i].editItemTag === unique[j].editItemTag) {
                    deleteItem = false;
                    break;
                }
            }
            if (deleteItem) {
                const itemDoc = doc(db, dbName, options[i].id)
                await deleteDoc(itemDoc);
            }
        }

        // 2. add new items to the db
        for (i = 0; i < unique.length; i++) {
            var addItem = true;
            for (j = 0; j < options.length; j++) {
                if (unique[i].editItemTag === options[j].editItemTag) {
                    addItem = false;
                    break;
                }
            }
            if (addItem) {
                try {
                    await addDoc(collectionRef, {
                        editItemTag: unique[i].editItemTag,
                        label: unique[i].label,
                        value: unique[i].value,
                    });
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
        // close the modal
        setModal(false);
    }

    function handleAdd() {
        if (newItem.trim() !== '') {
            const newId = Math.max(...items.map(item => item.editItemTag), 0) + 1;
            const newValue = camelCase(newItem);
            const newItemObj = { editItemTag: newId, value: newValue, label: newItem };
            items.push(newItemObj)
        }
        setNewItem("");
    }

    return (
        <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center z-10'>
            <div className='bg-white pt-5 p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-center text-2xl pb-4'>{isExpenses ? "Edit expenses categories" : "Edit savings categories"}</h1>
                <div className="flex flex-col w-full gap-2">

                    <SavingsList items={items} setItems={setItems} />

                    <div className="flex flex-row gap-2 items-center my-4">
                        <input type='text' onChange={(e) => setNewItem(e.target.value)} placeholder='New savings category' className='p-2 font-medium border rounded-md border-black placeholder:opacity-60 bg-green-100' />
                        <button type='button' onClick={handleAdd} className='w-24 font-medium rounded border-solid border py-1 px-6 border-black hover:bg-green-200 text-green-950'>Add</button>
                    </div>

                    <div className="flex flex-row gap-2 justify-center">
                        <button type='button' className='w-28 font-semibold rounded border-solid border py-1 px-6 border-slate-300 hover:bg-slate-300'
                            onClick={() => {
                                handleSave();
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