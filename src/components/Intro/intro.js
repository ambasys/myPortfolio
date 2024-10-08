import React from 'react'
import './intro.css';
import bg from '../../assets/image2.png'
const Intro = () => {
  return (
    <section id='intro'>
        <img src={bg} alt='profile' className='bg'/>
        <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Ambaw</span><br/> A full stack web developer</span>
        <p className='introPara'>I am a skilled web developer with experience in creating<br/> visually appealing and user friendly website.</p>
        </div>
    
    </section>
  )
}

export default Intro