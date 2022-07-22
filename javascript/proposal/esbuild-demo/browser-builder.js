require("esbuild").buildSync({
  entryPoints: ["app.tsx"],
  bundle: true,
  minify: false,
  sourcemap: true,
  target: ["chrome57", "firefox57", "safari11", "edge16"],
  outdir: "./public/dist",
});
