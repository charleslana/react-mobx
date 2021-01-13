import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import TodoStore from "../../stores/TodoStore";
import './todo-list.css';

const TodoList: React.FC = () => {

    const todoStore = useContext(TodoStore);

    const {info, removeTodo, todos, toggleTodo} = todoStore;

    return(
        <div>
            <div className={'divider'}>Total task: {info.total}</div>
            <div className={'divider'}>Completed: {info.completed}</div>
            <div className={'divider'}>Pending: {info.notCompleted}</div>
            {info.total ?
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>
                                {todo.completed ?
                                    <span>Completed</span>
                                    :
                                    <span>Not Completed</span>
                                }
                            </td>
                            <td>
                                <button className={'buttonTodoList'} onClick={() => toggleTodo(todo.id)}>Toggle</button>
                                <button className={'buttonTodoList'} onClick={() => removeTodo(todo.id)}>Remove</button>
                            </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
                :
                <p>Empty</p>
            }
        </div>
    )
}

export default observer(TodoList);