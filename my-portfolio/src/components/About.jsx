import React from 'react'
import Timeline from './Timeline'

const About = () => {
  return (
     <div className="relative min-h-screen p-6">
  <article className="relative mx-auto w-full max-w-3xl rounded-3xl border border-white/20 shadow-lg shadow-blue-100 backdrop-blur-2xl">
    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
    <div className="relative sm:text-xl p-8 md:p-10 text-gray-600">
      I am an undergraduate at Sabaragamuwa University of Sri Lanka, currently
      pursuing a BSc (Hons) in Information Systems. My key interests lie in
      Cloud engineering, Fullstack development, and Project management, where I
      enjoy designing scalable solutions, optimizing systems, and managing
      projects to deliver real value. As an enthusiastic learner, I am
      passionate about exploring how emerging technologies can transform
      businesses and create innovative opportunities. I am eager to grow as a
      versatile IT professional by combining technical expertise with
      leadership and strategic thinking.
    </div>
  </article>
  <div className='text-2xl text-center p-6'>
    Education & Certification
    <div className='m-5'>
      <Timeline/>
    </div>

  </div>
</div>


  )
}

export default About
