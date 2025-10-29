import { defineConfig } from 'astro/config';

// Importa la integración oficial de Astro
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Así se usa la integración
  integrations: [tailwind()]
});