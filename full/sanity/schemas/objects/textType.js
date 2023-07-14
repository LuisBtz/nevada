import {defineType} from 'sanity'

export default defineType({
    name: 'textType',
    title: 'Linea de texto',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: false,
        columns: 2
      },
    fields: [
        {
            name: 'esText',
            type: 'text',
            title: 'Es',
        },
        {
            name: 'enText',
            title: 'En',
            type: 'text'
        }
    ]
})