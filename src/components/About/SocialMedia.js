import React from 'react'
import './socialStyle.css'

const SocialMedia = ({github, twitter, linkedin}) => {
  return (
    <div className='social-icons'>
        <ul>
            <li><a href={twitter}><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href={github}><i class="fab fa-github" aria-hidden="true"></i></a></li>
            <li><a href={linkedin}><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>
    </div>
  )
}

export default SocialMedia
