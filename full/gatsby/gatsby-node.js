const path = require('path');

async function turnPortfolioPages({ graphql, actions }) {
  // 1. Get a template for this page
  const projectTemplate = path.resolve('./src/templates/Project.js')
  // 2. Query all artists
  const { data } = await graphql(`
      query {
          projects: allSanityPostPage {
            nodes {
              id
              title
              slug {
                current
              }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      // url forths new page
      path: `/portfolio/${project.slug.current}`,
      component: projectTemplate,
      context: {
        language: 'es',
        slug: project.slug.current,
      },
      ownerNodeId: project.id,
    })
  });
}



exports.createPages = async (params) => {
  // Create Pages dynamically
  await Promise.all([
    // 1. Artists
    turnPortfolioPages(params),

  ])

}