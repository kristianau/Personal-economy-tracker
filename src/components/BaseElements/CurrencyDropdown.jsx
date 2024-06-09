import Select from "react-select";
import { currency } from "../../utils/CurrencyOptions";
import { customStylesCurrency } from "../../utils/CustomStyles";

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
            styles={customStylesCurrency}
            name="currencySelect"
            isSearchable={false}
            options={currency}
            placeholder={placeholder}
        />
    )
}