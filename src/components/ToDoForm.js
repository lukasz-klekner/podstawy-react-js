const ToDoForm = ({ draft, onSubmit, onChange }) => (
    <>
    <input type="text" value={draft} onChange={onChange} />
    <button onClick={onSubmit}>Dodaj task do listy</button>
    </>
)

export default ToDoForm;