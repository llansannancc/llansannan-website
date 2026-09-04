import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://llansannan-cc.gov.uk',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
