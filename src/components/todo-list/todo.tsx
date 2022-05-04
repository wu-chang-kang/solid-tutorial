import { Component } from 'solid-js'

export interface TodoProps {
  id: number
  done: boolean
  description: string
  onClick: (id: number, done: boolean) => void
  onRemove: (id: number) => void
}
const Todo: Component<TodoProps> = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={props.done}
        onChange={() => props.onClick(props.id, !props.done)}
      />
      {props.description}
      <button onClick={() => props.onRemove(props.id)}>x</button>
    </label>
  )
}

export default Todo
