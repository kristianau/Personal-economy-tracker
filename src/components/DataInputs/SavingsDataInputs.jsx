import { savings_amount_validation } from "../../utils/InputValidations";
import AmountAndCurrency from "../InputElements/AmountAndCurrency";
import { savings_bucket_data } from "../../utils/InputValidations";
import DropdownOptionInput from "../InputElements/DropdownOptionInput";
import DateInput from "../InputElements/DateInput";
import { date_validation } from "../../utils/InputValidations";

export default function DataInputs() {
    return (
        <div className="grid gap-5 md:grid-cols-1">
            <AmountAndCurrency {...savings_amount_validation} />
            <DropdownOptionInput {...savings_bucket_data} />
            <DateInput {...date_validation} />
        </div>
    )
}