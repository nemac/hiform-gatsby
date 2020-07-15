import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import Lightbox from '../components/Lightbox'
import Breadcrumb from "../components/Breadcrumb"
import { makeStyles } from '@material-ui/core/styles';

import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'


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
  const images = page.frontmatter.images.map((node) => node.childImageSharp)
  return (
    <Layout>
      <Breadcrumb location={props.location} crumbLabel={page.frontmatter.title}/>
      <Box mx="auto" p={1} fontSize="h3.fontSize">
        <Typography variant="h3" align="center">
          {page.frontmatter.title}
        </Typography>
        <div  className={classes.bodyText}  dangerouslySetInnerHTML={{ __html: page.html }} />
        <Box mx={1}>
          <Gallery images={images} />
        </Box>
      </Box>
    </Layout>
  )
}

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
            thumb: fluid(quality: 100, maxWidth: 250, srcSetBreakpoints: [ 100, 150, 250, 500, 750 ] ) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxHeight: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default EventTemplate
