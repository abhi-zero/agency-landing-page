import React from 'react'
import projects from '../../utitly/projects'
import { ProjectCard } from '../../components'
export default function ProjectSection() {
  return (
    <div id='project'>
      <div>
        <ul className='grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] md:grid-cols-4'>
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
