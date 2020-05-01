import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList(props) {
  if (props.todos.length)
    return (
      <Paper>
        <List>
          {props.todos.map((todo, idx) => (
            <div key={todo.id}>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={props.removeTodo}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
              ></Todo>

              {idx === props.todos.length - 1 ? "" : <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
