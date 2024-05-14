import InputField from "../InputElements/InputField";
import { expenses_validation, date_validation, expenses_amount_validation, expenses_category_data } from "../../utils/InputValidations";
import DateInput from "../InputElements/DateInput";
import AmountAndCurrency from "../InputElements/AmountAndCurrency";
import SavingsBucketInput from "../InputElements/SavingsBucketInput";

export default function DataInputs() {
    return (
        <div className="grid gap-5 md:grid-cols-1">
            <InputField {...expenses_validation} />
            <AmountAndCurrency {...expenses_amount_validation} />
            <DateInput {...date_validation} />
            <SavingsBucketInput {...expenses_category_data} />
        </div>
    )
}