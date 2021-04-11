import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>, document.getElementById('root')
);

// JSX
// javascriptにHTMLのような記述ができる
// 開発するときにUIがわかりやすい
// --classはclassNameで記述
//      -jsのclassとが被るから
// --JSXの中にJSの式を書くときは{}の中に書く
// --コンポーネントを使うときは大文字で始める
// 2つ以上の要素を返せない