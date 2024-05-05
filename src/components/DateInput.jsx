import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function DateInput({ label, id, placeholder, name }) {
    const [date, setDate] = useState(null);
    const today = new Date();
    
    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="font-semibold capitalize">
                        {label}
                </label>
            </div>
            
                <DatePicker
                    className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                    name={name}
                    selected={date}
                    onChange={((date) => setDate(date))} 
                    placeholderText={placeholder} 
                    maxDate={today} 
                    minDate={null} 
                    dateFormat="dd/MM/yyyy" 
                />
        
        </div>
    );
};