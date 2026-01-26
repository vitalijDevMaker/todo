export const TodoList = ({ list, onRemove }) => {
  return list.length ? (
    <ul>
      {list.map((i) => (
        <li key={i.id}>
          <span>{i.text}</span>
          <button onClick={() => onRemove(i.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  ) : (
    "Пока список пуст"
  );
};
