import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import TodoAdd from "../views/todo-add/TodoAdd";
import TodoList from "../views/todo-list/TodoList";

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route path={'/'} exact={true} component={TodoList}/>
                <Route path={'/add'} exact={true} component={TodoAdd}/>
            </Switch>
        );
    }
}

export default Routes;