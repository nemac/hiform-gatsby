import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function markdownTemplate(props) {
  const page = props.data.markdownRemark
  return (
    <Layout>
      <Box mx="auto" p={1}>
        <Typography variant="h3" align="center">
          {page.frontmatter.title}
        </Typography>
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Typography>
      </Box>
    </Layout>
  )
}

export default markdownTemplate

export const pageQuery = graphql`
  query markdownQuery ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`