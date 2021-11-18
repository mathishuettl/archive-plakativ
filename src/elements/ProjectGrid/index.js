import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import  { Section, FlexboxRow, FlexboxCol, Button, Wysiwyg, Container } from 'src/components/Base'
import { cButton, cTileCol, cTileRow, cWysiwygContainer } from './styles.module.scss'
import Tile from 'src/components/Tile'

const ProjectGrid = ({hasBackground, smallPaddingBottom, smallPaddingTop, button, numProjects, wysiwyg}) => {

  const data = useStaticQuery(graphql`
    query ProjectGridQuery {
      allWpProject(sort: {fields: date, order: DESC}) {
        nodes {
          title
          uri
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, width: 2880, quality: 90)
                }
              }
            }
          }
        }
      }
    }
  `)

  const renderProjects = () => {
    const elements = []

    for (let i = 0; i < numProjects; i++) {
      const project = data.allWpProject.nodes[i]
      elements.push(
        <FlexboxCol className={cTileCol}>
          <Tile text={project.title} link={project.uri} alt={project.featuredImage.node.altText} imageData={project.featuredImage.node.localFile.childImageSharp} />
        </FlexboxCol>
      )
    }

    return elements
  }

  return (
    <Section smallPaddingTop={smallPaddingTop} smallPaddingBottom={smallPaddingBottom} hasBackground={hasBackground}>
      <Container className={cWysiwygContainer} isBoxed><Wysiwyg>{wysiwyg}</Wysiwyg></Container>
      <FlexboxRow className={cTileRow}>
        { renderProjects() }
      </FlexboxRow>
      <div className="text-center">
        <Button className={cButton} as="a" href={button.url}>{button.title}</Button>
      </div>
    </Section>
  )
}

export default ProjectGrid
