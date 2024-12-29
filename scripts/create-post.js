const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (query) => new Promise((resolve) => rl.question(query, resolve))

async function createPost() {
  const title = await question('Enter post title: ')
  const description = await question('Enter post description: ')
  const tags = await question('Enter tags (comma-separated): ')

  const date = new Date().toISOString().split('T')[0]
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  const content = `---
title: ${title}
description: ${description}
date: ${date}
tags: [${tags.split(',').map(tag => tag.trim()).join(', ')}]
author: Solomon Chika
---

Write your content here...

## Introduction

## Main Content

## Conclusion
`

  const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.mdx`)
  
  // Create directories if they don't exist
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFileSync(filePath, content)
  console.log(`Created new post: ${filePath}`)
  rl.close()
}

createPost().catch(console.error) 