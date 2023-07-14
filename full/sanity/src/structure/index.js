export const structure = (S, context) =>
    S.list()
        .title('Content')
            .items([
                S.listItem()
                    .title('Página de Ajustes')
                    .icon(() => '🌏')
                    .child(
                        S.editor()
                            .id('settingsPage')
                            .schemaType('settingsPage')
                            .documentId('settingsPage')
                            .title('Página de Ajustes')
                    ),
                
                S.listItem()
                    .title('Página de Inicio')
                    .icon(() => '🏡')
                    .child(
                        S.editor()
                            .id('homePage')
                            .schemaType('homePage')
                            .documentId('homePage')
                            .title('Página de Inicio')
                    ),
                S.listItem()
                    .title('Página de Portafolio')
                    .icon(() => '📦')
                    .child(
                        S.editor()
                            .id('portfolioPage')
                            .schemaType('portfolioPage')
                            .documentId('portfolioPage')
                            .title('Página de Portafolio')
                    ),
                S.listItem()
                    .title('Página Sobre Nosotros')
                    .icon(() => '🙋‍♀️')
                    .child(
                        S.editor()
                            .id('aboutPage')
                            .schemaType('aboutPage')
                            .documentId('aboutPage')
                            .title('Página Sobre Nosotros')
                    ),                
                S.listItem()
                    .title('Página de Contacto')
                    .icon(() => '📫')
                    .child(
                        S.editor()
                            .id('contactPage')
                            .schemaType('contactPage')
                            .documentId('contactPage')
                            .title('Página de Contacto')
                    ),  
                S.divider(),
                ...S.documentTypeListItems().filter(
                    (listItem) => 
                    ![
                        'settingsPage',
                        'homePage',
                        'portfolioPage',
                        'aboutPage',
                        'contactPage'

                    ].includes(listItem.getId())
                )
            ])