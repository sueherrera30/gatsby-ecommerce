import React from "react"
import { Link } from "gatsby"
import Jumbo from "../components/Jumbo";
import { Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/gracias/">revisa compra</Link>
    <Link to="/compraCancelada/">compra falllida</Link>

  </Layout>
)

export default IndexPage
