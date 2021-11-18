import React from 'react'
import { Link } from 'gatsby'

import ContactForm from 'src/components/ContactForm'
import Layout from 'src/components/Layout'
import Seo from 'src/components/Seo'

import { Section } from 'src/components/Base'

const ComponentsPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Section>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Section>
    <Section>
      <ContactForm />
    </Section>
  </Layout>
)

export default ComponentsPage
