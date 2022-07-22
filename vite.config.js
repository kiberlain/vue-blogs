import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [EnvironmentPlugin("all", { prefix: "VITE_" }), vue()],
});
