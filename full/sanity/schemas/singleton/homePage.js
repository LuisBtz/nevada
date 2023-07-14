export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título',
            type: 'string'
        },
        {
            name: 'videoID',
            title: 'Video ID vimeo',
            type: 'string'
        },
        {
            name: 'portafolioTitulo',
            title: 'Título Portafolio',
            type: 'stringType'
        },
        {
            name: 'portfolioTexto',
            title: 'Texto Portafolio',
            type: 'textType'
        },
        {
            name: 'serviciosTitle',
            title: 'Título servicios',
            type: 'stringType'
        },
        {
            name: 'serviciosText1',
            title: 'Texto 1 Servicios',
            type: 'textType'
        },
        {
            name: 'serviciosText2',
            title: 'Texto 2 Servicios',
            type: 'textType'
        },
        {
            name: 'serviciosList',
            title: 'Lista de Servicios',
            type: 'array',
            of: [
                {
                    type: 'stringType'
                }
            ]
        },
        {
            name: 'oficinasTitulo',
            title: 'Título Oficinas',
            type: 'stringType'
        },
        {
            name: 'oficinasTexto',
            title: 'Texto Oficinas',
            type: 'stringType'
        },
        {
            name: 'oficinasSlider',
            title: 'Slider Oficinas',
            type: 'array',
            of: [
                {
                    type: 'imageType'
                }
            ]
        },
        {
            name: 'contactoTitulo',
            title: 'Título Contacto',
            type: 'stringType'
        },
        {
            name: 'contactoTexto',
            title: 'Texto Contacto',
            type: 'stringType'
        }
    ]
}