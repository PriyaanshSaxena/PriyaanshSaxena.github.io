import React from 'react'
import './education.css'
import MGM from '../../assets/mgm.png'
import VBPS from '../../assets/vbps.png'
import VIT from '../../assets/vit.png'
const Education = () => {
  return (
    <section id='education'>
      <h4 className='h4_details'>Details regarding my Grades </h4>
      <h2 className='h2_details'>Education</h2>
      
      <div className='container education__container'>
        <div className='education__school'>
        <div className='mgm_image'>
            <a href="http://www.mgmitarsi.com/" target='_blank'>
            <img src={MGM} alt='MGM_school' />
            </a>
          </div>
          <h4>MGM Higher Secondary School, Itarsi  </h4>
          <h5>Secondary(X)</h5>
          <h5>CGPA : 9.4</h5>
          <h6>April 2016 - May 2017</h6>
          
          
          

        </div>

       

        <div className='education__school'>
        <div className='vbps_image'> 
            <a href="http://vidyabhumi.edu.in/" target='_blank'>   
            <img src={VBPS} alt='VBPS_school' />
            </a>
          </div>
          <h4>Vidhya Bhumi Public School, Chhindwara </h4>
          <h5>Higher Secondary (XII)</h5>
          <h5>PERCENTAGE : 88%</h5>
          <h6>April 2018 - May 2019</h6>

          
          
        </div>

        
        <div className='education__school'>
        <div className='vit_image'>
            <a href="https://vitbhopal.ac.in/" target='_blank'>
              <img src={VIT} alt='VIT_college' />
              </a>
          </div>
          <h4>Vellore Institue of Technology, Bhopal</h4>
          <h5>BTech in Computer Science and Enginnering </h5>
          <h5> CGPA : 8.6</h5>
          <h6>July 2019 - May 2023</h6>

          

          
        </div>
      </div>
    </section>
  )
}

export default Education