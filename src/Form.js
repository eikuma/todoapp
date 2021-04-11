import React, { useState } from 'react';

const Form = ({ addTodo }) => {
    const [text, setText] = useState('');//初期値は空の文字列

    //フォームを送信するための関数
    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.length === 0) {//空白は登録できない
            alert('文字を入力してください');
            return;
        }
        addTodo(text);
        setText('');//登録したら入力欄を空にする
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />
            <button type='submit'>登録</button>
        </form>
    );
};

export default Form;
