import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import Breadcrumb from "../components/Breadcrumb"

//import { Breadcrumb } from "gatsby-plugin-breadcrumb"

function markdownTemplate(props) {
  const page = props.data.markdownRemark
  const events = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <Breadcrumb location={props.location} crumbLabel="Wildland Fire"/>
      <Box mx="auto" p={1}>
        <Typography variant="h3" align="center">
          {page.frontmatter.title}
        </Typography>
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Typography>
        {events.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link to={node.fields.slug}>
              {title} {<br></br>}
            </Link>
          )
        })}
      </Box>
    </Layout>
  )
}

export default markdownTemplate

export const pageQuery = graphql`
  query wildlandFireQuery {
    markdownRemark(fields: {slug: {eq: "/wildlandFire/"}}) {
      id
      html
      frontmatter {
        title
        description
      }
    }
    allMarkdownRemark(filter: {fields: {slug: {regex: "/wildlandFire/"}}, frontmatter: {page: {eq: "wildlandFire"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            type
          }
        }
      }
    }
  }
`