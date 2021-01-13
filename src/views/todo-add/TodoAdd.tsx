import React, {useContext, useState} from 'react';
import {observer} from 'mobx-react-lite';
import TodoStore from "../../stores/TodoStore";
import {v4} from 'uuid';
import './todo-add.css';

const TodoAdd: React.FC = () => {

    const todoStore = useContext(TodoStore);

    const {info, addTodo} = todoStore;

    const [title, setTitle] = useState('');

    return(
        <div>
            <div className={'divider'}>Total task: {info.total}</div>
            <div className={'divider'}>Completed: {info.completed}</div>
            <div className={'divider'}>Pending: {info.notCompleted}</div>
            <input className={'inputTodoAdd'} type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <button className={'buttonTodoAdd'}
                    onClick={
                        _ => {
                            addTodo({
                                id: v4(),
                                title: title,
                                completed: false
                            })
                            setTitle('')
                    }}
            >Add</button>
        </div>
    )
}

export default observer(TodoAdd);