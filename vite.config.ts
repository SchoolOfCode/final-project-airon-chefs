import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  ...(mode !== "production" && {
    test: {
      globals: true,
      environment: "jsdom",
      include: ["**/*.test.tsx", "**/*.test.ts"],
      setupFiles: [join(__dirname, "src/setupTests.ts")],
    },
  }),
}));
