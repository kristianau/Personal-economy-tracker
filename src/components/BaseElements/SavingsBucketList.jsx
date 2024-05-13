export default function SavingsList({ savings, setSavings }) {

    function handleRemove(id) {
        const newList = savings.filter((item) => item.id !== id);
        setSavings(newList);
    }

    return (
        <ul>
            {savings.map((item) => (
                <li key={item.id}>
                    <span>{item.label}</span>
                    <button type="button" onClick={() => handleRemove(item.id)}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    )
}