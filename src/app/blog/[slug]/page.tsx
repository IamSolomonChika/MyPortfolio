import { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { notFound } from "next/navigation"

interface BlogPost {
  title: string
  description: string
  date: string
  content: string
  slug: string
}

interface Props {
  params: {
    slug: string
  }
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const postsDirectory = path.join(process.cwd(), "content/posts")
  const filePath = path.join(postsDirectory, `${slug}.mdx`)

  try {
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)
    
    return {
      ...data,
      content,
      slug,
    } as BlogPost
  } catch (error) {
    console.error("Error reading blog post:", error)
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return constructMetadata({
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
      noIndex: true,
    })
  }

  return constructMetadata({
    title: post.title,
    description: post.description,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="container py-12 prose dark:prose-invert max-w-3xl mx-auto">
      <h1>{post.title}</h1>
      <div className="text-muted-foreground">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
} 