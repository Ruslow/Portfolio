const React = require("react")
const Layout = require("./src/components/Layout").default
const ContextP = require("./src/components/Context")

exports.wrapPageElement = ({ element, props }) => {
  return (
    <ContextP.ContextProvider>
      <Layout {...props}>{element}</Layout>
    </ContextP.ContextProvider>
  )
}
