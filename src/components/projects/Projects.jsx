import React from 'react'
import {FiGithub} from 'react-icons/fi'
import './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>What I've Worked on</h5>
      <h2>Projects</h2>
      <h3 className='heading'>WEB DEVELOPMENT</h3>
      <div className='container project__container1'>
        
        <div className='project__clothing'>
        <a href='https://github.com/PriyaanshSaxena/Clothing-website'><FiGithub/></a>
          <h2>Clothing Website</h2>
          <p>
            An ecommerce clothing website made using ReactJS library having 
            firebase authentication and integrated with stripe payments.   
          </p>
        </div>
        
        <div className='project__disease'>
        <a href='https://github.com/PriyaanshSaxena/Plant-Disease-Detection'><FiGithub/></a>
          <h2>Plant Disease Detection</h2>
          <p>
          Plant Disease Detection is a project to detect the diseases in the plants by scanning the images of the leaves 
          and then passing to through the neural network to detect wether the plant is infected or not.  
          </p>
        </div>
        <div className='project__scripto'>
        <a href='https://github.com/PriyaanshSaxena/Scripto-react-project'><FiGithub/></a>
          <h2>Scripto Website</h2>
          <p>
           An online website where you can search for various scripts and ideas.  
          </p>
        </div>
      </div>

      <h3 className='heading'>ARTIFICIAL    INTELLIGENCE</h3>
      <div className='project__container2'>
      <div className='project__assistant'>
          <a href='https://github.com/PriyaanshSaxena/personalised-voice-assistant'><FiGithub/></a>
          <h2>Personalised Voice Assistant</h2>
          <p>
            A Single Personalised Voice Assistant for Multiple users.
            Alexa listens to all and functions to their voice, but lacks the personalised results.
            But this overcamed that issue. Accuracy : 98%. 
            
          </p>
        </div>
        <div className='project__malaria'>
        <a href='https://github.com/PriyaanshSaxena/Malaria-detection-using-Deep-Learning'><FiGithub/></a>
          <h2>Malaria Detection using Deep Learning</h2>
          <p>
          Detecting malaria for given images built with Tensorflow library using CNN having an accuracy of 97%.
          </p>
        </div>
        </div>
      
    </section>
  )
}

export default Projects