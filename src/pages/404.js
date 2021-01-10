import React from 'react'
import { Link } from 'gatsby'

// markup
const NotFoundPage = () => (
  <main>
    <title>Not found</title>
    <div className="text-theme-orange">
      <h1>ERROR 404</h1>
      <h1>Page not found</h1>
    </div>

    <br />
    <Link to="/">Go home</Link>.
  </main>
)

export default NotFoundPage
