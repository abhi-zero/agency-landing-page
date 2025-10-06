import React from 'react'
import projects from '../../utitly/projects'
import { ProjectCard } from '../../components'
export default function ProjectSection() {
  return (
    <div id='project'>
      <div>
        <ul className='grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] lg:md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] xl:md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]'>
          {projects.map((project) => (
          <li key={`${project.destopProjectImg}-${project.mobileProjectImg}`}>
            <ProjectCard 
            mobileImage={project.mobileProjectImg}
            desktopImage={project.destopProjectImg}
            linkBgColor={'white'}
            linkTextColor={'black'}
            link={project.projectLink}
            />
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}
