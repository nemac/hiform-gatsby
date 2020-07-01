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

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Grid
        container
        justify="center"
        spacing={3}
      >
        <Img fixed={data.frontpage.childImageSharp.fixed}/>
        <Grid item sm={6} xs={12}>
          <Typography>
            Rapidly evolving technologies are revolutionizing the way we monitor forests. These changes include the ability to monitor impacts from forest disturbances with higher spatial detail and frequency than ever before thanks to the availability of new satellites and cloud computing. Progress also depends on our ability to transfer this technology in ways that make sense to those who need it. With these applied needs in mind, this Forest Service Research and Development initiative is designed to demonstrate the forest monitoring that is now possible, to refine ways that these capabilities can be best adapted for managers, and to improve insights about eastern US forest dynamics more fundamentally.
            <br></br><br></br>
            HiForm leverages 10-meter resolution Sentinel-2 imagery from the European Space Agency because of its detail and frequency. We also research landscape applications of LiDAR and new approaches to track forest dynamics at this level of detail for longer term planning and monitoring. Our emphasis is on eastern US forests, with particular focus on the Southeast and Appalachians.
            <br></br><br></br>
            For weekly MODIS (240 meter) resolution change maps for the conterminous US, see our sister project, ForWarn ll.
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
              image="/img/severeWeather.png"
              content="Severe Weather"
            />
          </Link>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Link to='/wildlandFire'>
            <Card
              image="/img/wildlandFire.png"
              content="Wildland Fire"
            />
          </Link>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Link to='/insectsAndDiseases'>
            <Card
              image="/img/insectsAndDiseases.png"
              content="Insects and Diseases"
            />
          </Link>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Link to ="/landscapeDiversity">
            <Card
              image="/img/landscapeDiversity.png"
              content="Landscape Diversity"
            />
          </Link>
        </Grid>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    frontpage: file(relativePath: { eq: "frontpage.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    severeWeather: file(relativePath: { eq: "severeWeather.png" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`