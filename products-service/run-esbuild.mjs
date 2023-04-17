import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['lambdas/getProductsList.js', 'lambdas/getProductsById.js'],
  bundle: true,
  platform: 'node',
  outdir: 'dist',
})