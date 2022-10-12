import './styles.css';

import {Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';




export const todoList = new TodoList(); //esto es el arreglo que contiene todo nuestros Todo

//todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml); //es lo mismo que lo de arriba

console.log('todos',todoList.todos)

/*
const tarea = new Todo( 'Aprender Javascript');
todoList.nuevoTodo(tarea);

tarea.completado = false;


console.log(todoList)

crearTodoHtml(tarea);
*/