export default function List({ items, setItems }) {

    function handleRemove(itemTag) {
        const newList = items.filter((item) => item.editItemTag !== itemTag);
        setItems(newList);
    }

    return (
        <ul className="flex flex-col w-full gap-2">
            {items.map((item) => (
                <li key={item.editItemTag} className="p-2 flex flex-row gap-2 justify-between items-center rounded border-solid border border-slate-300">
                    <span className="p-1">{item.label}</span>
                    <button type="button" onClick={() => handleRemove(item.editItemTag)} className="p-1 text-red-950 rounded border border-solid border-slate-300 hover:bg-red-200">
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    )
}