module.exports = {
  base: '/element-ui-extend/',
  title: 'element-ui-extend', // 网站标题
  description: ' ', // 网站描述，在页面中表现为一个<meta>标签
  // 被注入到页面的<head>标签中
  head: [
    ['link', {rel: 'icon', href: `/logo.png`}]
  ],
  themeConfig: {
    nav: [
      {
        text: '组件',
        items: [
          { text: 'comboGrid', link: '/comboGrid' },
          { text: 'paginationTable', link: '/paginationTable' }
        ]
      },
      { text: '公共方法', link: '/publicMethods' }
    ],
    sidebar: {
      '/comboGrid/': [
        ['', 'API接口']
      ],
      '/paginationTable/': [
        ['', 'API接口']
      ]
    }
  }
}
