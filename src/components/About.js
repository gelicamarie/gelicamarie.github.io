import React from 'react'
import Container from './Container'

const About = () => (
  <div className="bg-theme-orange py-6 md:py-8">
    <Container>
      <p className="text-white font-semibold text-xl">
        Hi there! I'm Angelica, Gel for short.
        <br />
      </p>
      <p className="text-theme-black font-extralight leading-4 text-sm max-w-3xl">
        I am a programmer currently on my 2nd year of Computer Science at Carleton Univeristy in Canada.
        <br />
        Still finding my footing in the vast world of Programming and so I always keep an open mind to learning new things.
        <br />
        I absolutelty love problem solving which was what gravitated me towards this field.
        <br />
        I also love being creative and seeing my ideas come to life.
        <br />
        On my free time, when I am not thinking of solutions for some bug, I spend my time drawing and contemplating the meaning of life
      </p>
    </Container>
  </div>
)

export default About
