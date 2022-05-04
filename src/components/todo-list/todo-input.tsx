import { Component, createSignal } from 'solid-js'

export interface TodoInputProps {
  onKeyDown: (value: string, e: KeyboardEvent) => void
}
const TodoInput: Component<TodoInputProps> = (props) => {
  const [value, setValue] = createSignal('')
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && value().trim() !== '') {
      props.onKeyDown(value(), e)
      setValue('')
    }
  }
  const onInput = (e: InputEvent) => {
    setValue((e.target as HTMLInputElement).value)
  }

  return (
    <input
      value={value()}
      onInput={onInput}
      class="new-todo"
      placeholder="what needs to be done?"
      onKeyDown={onKeyDown}
    />
  )
}

export default TodoInput
