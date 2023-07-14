export default {
    name: 'categoria',
    title: 'Categoria',
    type: 'document',
    icon: () => `🚗`,
    fields: [
        {
            name: 'title',
            title: 'Nombre',
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
            name: 'titleEn',
            title: 'English Name',
            type: 'string'
        },
        
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'titleEn'
        }
      }
}