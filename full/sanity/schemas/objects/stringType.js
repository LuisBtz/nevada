import {defineType} from 'sanity'

export default defineType({
    name: 'stringType',
    title: 'Linea de texto',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: false,
        columns: 2
      },
    fields: [
        {
            name: 'esString',
            type: 'string',
            title: 'Es',
        },
        {
            name: 'enString',
            title: 'En',
            type: 'string'
        }
    ]
})