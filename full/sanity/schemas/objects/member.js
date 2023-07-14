import {defineType} from 'sanity'

export default defineType({
    name: 'member',
    title: 'Member',
    type: 'object',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Nombre',
        },
        {
            name: 'puesto',
            title: 'Puesto',
            type: 'string'
        },
        {
            name: 'photo',
            title: 'Foto',
            type: 'image'
        }
    ]
})