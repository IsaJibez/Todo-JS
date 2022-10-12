export class Todo {
//Todo esto es para que no me retorne como objeto al venir del localStorage, si no como lo declare mas abajo, un Todo
    static fromJson ({id,tarea,completado,creado}){ 
        const tempTodo = new Todo(tarea);

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor(tarea){
        this.tarea = tarea;

        this.id = new Date().getTime(); //123456789
        this.completado = false;
        this.creado = new Date();
    }
}