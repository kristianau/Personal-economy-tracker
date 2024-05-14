import Select from "react-select";
import { savingsBuckets } from "../../utils/SavingsOptions";
import { expensesOptions } from "../../utils/ExpensesOptions";

export default function SavingsBucketDropdown({ placeholder, field, id }) {

    let multiple = false;
    let options = savingsBuckets;
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