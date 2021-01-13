import {v4} from "uuid";
import {TodoStoreInterface} from '../interfaces/TodoStoreInterface';

class Todos {
    static todo: TodoStoreInterface[] = [
        {
            id: v4(),
            title: 'Item 1',
            completed: true
        },
        {
            id: v4(),
            title: 'Item 2',
            completed: true
        },
        {
            id: v4(),
            title: 'Item 3',
            completed: false
        },
        {
            id: v4(),
            title: 'Item 4',
            completed: false
        },
        {
            id: v4(),
            title: 'Item 5',
            completed: false
        },
        {
            id: v4(),
            title: 'Item 6',
            completed: false
        }
    ]
}

export default Todos;