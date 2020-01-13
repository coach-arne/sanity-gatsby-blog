export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e1c201f1d9a9272f3d4a6ca',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zimdveqv',
                  apiId: '7e5e1d38-9bad-494d-8629-c989129c46cb'
                },
                {
                  buildHookId: '5e1c201ff7e591882bacf241',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-a7fvuaeb',
                  apiId: '6b231471-76ef-4938-a1d8-34e78904b55c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coach-arne/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-a7fvuaeb.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
