import {defineType} from 'sanity'

export default defineType({
    name: 'socialLink',
    title: 'Social Link',
    type: 'object',
    fields: [
        {
            name: 'redSocial',
            type: 'string',
            title: 'Red Social',
        },
        {
            name: 'socialLink',
            title: 'Link Red Social',
            type: 'string'
        }
    ]
})