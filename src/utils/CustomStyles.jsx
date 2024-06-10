
export const customStylesCurrency = {
    dropdownIndicator: (baseStyles) => ({
        ...baseStyles,
        "&:hover": { cursor: "pointer" }
    }),
    option: (baseStyles, state) => ({
        ...baseStyles,
        "&:hover": {
            cursor: "pointer",
            background: "pink"
        },
        textDecoration: state.isSelected ? "underline" : "",
        background: "white",
        color: "black"
    }),
    container: (baseStyles, state) => ({
        ...baseStyles,
        width: '100%',
        minWidth: '100px',
    })
}

export const customStylesOptions = {
    dropdownIndicator: (baseStyles) => ({
        ...baseStyles,
        "&:hover": { cursor: "pointer" }
    }),
    multiValueRemove: (baseStyles) => ({
        ...baseStyles,
        "&:hover": {
            cursor: "pointer"
        }
    }),
    clearIndicator: (baseStyles) => ({
        ...baseStyles,
        "&:hover": {
            cursor: "pointer"
        }
    }),
    option: (baseStyles, state) => ({
        ...baseStyles,
        "&:hover": {
            cursor: "pointer",
            background: "pink"
        },
        textDecoration: state.isSelected ? "underline" : "",
        background: "white",
        color: "black"
    }),
    container: (baseStyles, state) => ({
        ...baseStyles,
        width: state.isMulti ? 208 : "100%"
    }),
    multiValue: (baseStyles) => ({
        ...baseStyles,
        maxWidth: 208, // Ensure multi-value items don't cause overflow
    }),
}