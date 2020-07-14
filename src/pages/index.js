import React from "react"
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '../components/card'
import Link from '../components/Link';
import Layout from "../components/layout"
import Img from "gatsby-image"
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Breadcrumb from "../components/Breadcrumb"

//import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function IndexPage (props) {
  const classes = useStyles();
  const page = props.data.markdownRemark
  return (
    <Layout>
      <Breadcrumb location={props.location} crumbLabel="Home"/>
      <br></br>
      <Grid
        container
        justify="center"
        className={classes.root}
        spacing={3}
      >
        <Img fixed={page.frontmatter.image.childImageSharp.fixed}/>
        <Grid item sm={6} xs={12}>
          <Typography>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
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
      <Box mx={10}>
        <Grid
          container
          justify="center"
          className={classes.root}
          spacing={4}
        >
          <Grid item md={4} sm={12}>
            <Link to='/severeWeather'>
              <Card
                image={page.frontmatter.severeWeatherImage.publicURL}
                content="Severe Weather"
              />
            </Link>
          </Grid>
          <Grid item md={4} sm={12}>
            <Link to='/wildlandFire'>
              <Card
                image={page.frontmatter.wildlandFireImage.publicURL}
                content="Wildland Fire"
              />
            </Link>
          </Grid>
          <Grid item md={4} sm={12}>
            <Link to='/insectsAndDiseases'>
              <Card
                image={page.frontmatter.insectsAndDiseasesImage.publicURL}
                content="Insects and Diseases"
              />
            </Link>
          </Grid>
          <Grid item md={4} sm={12}>
            <Link to ="/landscapeDiversity">
              <Card
                image={page.frontmatter.landscapeDiversityImage.publicURL}
                content="Landscape Diversity"
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexQuery {
    markdownRemark(fields: {slug: {eq: "/index/"}}) {
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
      }
    }
  }
`
