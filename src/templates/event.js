import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Lightbox from '../components/Lightbox'
import Breadcrumb from "../components/Breadcrumb"
import { makeStyles } from '@material-ui/core/styles';

//import { Breadcrumb } from "gatsby-plugin-breadcrumb"
const useStyles = makeStyles((theme) => ({
  bodyText: {
    fontSize: "1rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em"
  }
}))

function EventTemplate(props) {
  const classes = useStyles();
  const page = props.data.markdownRemark
  let images = []
  page.frontmatter.images.map((image) => (
    images.push({
      src: image.publicURL,
      width: 100,
      height: 100
    })
  ))
  console.log(page.frontmatter.images.childImageSharp)

  return (
    <Layout>
      <Breadcrumb location={props.location} crumbLabel={page.frontmatter.title}/>
      <Box mx="auto" p={1} fontSize="h3.fontSize">
        <Typography variant="h3" align="center">
          {page.frontmatter.title}
        </Typography>
        <div  className={classes.bodyText}  dangerouslySetInnerHTML={{ __html: page.html }} />
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
