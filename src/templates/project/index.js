import React from 'react'
import { graphql } from 'gatsby'
import Seo from 'src/components/Seo'
import Hero from 'src/components/Hero'
import {renderElements} from 'src/utils/elements'

const ProjectTemplate = ({ data }) => {
  const project = data.wpProject
  const elements = project.plakativPageElements.pageElements

  return (
    <>
      <Seo title={project.title} />
      <Hero heading={project.title} />
      { elements && renderElements(elements) }
    </>
  )
}

export const pageQuery = graphql`
  query myProjectQuery($id: String!) {
    wpProject(id: { eq: $id }) {
      title
      plakativPageElements {
        ...ProjectElementsFragment
      }
    }
  }
`
export default ProjectTemplate
