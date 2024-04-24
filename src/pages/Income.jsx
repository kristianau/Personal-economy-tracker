import InputField from "../components/InputField";
import DateInput from "../components/DateInput";
import InputAmount from "../components/MoneyAmountInput";

export default function IncomePage() {
    return (
        <div>
            <InputField labelText="Source" placeholderText="Salary" />
            <DateInput />
            <InputAmount labelText="Amount" placeholderText="123.45" />
        </div>
    );
};