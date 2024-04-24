export default function InputField({ labelText, placeholderText }) {
    return (
        <>
            <label>{ labelText }</label>
            <input name={ labelText } placeholder={ placeholderText } className="border border-gray-500 rounded w-32" />
            
        </>
    );
};