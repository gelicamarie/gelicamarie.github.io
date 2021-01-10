import React from 'react'
import { GiHammerNails } from '@react-icons/all-files/gi/GiHammerNails'

const Project = () => (
  <div className="bg-theme-orange h-80 text-theme-black p-4">
    <h2 className="ml-4">Projects</h2>
    <div className="flex items-center py-10 px-20 md:m-6 xl:m-20">
      <GiHammerNails size={90} />
      <h2 className="mt-10 font-bold text-3xl">building. . .</h2>
    </div>

  </div>

)

export default Project
