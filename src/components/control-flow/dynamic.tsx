import { Dynamic } from 'solid-js/web'
import { Component, createSignal, For, Switch, Match } from 'solid-js'

const RedThing: Component = () => <strong style="color: red">Red Thing</strong>
const GreenThing: Component = () => (
  <strong style="color: green">Green Thing</strong>
)
const BlueThing: Component = () => (
  <strong style="color: blue">Blue Thing</strong>
)

const options: Record<string, Component> = {
  red: RedThing,
  green: GreenThing,
  blue: BlueThing
}

const DynamicDemo: Component = () => {
  const [selected, setSelected] = createSignal('red')

  return (
    <>
      <select
        value={selected()}
        onInput={(e) => setSelected(e.currentTarget.value)}
      >
        <For each={Object.keys(options)}>
          {(color) => <option value={color}>{color}</option>}
        </For>
      </select>
      <Switch fallback={<BlueThing />}>
        <Match when={selected() === 'red'}>
          <RedThing />
        </Match>
        <Match when={selected() === 'green'}>
          <GreenThing />
        </Match>
      </Switch>
      <Dynamic component={options[selected()]} />
    </>
  )
}

export default DynamicDemo
