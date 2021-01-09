import React from 'react'
import About from '../components/About'

const home = () => (
  <main>

    <div className="h-screen">
      <p className="text-right text-theme-white text-sm mr-3">art.</p>
      <div className="h-screen flex items-center flex-row-reverse mr-6 md:mr-12 xl:mr-28">
        <div className="flex-col">
          <h2 className="text-theme-orange text-3xl">Angelica Turla</h2>
          <p className="text-theme-white ml-20 -m-3 text-sm">Student & Programmer</p>
        </div>
      </div>
    </div>

    <About />

  </main>
)

export default home
