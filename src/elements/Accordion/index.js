import React from 'react'
import {Section, Container, Wysiwyg, Heading} from 'src/components/Base'
import classNames from 'classnames'
import {cAccordionItemWhite, cImage, cAccordionContent, cWysiwygContainer, cAccordion, cAccordionItem, cAccordionHeading, cAccordionPanel, cAccordionButton} from './styles.module.scss'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const AccordionElement = ({smallPaddingTop, smallPaddingBottom, hasBackground, wysiwyg, repeater}) => {

  const renderAccordionItems = () => {
    const elements = []

    const accordionItemClasses = classNames({
      [cAccordionItem]: true,
      [cAccordionItemWhite]: hasBackground
    })

    repeater.forEach(item => {
      elements.push(
        <AccordionItem className={accordionItemClasses}>
            <AccordionItemHeading>
                <AccordionItemButton className={cAccordionButton}>
                  <Heading className={cAccordionHeading} size={3} as="h3">
                    {item.heading}
                  </Heading>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={cAccordionPanel}>
              <div className={cAccordionContent}>
                { item.hasImage &&
                  <GatsbyImage
                    className={cImage}
                    layout="fullWidth"
                    image={getImage(
                      item.image.localFile.childImageSharp
                    )}
                    alt={item.image.altText}
                  />
                }
                <Wysiwyg>
                  {item.wysiwyg}
                </Wysiwyg>
              </div>
            </AccordionItemPanel>
        </AccordionItem>
      )
    })

    return elements
  }

  return (
    <Section smallPaddingTop={smallPaddingTop} smallPaddingBottom={smallPaddingBottom} hasBackground={hasBackground}>
      <Container className={cWysiwygContainer} isBoxed alignment="left"><Wysiwyg>{wysiwyg}</Wysiwyg></Container>
        <Accordion allowZeroExpanded={true} className={cAccordion}>
          {renderAccordionItems()}
        </Accordion>
    </Section>
  )
}

export default AccordionElement
