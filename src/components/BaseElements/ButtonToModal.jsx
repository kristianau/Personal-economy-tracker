import Modal from "./EditSavingsModal";
import { useState } from "react";
import { savingsBuckets } from '../../utils/SavingsOptions'
import { expensesOptions } from '../../utils/ExpensesOptions'

export default function ModalButton({ id }) {

    const [modal, setModal] = useState(false);

    let options = null;
    if (id === "expensesCategory") {
        options = expensesOptions;
    } else {
        options = savingsBuckets;
    }


    return (
        <>
            <button className="w-24 font-medium rounded border-solid border py-1 px-6 border-slate-300 hover:bg-slate-300"
                onClick={() => setModal(true)}
            >Edit</button>
            {modal && <Modal setModal={setModal} options={options} />}
        </>
    )
}