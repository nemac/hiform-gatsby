import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Lightbox from '../components/Lightbox'
import Breadcrumb from "../components/Breadcrumb"

//import { Breadcrumb } from "gatsby-plugin-breadcrumb"

function EventTemplate(props) {
  const page = props.data.markdownRemark
  let images = []
  page.frontmatter.images.map((image) => (
    images.push({
      src: image.publicURL,
      width: 100,
      height: 100
    })
  ))

  return (
    <Layout>
      <Breadcrumb location={props.location} crumbLabel={page.frontmatter.title}/>
      <Box mx="auto" p={1}>
        <Typography variant="h3" align="center">
          {page.frontmatter.title}
        </Typography>
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Typography>
        <Lightbox images={page.frontmatter.images}/>
      </Box>
    </Layout>
  )
}

export default EventTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        description
        images {
          id
          name
          publicURL
          relativePath
          childImageSharp {
            sizes (maxWidth: 1800){
              ...GatsbyImageSharpSizes
            }
            fluid (quality:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          sizes(maxWidth: 1800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
