import InputField from "../components/InputField";
import DateInput from "../components/DateInput";

export default function IncomePage() {
    return (
        <div>
            <InputField labelText="Source" placeholderText="Salary" />
            <DateInput />
        </div>
    );
};