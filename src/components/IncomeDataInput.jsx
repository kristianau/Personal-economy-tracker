import InputField from "./InputField";
import { income_validation, amount_validation, date_validation } from "../utils/InputValidations";
import DateInput from "./DateInput";
import CurrencyInput from "./CurrencyInput";

export default function DataInputs() {
    return (
        <div className="grid gap-5 md:grid-cols-1">
            <InputField {...income_validation} />
            <InputField {...amount_validation} />
            <div className="flex flex-row gap-2 items-end">
                <DateInput {...date_validation} />
                <CurrencyInput />
            </div>
        </div>
    )
}