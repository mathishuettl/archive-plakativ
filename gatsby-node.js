const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const {
    data: {
      allWpPage: { nodes: allPages },
      allWpProject: { nodes: allProjects }
    },
  } = await graphql(`
    query {
      allWpPage {
        nodes {
          id
          uri
          language {
            code
          }
          translations {
            uri
          }
        }
      }
      allWpProject {
        nodes {
          id
          uri
          language {
            code
          }
          translations {
            uri
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve(`./src/templates/page/index.js`)
  const projectTemplate = path.resolve(`./src/templates/project/index.js`)

  allPages.forEach(page => {
    const prefix = page.language.code === "DE" ? "/de" : ""

    let translation = undefined

    if (page.translations.length > 0) {
      translation = page.translations[0].uri

      if (page.language.code === "EN") {
        translation = "/de" + translation
      }
    }

    createPage({
      path: prefix + page.uri,
      component: slash(pageTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: page.id,
        translation: translation,
        language: page.language.code === "DE" ? "de" : "en"
      },
    })
  })

  allProjects.forEach(project => {
    const prefix = project.language.code === "DE" ? "/de" : ""

    let translation = undefined

    if (project.translations.length > 0) {
      translation = project.translations[0].uri

      if (project.language.code === "EN") {
        translation = "/de" + translation
      }
    }

    createPage({
      path: prefix + project.uri,
      component: slash(projectTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: project.id,
        translation: translation,
        language: project.language.code === "DE" ? "de" : "en"
      },
    })
  })
}
