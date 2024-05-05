import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Controller, useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion"
import { MdError } from "react-icons/md"


export default function DateInput({ label, id, placeholder }) {
    const today = new Date();

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
                    render={({field, fieldState: { error }}) => (
                        <div>
                            <div className="flex justify-between">
                                <label htmlFor={id} className="font-semibold capitalize">
                                        {label}
                                </label>
                                <AnimatePresence mode="wait" initial={false}>
                                    {error && (
                                        <InputError
                                            message={error.message}
                                            key={error.message} 
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                            <DatePicker
                                onChange={field.onChange}
                                selected={field.value}
                                className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                                placeholderText={placeholder}
                                maxDate={today} 
                                minDate={null} 
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                    )}
                />
        </div>
    );

};

const InputError = ({ message }) => {
    return (
        <motion.p 
            className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
            {...framer_error}
        >
            <MdError />
            {message}
        </motion.p>
    )
};

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y:10 },
    transition: { duration: 0.2 },
};