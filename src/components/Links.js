import React from 'react'
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub'
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin'
import { AiFillTwitterCircle } from '@react-icons/all-files/ai/AiFillTwitterCircle'
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail'
import { TiSocialInstagramCircular } from '@react-icons/all-files/ti/TiSocialInstagramCircular'

const Links = () => (
  <div className="flex justify-items-end mt-3 text-theme-orange">
    <div className="ml-44" />
    <AiFillGithub size={18} />
    <AiFillLinkedin size={18} />
    <AiFillTwitterCircle size={18} />
    <AiOutlineMail size={18} />
    <TiSocialInstagramCircular size={18} />
  </div>

)

export default Links
