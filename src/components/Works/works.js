import React from 'react'
import './works.css';
import portfolio2 from '../../assets/portfolio2.PNG';
import portfolio3 from '../../assets/portfolio3.PNG';
import portfolio4 from '../../assets/portfolio4.PNG';
import portfolio5 from '../../assets/portfolio5.PNG';
const Works = () => {
  return (
    <section id='works'>
        <h2 className='workTitle'>My Portfolio</h2>
        <span className='workDesc'>I take pride in paying attention to the smallest details.I am excited to bring my skills and experience to help bussinesses achieve their goals and create a strong online presence.</span>
        <div className='worksImgs'>
            <img src={portfolio2} className='worksImg' alt='' />
            <img src={portfolio3} className='worksImg' alt='' />
            <img src={portfolio4} className='worksImg' alt='' />
            <img src={portfolio5} className='worksImg' alt='' />

        </div>
    </section>
  )
}

export default Works