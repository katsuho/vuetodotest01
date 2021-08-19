module.exports = {
  publicPath: "/vuetodotest01/", // GitHubPagesにあげるならリポジトリ名をいれる,
  assetsDir: "",
  outputDir: "docs/", // GitHubPagesにあげるならこれをする方がいい
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /\/vuetodotest01\/.+/,
          handler: 'networkFirst',
          options: {
            cacheName: 'vuetodotest01-cache1',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
}
