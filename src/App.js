import React, { useState }  from 'react';
import './App.css'
import HookCounter from './Components/HookCounter'
import HookCounter2ArrowFunction from './Components/HookCounter2ArrowFunction';
import HookCounter3SpreadOperator from './Components/HookCounter3SpreadOperator'
import HookCounter4Array from './Components/HookCounter4Array';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching'
import ComponentC from './Components/ComponentC'
import ComponentE from './Components/ComponentE'
import ReducerCounter from './Components/ReducerCounter';
import ReducerCounterTwo from './Components/ReducerCounterTwo'
import ReducerCounterThree from './Components/ReducerCounterThree'
import ReducerApp from './Components/ReducerApp'


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return(
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue (e.target.value)} placeholder="Add new todo" />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Play some DOTA',
      isCompleted: false
    },
    {
      text: 'Write a review',
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };




  

  return (
    <div className="app">
      <h3>Component C:</h3>
      <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>     
      </UserContext.Provider>
      
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      <div>
        <HookCounter />
      </div>
      <div>
        <HookCounter2ArrowFunction />
      </div>
      <div>
        <HookCounter3SpreadOperator />
      </div>
      <div>
        <HookCounter4Array />
      </div>
      {/* <div>
        <HookMouse />
      </div> */}
      <div>
        <MouseContainer />
      </div>
      <div>
        <IntervalHookCounter />
      </div>
      <div>
        <DataFetching />
      </div>
      <div>
        <ReducerCounterThree />
      </div>
      <div>
        <ReducerApp />
      </div>
    </div>
  )
}

export default App;