import DatePicker from "react-datepicker";

export default function DateContainer({ placeholder, field, id }) {
    const today = new Date();

    return (
        <DatePicker
            id={id}
            onChange={field.onChange}
            selected={field.value}
            className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
            placeholderText={placeholder}
            maxDate={today}
            minDate={null}
            dateFormat="dd/MM/yyyy"
            calendarStartDay={1}
        />
    );
}