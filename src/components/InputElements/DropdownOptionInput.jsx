import React, { useEffect, useState } from "react";
import Dropdown from "../BaseElements/Dropdown";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "../Messages/ErrorMessage";
import ModalButton from "../BaseElements/ButtonToModal";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

export default function DropdownOptionInput({ label, id, placeholder }) {

    const { control } = useFormContext();

    // Fetch dropdown data from db
    const [options, setOptions] = useState([]);

    // if it is expenses dropdown then user should be able to select multiple categories
    let multiple = false;
    let collectionName = "savingsGoal";
    if (id === "expensesCategory") {
        multiple = true;
        collectionName = "expensesCategory";
    }
    const collectionRef = collection(db, collectionName);

    useEffect(() => {
        const getOptions = async () => {
            // Read the data
            try {
                const data = await getDocs(collectionRef);
                const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setOptions(filteredData)
            } catch (err) {
                console.error(err)
            }
            // Set the savings options list
        }
        getOptions();
    }, [collectionRef])

    return (
        <div className="flex flex-col w-full gap-2">
            <Controller

                name="categories"
                control={control}
                rules={{
                    required: 'required',
                }}
                render={({ field, fieldState: { error } }) => (

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <label htmlFor={id} className="font-semibold capitalize">
                                {label}
                            </label>
                            <ErrorMessage error={error} />
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <Dropdown placeholder={placeholder} field={field} options={options} multiple={multiple} id={id} />
                            <ModalButton options={options} isExpenses={multiple} />
                        </div>
                    </div >
                )
                }
            />
        </div >
    )
}