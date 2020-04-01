let env = process.env.NODE_ENV || "development"
// env = "production"
const project = process.env.GATSBY_GCP_PROJECT

// console.log({ env })

const editorLinks = {
  development: "http://localhost:8093/editor/server/",
  production: `https://editor-dot-${project}.appspot.com/editor/server/`,
}

const libraryLinks = {
  development: "http://localhost:8082/graphql",
  production: `https://librarian-dot-${project}.appspot.com/graphql`,
}

module.exports = {
  editorLink: editorLinks[env],
  libraryLink: libraryLinks[env],
}
