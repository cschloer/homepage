const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/conrad/Projects/personal/homepage/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/conrad/Projects/personal/homepage/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/conrad/Projects/personal/homepage/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/conrad/Projects/personal/homepage/src/pages/page-2.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/conrad/Projects/personal/homepage/src/pages/projects.js")))
}

