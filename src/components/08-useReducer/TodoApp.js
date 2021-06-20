import React, { useReducer, useEffect } from 'react'
import './style.css'

//IMPORTACIÓN DE LA FUNCIÓN CREADA PARA CONTROLAR LOS DATOS 
import { todoReducer } from './todoReducer'

//CUSTOM HOOKS
import { useForm } from '../../hooks/useForm'


//ESTA FUNCION EVITA EL RECARGUE DEL USEREDUCER Y DEVUELVE EL VALOR AL SEGUNDO ARGUMENTO AL INITIALSTATE  
const init = () => {
    //SI UN DATO DEVUELVE NULL SE PUEDE HACER UN CONDICIONAL ASI 
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

    //HOOK DE ESTADO TIPO FORM
    const [{ descripcion }, handleInputChange, reset] = useForm({
        descripcion: ''
    })

    // PRIMER ARGUMENTO DESESTRUCTURADO ES EL RETORNO DE LA FUNCIÓN 
    // EL SEGUNDO ARGUMENTO DESESTRUCTURADO ES EL SEGUNDO PARAMETRO DE LA FUNCION 

    // PRIMER ARGUMENTO DEL REDUCER ES LA FUNCION REDUCER A EJECUTAR
    // EL SEGUNDO ES EL VALOR INICIAL DEL ESTADO 
    // EL TERCERO EVITA EL RECARGUE DE LA FUNCION TIPO USEMEMO E INICIALIZA EL SEGUNDO ARGUMENTO DEL USEREDUCER

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    // VER QUE LOS CAMBIOS SE ACTUALIZEN
    console.log(todos)
  
    //EN CASO DE HABER UN CAMBIO EN TODOS SE EJECUTA EL EFECTO 
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    // FUNCION HANDLESUBMIT - ENVIO DE DATOS
    const handleSubmit = (e) => {

        e.preventDefault()

        //VALIDACION SENCILLA PARA QUE NO HAGA NADA - SE UTILIZA EL TRIM PARA QUITAR LOS ESPACIOS INICIALES EN EL TEXTO
        if (descripcion.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: descripcion,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        // ESTE ACTIVA LA FUNCION DEL REDUCER Y SE ACTIVA OTRA VEZ LA FUNCION 
        // AL ACTIVARSE LA FUNCION POR DETRAS DEVUELVE EL ESTADO Y SE ACTUALIZA 
        // ESTO HARÍA LO MISMO QUE EL SETSTATE CUANDO HAY UN CAMBIO SE ACTUALIZA EL ESTADO 
        // Y DEVUELVE LOS DATOS EN LA VARIABLE DESESTRUCTURADA TODOS

        dispatch(action)

        reset()

    }

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action)

    }

    const handleToggle = (todoId) => {

        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action)

    }


    return (
        <div>
            <h1>Todo App : {todos.length}</h1>
            <hr />

            <div className="row">
                <div className="col-md-5">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => {
                                return (
                                    <li key={todo.id} className="list-group-item">

                                        <p
                                            /* className={todo.done === true ? "complete" : ""} */
                                            className={`${todo.done && 'complete'}`}
                                            onClick={() => handleToggle(todo.id)}
                                        >
                                            {i + 1} . {todo.desc}
                                        </p>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(todo.id)}
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-md-5">
                    <h3>Agregar Todo</h3>
                    <hr />
                    <form action="" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Agregar tarea"
                            className="form-control"
                            name="descripcion"
                            value={descripcion}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />

                        <div className="d-grid mt-2">
                            <button className="btn btn-outline-primary" type="submit">Button</button>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}
