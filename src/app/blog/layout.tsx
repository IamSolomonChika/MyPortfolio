import { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"

export const metadata: Metadata = constructMetadata({
  title: "Blog",
  description: "Read my thoughts and insights on blockchain development, machine learning, and digital marketing.",
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 