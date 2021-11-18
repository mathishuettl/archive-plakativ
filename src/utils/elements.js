import React from 'react'
import { graphql } from 'gatsby'
import { TextElement, TextAndImageElement, TextLeftTextRight, ProjectGrid, Reviews, AccordionElement, CallToAction, ImageSlider, HelpBoxes, InternList, Downloads, Facts } from 'src/elements'

const renderElement = (element) => {
  if (element.fieldGroupName) {
    const postTypes = ["Page", "Project"]
    let type = element.fieldGroupName

    postTypes.forEach(postType => {
      type = type.replace(`${postType}_Plakativpageelements_PageElements_`, "")
    })

    // hack: modify all attributes that are NULL to UNDEFINED that Proptypes are working
    Object.keys(element).map((key, index) => {
      if (element[key] === null) {
        delete element[key]
      }

      return element[key]
    });

    // very nice for debugging, I would keep it until launch
    console.log("elem", element)

    switch (type.toLowerCase()) {
      case "text":
        return <TextElement {...element} />
      case "imageandtext":
        return <TextAndImageElement {...element} />
      case "textlefttextright":
        return <TextLeftTextRight {...element} />
      case "reviews":
        return <Reviews {...element} />
      case "projectgridsection":
        return <ProjectGrid {...element} />
      case "accordion":
        return <AccordionElement {...element} />
      case "cta":
        return <CallToAction {...element} />
      case "imageslider":
        return <ImageSlider {...element} />
      case "helpboxes":
        return <HelpBoxes {...element} />
      case "internlist":
        return <InternList {...element} />
      case "downloads":
        return <Downloads {...element} />
      case "facts":
        return <Facts {...element} />
    }
  } else {
    console.warn("There comes a element from wordpress, you have not implemented in Gatsby yet!")
  }
}

export const renderElements = (elements) => {
  const returnElements = []
  elements.forEach(element => returnElements.push(renderElement(element)))
  return returnElements
}

export const projectElementsFragment = graphql`
  fragment ProjectElementsFragment on WpProject_Plakativpageelements {
    pageElements {
      ... on WpProject_Plakativpageelements_PageElements_Facts {
        factCategory
        factCompetences
        factCustomer
        factDate
        factProjectmanager
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
      }
      ... on WpProject_Plakativpageelements_PageElements_Downloads {
         fieldGroupName
         heading
         repeater {
           heading
           text
           file {
             altText
             localFile {
               publicURL
             }
           }
         }
         backgroundImage {
           localFile {
             childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, width: 2880, quality: 90)
             }
           }
         }
       }
      ... on WpProject_Plakativpageelements_PageElements_InternList {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
        boxes {
          heading
          text
          downloads {
            file {
              altText
              title
              localFile {
                publicURL
              }
            }
          }
        }
      }
      ... on WpProject_Plakativpageelements_PageElements_HelpBoxes {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        boxes {
          heading
          links {
            link {
              target
              title
              url
            }
          }
        }
      }
      ... on WpProject_Plakativpageelements_PageElements_ImageSlider {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, width: 2880, quality: 90)
            }
          }
          altText
        }
      }
      ... on WpProject_Plakativpageelements_PageElements_Text {
        hasBackground
        fieldGroupName
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
      }
      ... on WpProject_Plakativpageelements_PageElements_Cta {
        fieldGroupName
        heading
        backgroundImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, width: 2880, quality: 90)
            }
          }
        }
        button {
          title
          url
          target
        }
        showButton
      }
      ... on WpProject_Plakativpageelements_PageElements_ProjectGridSection {
        fieldGroupName
        hasBackground
        button {
          target
          title
          url
        }
        wysiwyg
        numProjects
        smallPaddingBottom
        smallPaddingTop
      }
      ... on WpProject_Plakativpageelements_PageElements_Reviews {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
        repeater {
          author
          text
          portrait {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, width: 2880, quality: 90)
              }
            }
          }
        }
      }
      ... on WpProject_Plakativpageelements_PageElements_TextLeftTextRight {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        textLeft
        textRight
      }
      ... on WpProject_Plakativpageelements_PageElements_Accordion {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
        repeater {
          hasImage
          heading
          wysiwyg
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, width: 240, quality: 90)
              }
            }
          }
        }
      }
      ... on WpProject_Plakativpageelements_PageElements_ImageAndText {
        fieldGroupName
        hasBackground
        showButton
        smallPaddingBottom
        smallPaddingTop
        swap
        wysiwyg
        button {
          target
          title
          url
        }
        image {
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
`

export const pageElementsFragment = graphql`
  fragment PageElementsFragment on WpPage_Plakativpageelements {
    pageElements {
      ... on WpPage_Plakativpageelements_PageElements_Facts {
        factCategory
        factCompetences
        factCustomer
        factDate
        factProjectmanager
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
      }
      ... on WpPage_Plakativpageelements_PageElements_Downloads {
         fieldGroupName
         heading
         repeater {
           heading
           text
           file {
             altText
             localFile {
               publicURL
             }
           }
         }
         backgroundImage {
           localFile {
             childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, width: 2880, quality: 90)
             }
           }
         }
       }
      ... on WpPage_Plakativpageelements_PageElements_InternList {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
        boxes {
          heading
          text
          downloads {
            file {
              altText
              title
              localFile {
                publicURL
              }
            }
          }
        }
      }
      ... on WpPage_Plakativpageelements_PageElements_HelpBoxes {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        boxes {
          heading
          links {
            link {
              target
              title
              url
            }
          }
        }
      }
      ... on WpPage_Plakativpageelements_PageElements_ImageSlider {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, width: 2880, quality: 90)
            }
          }
          altText
        }
      }
      ... on WpPage_Plakativpageelements_PageElements_Text {
        hasBackground
        fieldGroupName
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
      }
      ... on WpPage_Plakativpageelements_PageElements_Cta {
        fieldGroupName
        heading
        backgroundImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, width: 2880, quality: 90)
            }
          }
        }
        button {
          title
          url
          target
        }
        showButton
      }
      ... on WpPage_Plakativpageelements_PageElements_ProjectGridSection {
        fieldGroupName
        hasBackground
        button {
          target
          title
          url
        }
        wysiwyg
        numProjects
        smallPaddingBottom
        smallPaddingTop
      }
      ... on WpPage_Plakativpageelements_PageElements_Reviews {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
        repeater {
          author
          text
          portrait {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, width: 2880, quality: 90)
              }
            }
          }
        }
      }
      ... on WpPage_Plakativpageelements_PageElements_TextLeftTextRight {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        textLeft
        textRight
      }
      ... on WpPage_Plakativpageelements_PageElements_Accordion {
        fieldGroupName
        hasBackground
        smallPaddingBottom
        smallPaddingTop
        wysiwyg
        repeater {
          hasImage
          heading
          wysiwyg
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, width: 240, quality: 90)
              }
            }
          }
        }
      }
      ... on WpPage_Plakativpageelements_PageElements_ImageAndText {
        fieldGroupName
        hasBackground
        showButton
        smallPaddingBottom
        smallPaddingTop
        swap
        wysiwyg
        button {
          target
          title
          url
        }
        image {
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
`
