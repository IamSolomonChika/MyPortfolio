import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const POSTS_DIRECTORY = path.join(process.cwd(), "content/posts")

interface Post {
    slug: string;
    content: string;
    date: string;
}

export async function GET() {
  try {
    // Create posts directory if it doesn't exist
    if (!fs.existsSync(POSTS_DIRECTORY)) {
      fs.mkdirSync(POSTS_DIRECTORY, { recursive: true })
    }

    const files = fs.readdirSync(POSTS_DIRECTORY)
    const posts: Post[] = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const filePath = path.join(POSTS_DIRECTORY, file)
        const fileContents = fs.readFileSync(filePath, "utf8")
        const { data, content } = matter(fileContents)
        
        return {
          ...data,
          slug: file.replace(/\.mdx$/, ""),
          content,
        } as Post
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return NextResponse.json({ posts })
  } catch (error) {
    console.error("Error reading posts:", error)
    return NextResponse.json({ posts: [] })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, content, description, tags, scheduledFor } = body

    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, "-")

    const date = new Date().toISOString()
    const frontMatter = {
      title,
      description,
      date,
      tags,
      published: !scheduledFor,
      ...(scheduledFor && { scheduledFor }),
    }

    const fileContent = matter.stringify(content, frontMatter)
    const filePath = path.join(POSTS_DIRECTORY, `${slug}.mdx`)

    // Create posts directory if it doesn't exist
    if (!fs.existsSync(POSTS_DIRECTORY)) {
      fs.mkdirSync(POSTS_DIRECTORY, { recursive: true })
    }

    fs.writeFileSync(filePath, fileContent)

    return NextResponse.json({ success: true, slug })
  } catch (error) {
    console.error("Error creating post:", error)
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    )
  }
}

export async function DELETE(req: Request) {
  try {
    const { slug } = await req.json()
    const filePath = path.join(POSTS_DIRECTORY, `${slug}.mdx`)

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      )
    }
  } catch (error) {
    console.error("Error deleting post:", error)
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    )
  }
} 