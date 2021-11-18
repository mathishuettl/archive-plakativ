import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({
  title,
  canonicalUri,
  description,
  og,
  article,
  twitter,
}) => {
  const data = useStaticQuery(graphql`
    query siteUrlQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return (
    <Helmet>
      <html lang="de" />
      <meta name="description" content={description} />
      <title>{title}</title>

      {canonicalUri && (
        <link
          rel="canonical"
          href={`${data.site.siteMetadata.siteUrl}${canonicalUri}`}
        />
      )}

      {/* Open Graph */}
      <meta property="og:locale" content="de" />

      {og.title && <meta property="og:title" content={og.title} />}

      {og.description && (
        <meta property="og:description" content={og.description} />
      )}

      {og.url && <meta property="og:url" content={og.url} />}

      {og.image && og.image.url && (
        <meta property="og:image" content={og.image.url} />
      )}

      {og.image && og.image.secureUrl && (
        <meta property="og:image:secure_url" content={og.image.secureUrl} />
      )}

      {og.image && og.image.type && (
        <meta property="og:image:type" content={og.image.type} />
      )}

      {og.image && og.image.width && (
        <meta property="og:image:width" content={og.image.width} />
      )}

      {og.image && og.image.height && (
        <meta property="og:image:height" content={og.image.height} />
      )}

      {og.image && og.image.alt && (
        <meta property="og:image:alt" content={og.image.alt} />
      )}

      {og.type && <meta property="og:type" content={og.type} />}

      {/* Open Graph Article */}
      {article && article.published && (
        <meta
          property="article:published_time"
          content={article.published.toString()}
        />
      )}

      {article && article.modified && (
        <meta
          property="article:modified_time"
          content={article.modified.toString()}
        />
      )}

      {article && article.updated && (
        <meta property="og:updated" content={article.updated.toString()} />
      )}

      {/* Open Graph Twitter */}
      <meta name="twitter:card" content={twitter.card} />

      {twitter.title && <meta name="twitter:title" content={twitter.title} />}

      {twitter.description && (
        <meta name="twitter:description" content={twitter.description} />
      )}

      {twitter.creator && (
        <meta name="twitter:creator" content={twitter.creator} />
      )}

      {twitter.site && <meta name="twitter:site" content={twitter.site} />}
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  canonicalUri: PropTypes.string,

  og: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
      secureUrl: PropTypes.string,
      type: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      alt: PropTypes.string,
    }),
    type: PropTypes.string,
  }),

  twitter: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
      secureUrl: PropTypes.string,
      type: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      alt: PropTypes.string,
    }),
    creator: PropTypes.string,
    site: PropTypes.string,
    card: PropTypes.string,
  }),

  article: PropTypes.shape({
    published: PropTypes.string,
    modified: PropTypes.string,
    updated: PropTypes.string,
  }),
}

Seo.defaultProps = {
  canonicalUri: '',
  description: '',
  og: {
    type: null,
    title: null,
    description: null,
    url: null,
    image: null,
  },
  twitter: {
    title: null,
    description: null,
    image: null,
    creator: null,
    site: null,
    card: 'summary',
  },
  article: null,
}

export default Seo
