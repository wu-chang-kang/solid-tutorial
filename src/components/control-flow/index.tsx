import { Component } from 'solid-js'
import DynamicDemo from './dynamic'
import ForDemo from './for'
import ShowDemo from './show'
import SwitchDemo from './switch'

const ControlFlowDemo: Component = () => {
  return (
    <div>
      <h1>Control Flow Demo</h1>
      <ShowDemo />
      <ForDemo />
      <SwitchDemo />
      <DynamicDemo />
    </div>
  )
}

export default ControlFlowDemo
