import Modal from "./EditSavingsModal";
import { useState } from "react";

export default function ModalButton({ options, isExpenses }) {

    const [modal, setModal] = useState(false);

    return (
        <>
            <button className="w-24 font-medium rounded border-solid border py-1 px-6 border-slate-300 hover:bg-slate-300"
                onClick={() => setModal(true)}
            >Edit</button>
            {modal && <Modal setModal={setModal} options={options} isExpenses={isExpenses} />}
        </>
    )
}