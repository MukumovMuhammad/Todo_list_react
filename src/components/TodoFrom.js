import React, {useState} from 'react'

function TodoFrom(props) {

    const [input, setInput] = useState('');

    ////////////// CHANGE //////////////
    const handleChange = e =>{
        setInput(e.target.value)
    }

    ////////////// SUBMIT //////////////
    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text:input

        })

        setInput('')

    }

    return (
    <form className='todo-form' onSubmit={handleSubmit}> 
        <input type='text'
        value={input}
        placeholder='Add your todoes'
        name='text'
        className='todo-input'
        onChange={handleChange}
        />

        <button className='todo-button'>Add Todo</button>
    </form>
    );
}

export default TodoFrom