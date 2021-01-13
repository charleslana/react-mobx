import {makeObservable, observable, action, computed} from 'mobx';
import Todos from '../api/Todos';
import {TodoStoreInterface} from "../interfaces/TodoStoreInterface";
import {createContext} from "react";

class TodoStore {

    todos = Todos.todo;

    constructor() {

        makeObservable(this, {
            todos: observable,
            addTodo: action,
            toggleTodo: action,
            removeTodo: action,
            info: computed
        });
    }

    addTodo = (todo: TodoStoreInterface) => {
        this.todos.push(todo);
    }

    toggleTodo = (id: string) => {
        this.todos = this.todos.map(todo => {
           if (todo.id === id) {
               return {
                   ...todo,
                   completed: !todo.completed
               }
           }
           return todo;
        });
    }

    removeTodo = (id: string) => {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    get info() {
        return {
            total: this.todos.length,
            completed: this.todos.filter(todo => todo.completed).length,
            notCompleted: this.todos.filter(todo => !todo.completed).length
        }
    }

}

export default createContext(new TodoStore());