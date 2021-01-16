import React from 'react'
import Container from './Container'

const Contacts = () => (
  <div className="text-theme-orange py-4">
    <Container>
      <h2>Contacts</h2>
      <p className="ml-4 text-theme-white text-sm">
        email   : <a className="cursor-pointer" target="_blank" rel="noreferrer" href="mailto:turla_angelica@yahoo.com">turla_angelica@yahoo.com</a>
        <br />
        discord : <a className="cursor-pointer" target="_blank" rel="noreferrer" href="https://discordapp.com/users/478742594415755285">gel#9602</a>
      </p>
    </Container>
  </div>
)

export default Contacts
