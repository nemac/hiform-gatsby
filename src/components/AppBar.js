import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '../components/Link';
import Box from '@material-ui/core/Box';
import Img from "gatsby-image"
import customTheme from '../theme'
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
            fixed (width: 160) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        nemac: file(relativePath: { eq: "nemac_logo.png" }) {
          childImageSharp {
            fixed (width: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        forestService: file(relativePath: { eq: "FS_logo.png" }) {
          childImageSharp {
            fixed (width: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        usda: file(relativePath: { eq: "USDA_logo.png" }) {
          childImageSharp {
            fixed (width: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const classes = useStyles();

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar color="inherit" className={classes.root} position="static">
        <Box mx={5}>
          <Toolbar>
            <Link to='/' className={classes.hiformLogo}>
              <Img fixed={data.hiform.childImageSharp.fixed}/>
            </Link>
            <a href="https://www.usda.gov/" color='inherit'>
               <Img fixed={data.usda.childImageSharp.fixed}/>
            </a>
            <a href="https://www.fs.fed.us/" color='inherit'>
              <Img fixed={data.forestService.childImageSharp.fixed}/>
            </a>
            <a href="https://nemac.unca.edu/" color='inherit'>
              <Img fixed={data.nemac.childImageSharp.fixed}/>
            </a>
          </Toolbar>
        </Box>
      </AppBar>
    </ThemeProvider>
  )
}