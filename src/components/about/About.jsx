import React from 'react'
import './about.css'
import priyansh_profile from '../../assets/priyansh_saxena_profile.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Wanna know about me</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={priyansh_profile} alt='About Me' />
          </div>
        </div>
        <div className='about__content'>
          <p>
            Hello! My name is Priyansh. A passionate and aspiring software developer,
            fascinated with strong uphold in technology and committed to utilize
            my skills to help others. A competent software professional with required skills &
            attitude to make difference to improve quality of life of the people.
          </p>

          <p> I am also passionate about Artificial Intelligence, I do have worked in some
            projects comprising deep learning. I completed my externship from Smartinternz
            where we were taught about how AI works and integrated with our web based projects.

          </p>


        </div>
      </div>
    </section>
  )
}

export default About