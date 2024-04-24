export default function InputField({ labelText, placeholderText }) {
    return (
        <>
            <label>
                { labelText }: <input name={ labelText } placeholder={ placeholderText } className="border border-gray-500 rounded ml-2" />
            </label>
        </>
    );
};