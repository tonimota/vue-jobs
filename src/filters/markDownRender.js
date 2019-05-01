import markDown from 'markdown-it'

export const renderMarkdown = (value) => {
  if (value) {
    let MarkdownIt = markDown
    let md = new MarkdownIt()
    let text = md.render(value)
    return text
  }
}
