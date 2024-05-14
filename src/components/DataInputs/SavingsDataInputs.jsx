import { savings_amount_validation } from "../../utils/InputValidations";
import AmountAndCurrency from "../InputElements/AmountAndCurrency";
import SavingsBucketInput from "../InputElements/SavingsBucketInput";
import { savings_bucket_data } from "../../utils/InputValidations";

export default function DataInputs() {
    return (
        <div className="grid gap-5 md:grid-cols-1">
            <AmountAndCurrency {...savings_amount_validation} />
            <SavingsBucketInput {...savings_bucket_data} />
        </div>
    )
}