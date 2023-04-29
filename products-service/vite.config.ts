/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },

  plugins: [],

  test: {
    globals: true,
    environment: "node",
  },
});
