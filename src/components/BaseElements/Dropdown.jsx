import Select from "react-select";
import { savingsOptions } from "../../utils/SavingsOptions";
import { expensesOptions } from "../../utils/ExpensesOptions";

export default function Dropdown({ placeholder, field, id }) {

    let multiple = false;
    let options = savingsOptions;
    if (id === "expensesCategory") {
        multiple = true;
        options = expensesOptions;
    }

    // Ensure that field.value is always an array when multiple is true
    const selectedValue = multiple ? (Array.isArray(field.value) ? field.value : []) : field.value;

    return (
        <Select
            id={id}
            onChange={field.onChange}
            defaultValue={selectedValue}
            multiple={multiple}
            className="font-medium w-full"
            name="currencySelect"
            isSearchable={false}
            options={options}
            placeholder={placeholder}
        />
    )
}