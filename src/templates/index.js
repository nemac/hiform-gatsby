import React from "react"
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '../components/card'
import Link from '../components/Link';
import Layout from "../components/layout"
import Img from "gatsby-image"
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

function indexTemplate(props) {
  const page = props.data.markdownRemark
  return (
    <Layout>
      <Grid
        container
        justify="center"
        spacing={3}
      >
        <Img fixed={page.frontmatter.image.childImageSharp.fixed}/>
        <Grid item sm={6} xs={12}>
          <Typography>
            {page.frontmatter.mainText}
            <br></br><br></br>
            {page.frontmatter.mainTextTwo}
            <br></br><br></br>
            {page.frontmatter.mainTextThree}
            <br></br><br></br>
          </Typography>
        </Grid>
      </Grid>
      <Typography align="center">
        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
          Projects
        </Box>
      </Typography>
      <Divider/>
      <br></br>
      <Grid
        container
        justify="center"
        spacing={3}
      >
        <Grid item sm={3} xs={12}>
          <Link to='/severeWeather'>
            <Card
              image={page.frontmatter.severeWeatherImage.publicURL}
              content="Severe Weather"
            />
          </Link>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Link to='/wildlandFire'>
            <Card
              image={page.frontmatter.wildlandFireImage.publicURL}
              content="Wildland Fire"
            />
          </Link>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Link to='/insectsAndDiseases'>
            <Card
              image={page.frontmatter.insectsAndDiseasesImage.publicURL}
              content="Insects and Diseases"
            />
          </Link>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Link to ="/landscapeDiversity">
            <Card
              image={page.frontmatter.landscapeDiversityImage.publicURL}
              content="Landscape Diversity"
            />
          </Link>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default indexTemplate

export const pageQuery = graphql`
  query indexQuery ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        severeWeatherImage {
          publicURL
        }
        wildlandFireImage {
          publicURL
        }
        insectsAndDiseasesImage {
          publicURL
        }
        landscapeDiversityImage {
          publicURL
        }
        mainText
        mainTextTwo
        mainTextThree
      }
    }
  }
`