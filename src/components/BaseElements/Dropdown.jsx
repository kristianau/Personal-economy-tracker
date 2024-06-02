import Select from "react-select";

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
            className="font-medium w-full"
            name="currencySelect"
            isSearchable={false}
            options={options}
            placeholder={placeholder}
        />
    )
}