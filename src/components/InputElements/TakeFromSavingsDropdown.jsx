import React, { useEffect, useState } from "react";
import Dropdown from "../BaseElements/Dropdown";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "../Messages/ErrorMessage";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

export default function TakeFromSavingsDropdown({ label, id, placeholder }) {

    const { control } = useFormContext();

    const [options, setOptions] = useState([]);

    let multiple = false;
    const collectionRef = collection(db, "savingsGoal");

    useEffect(() => {
        const getOptions = async () => {
            // Read the data
            try {
                const data = await getDocs(collectionRef);
                const filteredData = data.docs.map((doc) => ({ ...doc.data(), docId: doc.id }))
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
                /* wrapping DatePicker in Controller so I can register and validate input with react-hook-forms*/
                name="takenFromSavingsCategory"
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
                        </div>
                    </div >
                )
                }
            />
        </div >
    )
}
