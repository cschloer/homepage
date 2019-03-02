// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/conrad/Projects/personal/homepage/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/conrad/Projects/personal/homepage/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-aboutme-js": () => import("/home/conrad/Projects/personal/homepage/src/pages/aboutme.js" /* webpackChunkName: "component---src-pages-aboutme-js" */),
  "component---src-pages-index-js": () => import("/home/conrad/Projects/personal/homepage/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/home/conrad/Projects/personal/homepage/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-projects-js": () => import("/home/conrad/Projects/personal/homepage/src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/conrad/Projects/personal/homepage/.cache/data.json")

