import { Component, createSignal, For } from 'solid-js'
import Todo, { TodoProps } from './todo'
import TodoInput, { TodoInputProps } from './todo-input'
import './style.less'

let uid = 0
const initState: Omit<TodoProps, 'onClick' | 'onRemove'>[] = [
  { id: uid++, done: false, description: 'write some docs' },
  { id: uid++, done: false, description: 'start writing JSConf talk' },
  { id: uid++, done: true, description: 'buy some milk' },
  { id: uid++, done: false, description: 'mow the lawn' },
  { id: uid++, done: false, description: 'feed the turtle' },
  { id: uid++, done: false, description: 'fix some bugs' }
]

const TodoList: Component = () => {
  const [todos, setTodos] = createSignal(initState)
  const onKeyDown: TodoInputProps['onKeyDown'] = (value) => {
    setTodos([...todos(), { description: value, done: false, id: uid++ }])
  }
  const onClick: TodoProps['onClick'] = (id, done) => {
    setTodos(todos().map((todo) => (todo.id === id ? { ...todo, done } : todo)))
  }
  const onRemove: TodoProps['onRemove'] = (id) => {
    setTodos(todos().filter((todo) => todo.id !== id))
  }
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="board">
        <TodoInput onKeyDown={onKeyDown} />
        <div className="todo-area">
          <div className="left">
            <h2>todo</h2>
            <For each={todos().filter((t) => !t.done)}>
              {(t) => <Todo {...t} onClick={onClick} onRemove={onRemove} />}
            </For>
          </div>
          <div className="right">
            <h2>done</h2>
            <For each={todos().filter((t) => t.done)}>
              {(t) => <Todo {...t} onClick={onClick} onRemove={onRemove} />}
            </For>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
