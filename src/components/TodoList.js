import React, {useState} from 'react'
import TodoFrom from './TodoFrom'
import Todo from './Todo'
function TodoList() {

    const [todos, setTodos] = useState([])



    ////////////// ADD TODO //////////////
    const addTodo = todo =>{

        
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)

        console.log(todos)
    }
    ////////////// REMOVE TODO //////////////
    const removeTodo = SelectedId =>{
        const removeArr = [...todos].filter(todo => todo.id !== SelectedId);
        setTodos(removeArr);
    }

    ////////////// COMPLETE TODO //////////////
    const completeTodo = SelectedId =>{
        let updateTodos = todos.map(todo =>{
            
            if(todo.id === SelectedId){
                todo.isComplete = !todo.isComplete
            }
            

            return todo
        })

        setTodos(updateTodos);
    }  

    // const editTodo = id =>{
        

    //     let EditTodoes = todos.map(todo =>{
    //         if(todo.id === id){
    //             var newText = prompt("Change to what ? ");
    //             if(!newText || /^\s*$/.test(newText)){
    //                 return todo;
    //             }
    //             todo.text = newText;
    //         }
    //             return todo
            
    //     })

    //     setTodos(EditTodoes);

    // }


    const updateTodo = (todoID, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
                return;
        }

        setTodos(prev => prev.map(item =>(item.id === todoID ? newValue: item)))
    }


    
return (
    <div>
        <h1>What is the plan for Today ?</h1>
        <TodoFrom onSubmit={addTodo}/>
        {/* <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={editTodo}/>  */}
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/> 
    </div>
)
}

export default TodoList