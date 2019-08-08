// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  })

  api.createPages(async ({ createPage, graphql }) => {
    const { data } = await graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)

    data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
        component: './src/templates/Blog.vue',
        path: `/blog/${edge.node.slug}`,
        context: {
          id: edge.node.id,
        },
      })
    })
  })

  api.loadSource(async store => {
    store.addMetaData('title', 'Full Stack Developer')
    store.addMetaData('author', 'Josh Ospina Tafur aka @JoshDev')
  })
}
