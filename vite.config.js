/** @type {import('vite').UserConfig} */
/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    deps: {
      optimizer: "web",
    },
    environment: "jsdom",
    globals: "true",
  },
  server: {
    port: 3000,
  },
});
