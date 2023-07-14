export default {
    name: 'settingsPage',
    title: 'Página de Ajustes',
    type: 'document',
    fields: [
        {
            name: 'nombreDeLaWeb',
            title: 'Nombre de la Web',
            type: 'string'
        },
        {
            name: 'tageline',
            title: 'Tagline',
            type: 'stringType'
        },
        {
            name: 'nevadaLogo',
            title: 'Logo de Nevada',
            type: 'imageType',
        },
        {
            name: 'frasesNevada',
            title: 'Frases Nevada',
            type: 'array',
            of: [
                {
                  type: 'stringType',
                }
              ]
        },
        {
            name: 'descripcion',
            title: 'Descripción',
            type: 'textType'
        },
        {
            name: 'direccion',
            title: 'Dirección',
            type: 'text'
        },
        {
            name: 'linkMapa',
            title: 'Link Mapa',
            type: 'string'
        },
        {
            name: 'tel',
            title: 'Tel',
            type: 'string'
        },
        {
            name: 'mail',
            title: 'Mail',
            type: 'string'
        },
        {
            name: 'redesSociales',
            title: 'Redes Sociales',
            type: 'array',
            of: [
                {
                    type: 'socialLink'
                }
            ]
        },
        {
            name: 'copyRight',
            title: 'Copy Right',
            type: 'stringType'
        },
        {
            name: 'sticker1',
            title: 'Sticker 1',
            type: 'imageType'
        },
        {
            name: 'sticker2',
            title: 'Sticker 2',
            type: 'imageType'
        }
    ]
}