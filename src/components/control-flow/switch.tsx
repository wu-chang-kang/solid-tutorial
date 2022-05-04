import { Component, Switch, Match, createSignal } from 'solid-js'

const SwitchDemo: Component = () => {
  const [x, setX] = createSignal(7)
  return (
    <div>
      <button onClick={() => setX(Math.random() * 15)}>Switch</button>
      <Switch fallback={<p>{x()} is between 5 and 10</p>}>
        <Match when={x() > 10}>
          <p>{x()} is greater than 10</p>
        </Match>
        <Match when={5 > x()}>
          <p>{x()} is less than 5</p>
        </Match>
      </Switch>
    </div>
  )
}

export default SwitchDemo
