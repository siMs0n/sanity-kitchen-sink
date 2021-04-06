export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606c7e15445e3b10601b7055',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xu2aiz6r',
                  apiId: '9d17cecf-901c-47bd-804a-08dc5e260a18'
                },
                {
                  buildHookId: '606c7e1563dca312c56d05ff',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2p8ns44t',
                  apiId: 'a8f5eca3-a9b9-4d48-812a-223847701fa9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/siMs0n/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2p8ns44t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
