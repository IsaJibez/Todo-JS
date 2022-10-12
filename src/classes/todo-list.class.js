import { Todo } from "./todo.class";

export class TodoList {

    constructor(){
        //this.todos = []
        this.cargarLocalStorage()
    }
    
    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id) //esto va a enviar el arreglo que he creado menos el id que excluyo
        this.guardarLocalStorage();
    }
    marcarCompletado(id){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado
                this.guardarLocalStorage();
                break; //para salir del ciclo.
            }
        }
    }

    eliminarCompletados(){
        
        this.todos = this.todos.filter(todo => !todo.completado) //devuelvo nadamas todos los que no estan completados
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos))
    }

    cargarLocalStorage(){
        /*
        if(localStorage.getItem('todo')){
            this.todos = JSON.parse(localStorage.getItem('todo'));
            //me lo devuelve en string, recuerda que lo unico que se graba en localStorage es string


        }else{
            this.todos = [];
        }
        */
        this.todos = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : []; 
       // this.todos = this.todos.map(obj => Todo.fromJson(obj))
       this.todos = this.todos.map(obj => Todo.fromJson(obj)) //lo mismo que lo de arriba
    }

}