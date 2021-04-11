import React from 'react';

import Item from './Item';

const List = ({ deleteTodo, changeIsDone, todos }) => {
    return (
        <React.Fragment>
            <h2>やることリスト</h2>
            <ul>
                {todos.map((todo) => {
                    return <Item deleteTodo={deleteTodo} changeIsDone={changeIsDone} key={todo.id} todo={todo} />
                })}
            </ul>
        </React.Fragment>
    );
};

export default List;