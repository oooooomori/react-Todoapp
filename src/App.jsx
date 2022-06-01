import React, { useState } from 'react';

import './styles.css';

export const App = () => {
  const [todoText, setText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([
    'あああ',
    'いいい'
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    'ううう',
    'えええ'
  ]);

  const onchangeTodoText = (event) => {
    setText(event.target.value);
  };

  const onClickAdd = (index) => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // alert(todoText);
    setText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    // alert(index);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [
      ...completeTodos,
      incompleteTodos[index]
    ];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [
      ...incompleteTodos,
      completeTodos[index]
    ];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="テキストを入力"
          value={todoText}
          onChange={onchangeTodoText}
        />
        <button onClick={onClickAdd}>インプット</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                {todo}
                <div>
                  <button
                    onClick={() => onClickComplete(index)}
                  >
                    完了
                  </button>
                  <button
                    onClick={() => onClickDelete(index)}
                  >
                    削除
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のtodo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                {todo}
                <div>
                  <button
                    onClick={() => onClickBack(index)}
                  >
                    戻す
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};
