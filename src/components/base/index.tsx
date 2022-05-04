import { Component, createEffect, createMemo, createSignal, on } from 'solid-js'

const BaseDemo: Component = () => {
  const [count, setCount] = createSignal(0)
  // 派生信号
  const double = () => count() * 2
  // 相当于 Vue 的 computed，如果 count() 不变，就不会像上面那样每次都重新运行
  const memoDouble = createMemo(() => count() * 2)
  const increment = () => {
    setCount(count() + 1)
  }
  // 类型 Vue3 的 effect，如果内部值改变会自动追踪并运行函数
  createEffect(() => {
    console.log('count:', count())
  })

  // 使用 on 做一层包装，做到类似 Vue3 中的 watch 的效果
  createEffect(
    on(
      count,
      (count) => {
        console.log(count, double())
      },
      // defer 为 true 代表初次渲染的时候不执行
      { defer: true }
    )
  )
  return (
    <div>
      <h1>Base Demo</h1>
      count:{count()}
      double:{double()}
      memoDouble：{memoDouble()}
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default BaseDemo
