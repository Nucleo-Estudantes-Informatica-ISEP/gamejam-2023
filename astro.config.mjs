import netlify from '@astrojs/netlify/functions';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image()],
  output: 'server',
  adapter: netlify()
});