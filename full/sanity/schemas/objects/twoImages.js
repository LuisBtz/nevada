import {defineType} from 'sanity'

export default defineType({
    name: 'twoImages',
    title: '2 Imágenes',
    type: 'object',
        fields: [
            {
                name: 'imagen1',
                type: 'imageType',
                title: 'Imagen1',
            },
            {
                name: 'imagen2',
                type: 'imageType',
                title: 'Imagen2',
            },
        ]
})