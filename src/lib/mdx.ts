import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'

type Post = {
  title: string
  description: string
  date: string
  readTime?: string
  slug: string
  tags: string[]
}

export function getBlogPosts(): Post[] {
  const postsDirectory = join(process.cwd(), 'content/posts')
  const fileNames = readdirSync(postsDirectory)

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = join(postsDirectory, fileName)
      const fileContents = readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        title: data.title,
        description: data.description,
        date: data.date,
        readTime: `${Math.ceil(fileContents.length / 1000)} min read`,
        slug,
        tags: data.tags || []
      }
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return posts
} 