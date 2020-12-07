import React from "react"
import { Link, graphql } from "gatsby"
import { Jumbo, SEO } from "../components";

export const query =  graphql`
	query GET_DESCRIPTION {
		allSite {
			edges {
				node {
					siteMetadata {
							description
              subtitle
						}
				}
			}
		}
	}
`;

const IndexPage = ({ data }) => {
  const { description } = data.allSite.edges[0].node.siteMetadata;
  const { subtitle } = data.allSite.edges[0].node.siteMetadata;
  return (
  <div>
    <SEO title="Home" />
    <Jumbo description={description} subtitle={subtitle} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/gracias/">revisa compra</Link>
    <Link to="/compraCancelada/">compra falllida</Link>
  </div>
)}

export default IndexPage;
