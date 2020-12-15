import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const   GET_IMAGE = graphql`
    query {
    icon: file( relativePath: { eq: "icon.png"}) {
        childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default function Image({name}) {
    return (
        <StaticQuery
            query={GET_IMAGE}
            render={data => <Img fluid={data[name].childImageSharp.fluid} />}
        >

        </StaticQuery>
    )
}