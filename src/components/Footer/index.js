import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {FlexboxRow, FlexboxCol, Text, Heading, Section, Link, Container} from 'src/components/Base'
import {cFooterRow, cFooterCol, cFooterMenuItemHorizontal, cAddress, cAddressElement, cSocketMenu, cFooterMenuListHorizontal, cFooterSection, cSocket, cFooter, cFooterHeader, cBrandCol, cSocialBar, cSocialBarItem, cSocialIcon, cSocialIconSvg, cFooterMenuLink, cFooterMenuList, cFooterMenuItem} from './styles.module.scss'
import Brand from 'src/assets/images/brand.inline.svg'
import FacebookIcon from 'src/assets/images/facebook.inline.svg'
import InstagramIcon from 'src/assets/images/instagram.inline.svg'
import LinkedinIcon from 'src/assets/images/linkedin.inline.svg'
import { v4 as uuid } from 'uuid'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterMenuQuery {
      allWp {
        nodes {
          themeGeneralSettings {
            socialMedia {
              optionFacebookUrl
              optionInstagramUrl
              optionLinkedinUrl
            }
            websitenbetreiber {
              impressumAddress
              impressumCity
              impressumCompany
              impressumCountry
              impressumEmail
              impressumPhone
              impressumZip
            }
            plakativStringTranslations {
              stringTranslationFooterCol1
              stringTranslationFooterCol2
            }
          }
        }
      }
      allWpMenu {
        nodes {
          name
          menuItems {
            nodes {
              id
              label
              url
            }
          }
        }
      }
    }
  `)

  const {socialMedia, websitenbetreiber, plakativStringTranslations} = data.allWp.nodes[0].themeGeneralSettings

  const renderMenu = (name, horizontal = false) => {
    const elements = []
    const currentMenu = data.allWpMenu.nodes.find(menu => menu.name === name)
    if (currentMenu) {
      elements.push(
        <nav>
          <ul className={!horizontal ? cFooterMenuList : cFooterMenuListHorizontal}>
            {
              currentMenu.menuItems.nodes.map(menuItem => (
                <li className={!horizontal ? cFooterMenuItem : cFooterMenuItemHorizontal} key={uuid()}>
                  <Link class={cFooterMenuLink} to={menuItem.url}>{menuItem.label}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      )
    } else {
      console.warn(`The menu with the name '${name}' could not be found!`)
    }

    return elements
  }

  return (
    <div className={cFooter}>
      <Section className={cFooterSection}>
      <FlexboxRow className={cFooterRow}>
        <FlexboxCol className={cFooterCol} width={6}>
          <div className={cBrandCol}>
            <Brand />

            <ul className={cSocialBar}>
              <li className={cSocialBarItem}><a target="_blank" className={cSocialIcon} href={socialMedia.optionFacebookUrl}><FacebookIcon className={cSocialIconSvg} /></a></li>
              <li className={cSocialBarItem}><a target="_blank" className={cSocialIcon} href={socialMedia.optionInstagramUrl}><InstagramIcon className={cSocialIconSvg} /></a></li>
              <li className={cSocialBarItem}><a target="_blank" className={cSocialIcon} href={socialMedia.optionInstagramUrl}><LinkedinIcon className={cSocialIconSvg} /></a></li>
            </ul>
          </div>
        </FlexboxCol>
        <FlexboxCol className={cFooterCol} width={3}>
          <Heading className={cFooterHeader} color="light" size={4} as="h4">{plakativStringTranslations.stringTranslationFooterCol1}</Heading>
          {renderMenu("Footer-1")}
        </FlexboxCol>
        <FlexboxCol className={cFooterCol} width={3}>
          <Heading className={cFooterHeader} color="light" size={4} as="h4">{plakativStringTranslations.stringTranslationFooterCol2}</Heading>
          {renderMenu("Footer-2")}
        </FlexboxCol>
      </FlexboxRow>
      <Container>
        <div className={cSocket}>
          <div className={cAddress}>
            <Text as="span" className={cAddressElement}>{websitenbetreiber.impressumCompany}</Text>
            <Text as="span" className={cAddressElement}>{`${websitenbetreiber.impressumAddress}, ${websitenbetreiber.impressumZip} ${websitenbetreiber.impressumCity}, ${websitenbetreiber.impressumCountry}`}</Text>
            <Text as="span" className={cAddressElement}>{websitenbetreiber.impressumPhone}</Text>
            <Text as="span" className={cAddressElement}>{websitenbetreiber.impressumEmail}</Text>
          </div>
          <nav className={cSocketMenu}>
            {renderMenu("Socket", true)}
          </nav>
        </div>
      </Container>
      </Section>
    </div>
  )
}

export default Footer
