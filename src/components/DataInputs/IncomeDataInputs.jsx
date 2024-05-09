import InputField from "../InputElements/InputField";
import { income_validation, date_validation, amount_validation } from "../../utils/InputValidations";
import DateInput from "../InputElements/DateInput";
import AmountAndCurrency from "../InputElements/AmountAndCurrency";

export default function DataInputs() {
    return (
        <div className="grid gap-5 md:grid-cols-1">
            <InputField {...income_validation} />
            <AmountAndCurrency {...amount_validation} />
            <DateInput {...date_validation} />
        </div>
    )
}