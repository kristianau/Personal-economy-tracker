import { useState } from "react";

export default function InputAmount({labelText, placeholderText}) {
    const [num, setNum] = useState("");

    const handleChange = event => {
        setNum(event.target.value);

        if(isNumber(event.target.value)) {
            console.log("Valid number");
        } else {
            console.log("Not a valid number");
        }
    };

    function isNumber(str) {
        if (str.trim() === "") {
            return false;
        }
        return !isNaN(str);
    }

    return (
        <div>
            <label>{ labelText }</label>
            <input id="num" name={ labelText } placeholder={ placeholderText } onChange={handleChange} value={num} className="border border-gray-500 rounded w-32" />
            
        </div>
    );
};