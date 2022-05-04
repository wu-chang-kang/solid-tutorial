import type { Component } from 'solid-js'
import BaseDemo from './components/base'
import ControlFlowDemo from './components/control-flow'
import DemoRouter from './components/router'
import TodoList from './components/todo-list'

const App: Component = () => {
  return (
    <>
      <BaseDemo />
      <ControlFlowDemo />
      <TodoList />
      <DemoRouter />
    </>
  )
}

export default App
