const shiki = require('shiki')

const t = shiki.loadTheme('./markdown-theme.json')

shiki.getHighlighter({
  theme: t,
})
