"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ImagePlus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ImageUploadProps {
  onUpload: (url: string) => void
}

export function ImageUpload({ onUpload }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      setIsUploading(true)
      const file = event.target.files?.[0]
      if (!file) return

      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to upload image')
      }

      const data = await response.json()
      onUpload(data.url)
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      })
    } catch (err: unknown) {
      const error = err as Error
      console.error("Upload error:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to upload image",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        disabled={isUploading}
        onClick={() => document.getElementById('imageUpload')?.click()}
      >
        <ImagePlus className="h-4 w-4 mr-2" />
        {isUploading ? "Uploading..." : "Upload Image"}
      </Button>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onSubmit}
      />
    </div>
  )
} 