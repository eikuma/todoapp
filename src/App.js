import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Title from './Title';
import List from './List';
import Form from './Form';


// 関数コンポーネントが実行されるとreturnの中のJSXが画面に描写（レンダリング）される

const App = () => {//コンポーネント
    // stateを使うやり方
    const [name, setName] = useState('いくま')// react hook
    // const [stateの値, stateを更新する関数]=useState(stateの初期値)
    const changeName = () => {
        setName('太郎')
    }
    const [todos, setTodos] = useState([
        {
            content: '掃除をする',
            id: nanoid(),
            isDone: false,
        },
        {
            content: '洗濯をする',
            id: nanoid(),
            isDone: false,
        },
        {
            content: '料理をする',
            id: nanoid(),
            isDone: false,
        },
        {
            content: '運動をする',
            id: nanoid(),
            isDone: false,
        }
    ]);


    //todoに新しい要素を追加する関数
    const addTodo = (text) => {
        // スプレッド構文「...」
        // 配列をオブジェクトの中身を展開する
        // ->配列やオブジェクトを非破壊的に変更できる
        setTodos([...todos, { content: text, id: nanoid(), isDone: false }])
    }


    /*stateを使わないやり方
    let name = 'いくま'
    const changeName = () => {
        // nameが書き変わった段階で関数が再実行（再描写）すればよい=>stateを使う
        name = 'たろう';
    }
    */


    //todoを削除する関数
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    // 自分の解答
    // const setIsDone = (id, isDone) => {
    //     todos.map((todo) => {
    //         if (todo.id === id) {
    //             todo.isDone = isDone;
    //         }
    //     })
    // }

    const changeIsDone = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: !todo.isDone,
                }
            } else {
                return {
                    ...todo,
                }
            }
        }))
    }

    return (
        <React.Fragment>
            <Title user={name} />
            <List deleteTodo={deleteTodo} changeIsDone={changeIsDone} todos={todos} />
            <Form addTodo={addTodo} />
            <button onClick={changeName}>名前変更のボタン</button>
        </React.Fragment>
    );
};

export default App;
// props: 親コンポーネントから子コンポーネントに値を渡すもの<=>子コンポーネントから親コンポーネントに値を渡せない
// state：状態と呼ばれるReactで見た目を扱う変数を管理するためのもの