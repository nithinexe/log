import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import breaks from 'remark-breaks'

const logsFile = path.join(process.cwd(), 'content', 'logs.md')

export async function getLogContent() {
  const fileContents = fs.readFileSync(logsFile, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .use(breaks)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    contentHtml,
    ...(matterResult.data as { title: string })
  }
}