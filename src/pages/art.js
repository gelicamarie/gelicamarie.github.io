import React from 'react'
import { Link } from 'gatsby'

const art = () => (
  <main>

    <div className="h-screen">
      <p className="text-right text-theme-white text-sm mr-3">
        <Link to="/">Angelica Turla.</Link>
      </p>
      <div className="flex items-center flex-row-reverse mr-6 md:mr-12 xl:mr-28">

        <h2 className="mt-8 text-theme-orange text-right text-4xl">
          i draw,
          <br />
          sometimes.
        </h2>

      </div>
    </div>

  </main>
)

export default art
