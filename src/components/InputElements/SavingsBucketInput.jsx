import React, { useState } from "react";
import SavingsBucketDropdown from "../BaseElements/SavingsBucketDropdown";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "../Messages/ErrorMessage";
import Modal from "../BaseElements/EditSavingsModal";

export default function SavingsBucketInput({ label, id, placeholder }) {

    const { control } = useFormContext();
    const [modal, setModal] = useState(false);

    return (
        <div className="flex flex-col w-full gap-2">
            <Controller
                /* wrapping DatePicker in Controller so I can register and validate input with react-hook-forms*/
                name="dateController"
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
                            <SavingsBucketDropdown placeholder={placeholder} field={field} id={id} />
                            <button className="w-24 font-medium rounded border-solid border py-1 px-5 border-slate-300"
                                onClick={() => setModal(true)}
                            >Edit</button>
                            {modal && <Modal setModal={setModal} />}
                        </div>
                    </div >
                )
                }
            />
        </div >
    )
}