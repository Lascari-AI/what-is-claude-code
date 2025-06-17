import fs from 'node:fs/promises';
import path from 'node:path';
import * as url from 'node:url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

import { globbySync } from 'globby';

export const repoRoot = path.join(__dirname, '..')
export const slidesDir = path.join(repoRoot, 'slides')

// Get all slides and sort them
const slides = globbySync('*.md', { cwd: slidesDir }).sort()

// Read the existing index.md to preserve the frontmatter
const existingIndex = await fs.readFile(path.join(repoRoot, 'index.md'), 'utf-8')
const frontmatterMatch = existingIndex.match(/^---[\s\S]*?---/)
const frontmatter = frontmatterMatch ? frontmatterMatch[0] : ''

// Build the new index content
const indexContent: string[] = [frontmatter]

// Add each slide as a src reference
slides.forEach(slide => {
    indexContent.push('')
    indexContent.push('---')
    indexContent.push(`src: ./slides/${slide}`)
    indexContent.push('---')
})

// Write the updated index.md
await fs.writeFile(
    path.join(repoRoot, 'index.md'),
    indexContent.join('\n') + '\n'
)