import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { FaCalendarAlt } from 'react-icons/fa';

export default function DateInput() {
    const [date, setDate] = useState(null);
    const today = new Date();
    
    return (
        <div>
            Date:
            <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat="dd/MM/yyyy" maxDate={today} minDate={null} placeholderText="dd/mm/yyyy" className="rounded border border-gray-500 ml-2" />
            <FaCalendarAlt />
        </div>
    );
};