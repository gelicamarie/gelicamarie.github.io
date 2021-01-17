import React from 'react'
import { Link } from 'gatsby'

import About from '../components/About'
import Exp from '../components/Exp'
import Project from '../components/Project'
import Contacts from '../components/Contacts'
import Links from '../components/Links'

const Home = () => (
  <main>

    <div className="h-screen">
      <p className="text-right text-theme-white text-sm lg:text-lg mr-3">
        <Link to="/art">art.</Link>
      </p>

      <div className="flex h-screen flex-col mr-6 md:mr-12 xl:mr-28">
        <div className="my-auto flex flex-col items-end">
          <h2 className="text-theme-orange text-4xl lg:text-6xl">Angelica Turla</h2>
          <p className="text-theme-white -mt-2 text-base lg:text-lg">Student & Programmer</p>
          <Links />
        </div>
      </div>
    </div>

    <About />
    <Exp />
    <Project />
    <Contacts />

  </main>
)

export default Home

