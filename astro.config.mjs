import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sharp from 'sharp'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  integrations: [
    compress(),
    mdx(),
    tailwind(),
    {
      transformer: sharp,
      name: 'sharp',
    },
  ],
  experimental: {
    assets: true, // docs.astro.build/en/guides/assets/ & astro.build/blog/images/
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
})
