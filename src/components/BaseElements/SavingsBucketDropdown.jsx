import Select from "react-select";
import { savingsBuckets } from "../../utils/SavingsOptions";

export default function SavingsBucketDropdown({ placeholder, field, id }) {

    return (
        <Select
            id={id}
            onChange={field.onChange}
            value={field.value}
            className="font-medium w-full"
            name="currencySelect"
            isSearchable={false}
            options={savingsBuckets}
            placeholder={placeholder}
        />
    )
}