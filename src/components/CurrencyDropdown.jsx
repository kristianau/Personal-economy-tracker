import Select from "react-select";
import { currency } from "../utils/CurrencyOptions";

export default function CurrencyDropdown({ placeholder, field, id }) {

    return (
        <Select
            id={id}
            onChange={field.onChange}
            value={field.value}
            className="w-24 font-medium"
            name="currencySelect"
            isSearchable={false}
            options={currency}
            placeholder={placeholder}
        />
    )
}