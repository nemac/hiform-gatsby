import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { 
  makeStyles,
} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Img from "gatsby-image"
import customTheme from '../theme'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  hiformLogo: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          buildTime(formatString: "YYYY-MM-DD HH:mm:ss z")
          siteMetadata {
            description
            githubRepo
          }
        }
        hiform: file(relativePath: { eq: "logo-hiform.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nemac: file(relativePath: { eq: "nemac_logo.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        forestService: file(relativePath: { eq: "FS_logo.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        usda: file(relativePath: { eq: "USDA_logo.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const classes = useStyles();

  return (
    <Box ml={10} mr={10} mt={2}>
      <ThemeProvider theme={customTheme}>
        <Toolbar>
          <Grid
            container
            justify="space-around"
            spacing={3}
          >
            <Grid item sm={2} xs={12}>
              <Link to='/'>
                <Img fluid={data.hiform.childImageSharp.fluid}/>
              </Link>
            </Grid>
            <Grid item sm={1} xs={12}>
              <ButtonGroup variant="text">
              <a href="https://www.usda.gov/" color='inherit'>
                <Img fluid={data.usda.childImageSharp.fluid}/>
              </a>
              <a href="https://www.fs.fed.us/" color='inherit'>
                <Img fluid={data.forestService.childImageSharp.fluid}/>
              </a>
              <a href="https://nemac.unca.edu/" color='inherit'>
                <Img fluid={data.nemac.childImageSharp.fluid}/>
              </a>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Toolbar>
      </ThemeProvider>
      <Divider/>
    </Box>
  )
}