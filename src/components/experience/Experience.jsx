import React from 'react'
import './experience.css'
import { FiGithub } from 'react-icons/fi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Where I've worked</h5>
      <h2>Experience</h2>
      <div className='container experience__container'>
        <div className='experience_frontend'>
        <a href='https://github.com/PriyaanshSaxena/Malaria-detection-using-Deep-Learning'><FiGithub /></a>
        <h3>SmartInternz Externship -Artificial Intelligence using IBM Cloud </h3>
        <h5>November 2021- January 2022</h5>
        <div className='experience__content'>
          <p>
           Guided Project based training in AI where I was taught about various technologies and principles involved in artificial Intelligence
           Project was "Malaria Detection using Deep Learning". This externship taught me details of Machine and Deep Learning including NLP.
          </p>
        </div>
        </div>

      </div>
    </section>
  )
}

export default Experience