import React from 'react'

import Layout from 'src/components/Layout'
import Seo from 'src/components/Seo'
import {
  Section,
  Heading,
  Text,
  FlexboxRow,
  FlexboxCol,
  Button,
} from 'src/components/Base'
import {cPrimary, cSecondary} from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Example" />
    <Section>
      <FlexboxRow>
        <FlexboxCol width={8}>
          <Heading>
            Super fresh Starter that saves Development a shitload of work. 🤙🏼
          </Heading>
          <Text>
            Custom build Base Components, themeable with CSS custom properties &
            blazing fast.
          </Text>
        </FlexboxCol>
      </FlexboxRow>
    </Section>

    <Section>
      <Heading size={4}>Flexbox Rows & Cols</Heading>

      <FlexboxRow className="mb-2">
        <FlexboxCol width={8} className={cPrimary}>
          <Heading size={5} as="p">
            Col 8
          </Heading>
        </FlexboxCol>
        <FlexboxCol width={4} className={cSecondary}>
          <Heading size={5} as="p">
            Col 4
          </Heading>
        </FlexboxCol>
      </FlexboxRow>

      <FlexboxRow className="mb-2">
        <FlexboxCol width={6} className={cSecondary}>
          <Heading size={5} as="p">
            Col 6
          </Heading>
        </FlexboxCol>
        <FlexboxCol width={6} className={cPrimary}>
          <Heading size={5} as="p">
            Col 6
          </Heading>
          <Heading size={5} as="p">
            2. line
          </Heading>
        </FlexboxCol>
      </FlexboxRow>

      <FlexboxRow className="mb-2">
        <FlexboxCol width={3} className={cSecondary}>
          <Heading size={5} as="p">
            Col 3
          </Heading>
        </FlexboxCol>
        <FlexboxCol width={6} offset={3} className={cPrimary}>
          <Heading size={5} as="p">
            Col 6 - Offset 3
          </Heading>
        </FlexboxCol>
      </FlexboxRow>
    </Section>

    <Section>
      <Heading size={4}>Buttons</Heading>

      <FlexboxRow className="mb-2">
        <FlexboxCol width={4}>
          <Button color="primary" className="mr-2">
            Primary
          </Button>
          <Button color="primary" outlined>
            Primary
          </Button>
        </FlexboxCol>
        <FlexboxCol width={4}>
          <Button color="secondary" className="mr-2">
            Secondary
          </Button>
          <Button color="secondary" outlined>
            Secondary
          </Button>
        </FlexboxCol>
        <FlexboxCol width={4}>
          <Button color="cta" className="mr-2">
            CTA
          </Button>
          <Button color="cta" outlined>
            CTA
          </Button>
        </FlexboxCol>
      </FlexboxRow>
    </Section>
  </Layout>
)

export default IndexPage
