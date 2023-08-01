export default {
    name: 'portfolioPage',
    title: 'Página Portafolio',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título',
            type: 'string'
        },
        {
            name: 'textoPortfolio',
            title: 'Texto Portafolio',
            type: 'stringType'
        },
        {
            name: 'textoOtrosProyectos',
            title: 'Texto en -seeción otros proyectos- dentro de cada proyecto',
            type: 'stringType'
        },
    ]
}