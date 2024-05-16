import Select from "react-select";
import { currency } from "../../utils/CurrencyOptions";

export default function CurrencyDropdown({ placeholder, field, id }) {

    // Find the selected option based on its value
    const selectedOption = currency.find(option => option.value === field.value);

    const handleCurrencyChange = (selectedOption) => {
        // Extract the value property of the selected option
        const selectedValue = selectedOption ? selectedOption.value : null;
        // Call the onChange function provided by the Controller
        field.onChange(selectedValue);
    };

    return (
        <Select
            id={id}
            onChange={handleCurrencyChange}
            value={selectedOption}
            className="w-24 font-medium"
            name="currencySelect"
            isSearchable={false}
            options={currency}
            placeholder={placeholder}
        />
    )
}