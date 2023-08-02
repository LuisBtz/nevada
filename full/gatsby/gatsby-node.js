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



async function turnCategoriesIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const categoriaTemplate = path.resolve('./src/templates/Categoria.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          categorias: allSanityCategoria {
            nodes {
              slug {
                current
              }
              title
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.categorias.nodes.forEach((categoria) => {
      actions.createPage({
          // url forths new page
          path: `/categoria/${categoria.slug.current}`,
          component: categoriaTemplate,
          context: {
              language: 'es',
              slug: categoria.slug.current,
          }
      })
  });
}



async function turnIndustriasIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const industriaTemplate = path.resolve('./src/templates/Industria.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          industrias: allSanityIndustria {
            nodes {
              slug {
                current
              }
              title
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.industrias.nodes.forEach((industria) => {
      actions.createPage({
          // url forths new page
          path: `/industria/${industria.slug.current}`,
          component: industriaTemplate,
          context: {
              language: 'es',
              slug: industria.slug.current,
          }
      })
  });
}




exports.createPages = async (params) => {
  // Create Pages dynamically
  await Promise.all([
    // 1. Artists
    turnPortfolioPages(params),
    turnCategoriesIntoPages(params),
    turnIndustriasIntoPages(params),

  ])

}