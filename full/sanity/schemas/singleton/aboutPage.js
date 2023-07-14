export default {
    name: 'aboutPage',
    title: 'Página Sobre Nosotros',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título',
            type: 'string'
        },
        {
            name: 'subtitle',
            title: 'Subtitulo',
            type: 'stringType'
        },
        {
            name: 'textoEs',
            title: 'Texto Español',
            type: 'blockModule'
        },
        {
            name: 'textoEn',
            title: 'Texto Inglés',
            type: 'blockModule'
        },
        {
            name: 'imagen',
            title: 'Imagen',
            type: 'imageType'
        },
        {
            name: 'oficinasTitulo',
            title: 'Título de Oficinas',
            type: 'stringType'
        },
        {
            name: 'oficinasImagen',
            title: 'Imagen de Oficina',
            type: 'imageType'
        },
        {
            name: 'equipoTitulo',
            title: 'Título equipo',
            type: 'stringType'
        },
        {
            name: 'equipo',
            title: 'Equipo',
            type: 'array',
            of: [
                {
                    type: 'member'
                }
            ]
        },
        {
            name: 'imagenFinal',
            title: 'Imagen Final',
            type: 'imageType'
        },
    ]
}