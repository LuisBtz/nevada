import {defineType} from 'sanity'

export default defineType({
    name: 'imageType',
    title: 'Image',
    type: 'image',
        fields: [
            {
                name: 'textoAlternativo',
                type: 'stringType',
                title: 'Texto Alternativo',
                validation: Rule => [
                    Rule.required().error('Texto alternativo en imágenes requerido'),
                  ]
            },
        ],
        
})