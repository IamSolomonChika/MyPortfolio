import { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"

export const metadata: Metadata = constructMetadata({
  title: "Contact",
  description: "Get in touch with me for collaborations, opportunities, or just to say hello.",
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 