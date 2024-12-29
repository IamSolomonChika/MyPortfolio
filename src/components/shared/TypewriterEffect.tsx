"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
}: TypewriterEffectProps) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false)
        setIsDeleting(true)
        return
      }

      if (isDeleting) {
        if (text === "") {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        } else {
          setText(text.slice(0, -1))
        }
      } else {
        if (text === currentWord) {
          setIsWaiting(true)
        } else {
          setText(currentWord.slice(0, text.length + 1))
        }
      }
    }, isWaiting ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, isWaiting, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className="text-primary">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
} 