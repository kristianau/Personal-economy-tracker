import React from "react";
import DateContainer from "./DateContainer";
import "react-datepicker/dist/react-datepicker.css"
import { Controller, useFormContext } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";


export default function DateInput({ label, id, placeholder }) {


    const { control } = useFormContext();

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
                        <DateContainer placeholder={placeholder} field={field} id={id} />

                    </div>
                )}
            />
        </div>
    );

};