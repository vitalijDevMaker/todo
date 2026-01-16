import React, { useState } from "react";

export const TodoAdd = React.memo(({ onAdd }) => {
  const [task, setTask] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    onAdd(task);
    setTask("");
  };
  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        value={task}
        onInput={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Текст задания..."
      />
      <button>Добавить задание</button>
    </form>
  );
});
