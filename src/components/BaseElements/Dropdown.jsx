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

    return (
        <Select
            id={id}
            onChange={field.onChange}
            value={field.value}
            multiple={multiple}
            className="font-medium w-full"
            name="currencySelect"
            isSearchable={false}
            options={options}
            placeholder={placeholder}
        />
    )
}