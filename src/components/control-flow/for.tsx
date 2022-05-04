import { Component, createSignal, For, Index } from 'solid-js'

// solid-js 中的控制流程语法可以和 React 一致，但是由于没有虚拟 DOM，使用 JS 来控制流程语句会重新创建所有的元素，造成性能损失。官方在这点建议使用内置的流程组件，通过这个组件来达到性能的优化，因为它是根据引用自动设置 key 的，不需要我们手动绑定
const ForDemo: Component = () => {
  const [cats, setCats] = createSignal([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ])
  return (
    <ul>
      <button
        onClick={() =>
          setCats((c) => [
            ...c,
            { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
          ])
        }
      >
        Add Cat
      </button>
      <h2>Native</h2>
      {cats().map((cat, i) => (
        <li>
          <a target="_blank" href={`https://www.youtube.com/watch?v=${cat.id}`}>
            {i + 1}: {cat.name}
          </a>
        </li>
      ))}
      <h2>For</h2>
      <For each={cats()}>
        {(cat, i) => (
          <li>
            <a
              target="_blank"
              href={`https://www.youtube.com/watch?v=${cat.id}`}
            >
              {i() + 1}: {cat.name}
            </a>
          </li>
        )}
      </For>
      <h2>Index</h2>
      {/* 当然，因为有时我们不需要用值作为键，而且可能因此获得一些副作用，所以 solid 还提供了以索引作为键的组件 */}
      <Index each={cats()}>
        {/* 注意此时的 item 和 index */}
        {(cat, i) => (
          <li>
            <a
              target="_blank"
              href={`https://www.youtube.com/watch?v=${cat().id}`}
            >
              {i + 1}: {cat().name}
            </a>
          </li>
        )}
      </Index>
    </ul>
  )
}

export default ForDemo
