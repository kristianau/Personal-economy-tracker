export default function SavingsList({ savings, setSavings }) {

    function handleRemove(id) {
        const newList = savings.filter((item) => item.id !== id);
        setSavings(newList);
    }

    return (
        <ul className="flex flex-col w-full gap-2">
            {savings.map((item) => (
                <li key={item.id} className="p-2 flex flex-row gap-2 justify-between items-center rounded border-solid border border-slate-300">
                    <span className="p-1">{item.label}</span>
                    <button type="button" onClick={() => handleRemove(item.id)} className="p-1 text-red-950 rounded border border-solid border-slate-300 hover:bg-red-200">
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    )
}