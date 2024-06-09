
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