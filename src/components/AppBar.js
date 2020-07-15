import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '../components/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Img from "gatsby-image"
import customTheme from '../theme'
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hiformLogo: {
    height: '100%',
    width: '100%',
  },
  partnerLink: {
    padding: theme.spacing(2),
    height: '100%',
    width: '100%',
  },
  centerXS: {
    [theme.breakpoints.down("xs")]: {
      textAlign: 'center',
    }
  }
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
            fixed (width: 55) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        forestService: file(relativePath: { eq: "FS_logo.png" }) {
          childImageSharp {
            fixed (width: 55) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        usda: file(relativePath: { eq: "USDA_logo.png" }) {
          childImageSharp {
            fixed (width: 55) {
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
        <Box mx={10} py={1}>
          <Toolbar>
            <Grid container >
              <Grid className={classes.centerXS} item xs={12} sm={7} md={8} lg={9} >
                <Link to='/' className={classes.hiformLogo}>
                  <Img fixed={data.hiform.childImageSharp.fixed}/>
                </Link>
              </Grid>
               <Grid alignItems='center' justify='center' container wrap="nowrap" item xs={12} sm={5} md={4}  lg={3} >
                 <Grid item xs={4}>
                   <a className={classes.partnerLink} href="https://www.usda.gov/" color='inherit'>
                      <Img fixed={data.usda.childImageSharp.fixed}/>
                   </a>
                 </Grid>
                 <Grid item xs={4}>
                   <a className={classes.partnerLink} href="https://www.fs.fed.us/" color='inherit'>
                     <Img fixed={data.forestService.childImageSharp.fixed}/>
                   </a>
                 </Grid>
                 <Grid item xs={4}>
                   <a className={classes.partnerLink} href="https://nemac.unca.edu/" color='inherit'>
                     <Img fixed={data.nemac.childImageSharp.fixed}/>
                   </a>
                 </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Box>
      </AppBar>
    </ThemeProvider>
  )
}
