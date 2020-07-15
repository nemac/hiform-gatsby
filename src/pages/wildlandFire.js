import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../components/Link';
import Breadcrumb from "../components/Breadcrumb"

//import { Breadcrumb } from "gatsby-plugin-breadcrumb"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bodyText: {
    fontSize: "1rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em"
  },
  projectHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
  }
}));

function markdownTemplate(props) {
  const classes = useStyles();
  const page = props.data.markdownRemark
  const events = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <Breadcrumb location={props.location} crumbLabel="Wildland Fire"/>
      <Box mx="auto" p={1}>
        <Box className={classes.projectHeader} fontSize="h6.fontSize" pt={4}>
          {page.frontmatter.title}
        </Box>
        <Box>
          <div className={classes.bodyText} dangerouslySetInnerHTML={{ __html: page.html }} />
        </Box>
        {events.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link key={node.fields.slug} to={node.fields.slug}>
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