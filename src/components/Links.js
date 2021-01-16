import React from 'react'
import SOCIAL_PROFILES from '../content/SocialProfiles'
import Icon from './SvgIcon'

const Links = () => (
  <div className="flex justify-items-end">
    {SOCIAL_PROFILES.map( item => <Icon url={item.url} svg={item.icon} /> )}
  </div>
)

export default Links
