import Select from "react-select";
import { customStylesOptions } from "../../utils/CustomStyles";

export default function Dropdown({ placeholder, field, options, multiple, id }) {

    // Ensure that field.value is always an array when multiple is true
    const selectedValue = multiple ? (Array.isArray(field.value) ? field.value : [field.value]) : field.value;

    return (
        <Select
            id={id}
            onChange={field.onChange}
            defaultValue={selectedValue}
            multiple={multiple}
            isMulti={multiple}
            styles={customStylesOptions}
            name="currencySelect"
            isSearchable={false}
            options={options}
            placeholder={placeholder}
        />
    )
}