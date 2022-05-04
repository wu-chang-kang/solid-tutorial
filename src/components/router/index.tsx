import { Component } from 'solid-js'
import { Router, useRoutes, Link } from 'solid-app-router'
import { routes } from './config'

const DemoRouter: Component = () => {
  const Routes = useRoutes(routes)
  return (
    <Router>
      <h1>Switch Page</h1>
      <div className="nav-links">
        <Link href="/page1">Page1</Link>
        <Link href="/page2">Page2</Link>
      </div>
      <Routes />
    </Router>
  )
}

export default DemoRouter
