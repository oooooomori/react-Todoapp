import React, { useState } from 'react';

import './styles.css';

export const App = () => {
  const [todoText, setText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([
    'あああ',
    'いいい'
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    'あああ',
    'いいい'
  ]);

  return (
    <>
      <div className="input-area">
        <input type="text" />
        <button>インプット</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                {todo}
                <div>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のtodo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                {todo}
                <div>
                  <button>戻す</button>
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
