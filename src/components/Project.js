import React from 'react'
import { GiHammerNails } from '@react-icons/all-files/gi/GiHammerNails'
import Container from './Container'

const Project = () => (
  <div className="bg-theme-orange h-80 text-theme-black p-4">
    <Container>
      <h2>Projects</h2>
      <div className="flex items-center m-20">
        <GiHammerNails size={90} />
        <h2 className="mt-10 font-bold text-xl md:text-3xl">building. . .</h2>
      </div>
    </Container>
  </div>
)

export default Project
