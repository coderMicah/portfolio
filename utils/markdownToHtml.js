import { remark } from 'remark'

// import { micromark } from 'micromark'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString();
}