import { defineConfig } from "tsdown";

export default defineConfig({
  target: "es2022",
  format: ["esm"],
  exports: true,
  dts: true,
});
