import React from 'react'
import { graphql } from 'gatsby'
import Seo from 'src/components/Seo'
import Hero from 'src/components/Hero'
import {renderElements} from 'src/utils/elements'

const PageTemplate = ({ data }) => {
  const page = data.wpPage
  const elements = page.plakativPageElements.pageElements
  const hero = page.plakativHero

  return (
    <>
      <Seo title={page.title} />
      <Hero heading={hero.heroHeading} fullHeight={hero.heroFullHeight} image={hero.heroImage} button={hero.heroButton} />
      { elements && renderElements(elements) }
    </>
  )
}

export const pageQuery = graphql`
  query myPageQuery($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      plakativHero {
        heroHeading
        heroFullHeight
        heroButton {
          target
          title
          url
        }
        heroImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, width: 2880, quality: 90)
            }
          }
        }
      }
      plakativPageElements {
        ...PageElementsFragment
      }
    }
  }
`
export default PageTemplate
