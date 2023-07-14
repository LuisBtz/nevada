export default {
    name: 'postPage',
    title: 'Post Page',
    type: 'document',
    icon: () => `🌇`,
    fields: [
        {
            name: 'title',
            title: 'Título',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
            }
          },
          {
            name: 'categorias',
            title: 'Categorías',
            type: 'array',
            of: [
                {
                    title: 'Categorías',
                    name: 'categoriah',
                    type: 'categoriah',
                }
            ]
          },
          {
            name: 'industrias',
            title: 'Industrias',
            type: 'array',
            of: [
                {
                    name: 'industriah',
                    title: 'Industrias',
                    type: 'industriah',
                }
            ]
          },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'imageType'
        },
        {
            name: 'shortDescription',
            title: 'Descripción Corta',
            type: 'textType'
        },
        {
            name: 'textoEn',
            title: 'Texto Inglés',
            type: 'blockModule'
        },
        {
            name: 'textoEs',
            title: 'Texto Español',
            type: 'blockModule'
        },
        {
            name: 'cliente',
            title: 'Cliente',
            type: 'string'
        },
        {
            name: 'enfoque',
            title: 'Enfoque',
            type: 'stringType'
        },
        {
            name: 'modulos',
            title: 'Módulos',
            type: 'array',
            of: [
                {
                    type: 'imageType'
                },
                {
                    type: 'twoImages'
                },
                {
                    title: 'Vimeo ID',
                    type: 'stringType'
                }
            ]
        }
    ],
    preview: {
        select: {
          title: 'title',
          media: 'thumbnail'
        }
      }
}