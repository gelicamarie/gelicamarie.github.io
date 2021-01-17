import React from 'react'
import { Link } from 'gatsby'
import ArtGrid from '../components/ArtGrid'
import SEO from '../components/Seo'

const Art = () => (
  <main className="h-screen">
    <SEO title="Art" />

    <p className="text-right text-theme-white text-sm lg:text-lg mr-3">
      <Link to="/">Angelica Turla.</Link>
    </p>

    <div className="mr-6 md:mr-12 xl:mr-28 flex flex-col">

      <h2 className="mt-8 text-theme-orange text-right text-4xl">
        i draw,
        <br />
        sometimes.
      </h2>

      <div className="ml-6 py-6">
        <div className="flex flex-col max-w-7xl mx-auto">
          <ArtGrid />
        </div>
      </div>

    </div>

  </main>
)

export default Art
