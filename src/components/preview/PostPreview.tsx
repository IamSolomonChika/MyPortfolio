"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"

interface PostPreviewProps {
  post: {
    title: string
    content: string
    date: string
    tags: string[]
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preview: {post.title}</CardTitle>
        <div className="text-sm text-muted-foreground">
          {format(new Date(post.date), "MMMM d, yyyy")}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </CardContent>
    </Card>
  )
} 