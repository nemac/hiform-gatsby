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
            fixed(width: 250, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        nemac: file(relativePath: { eq: "nemac_logo.png" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        forestService: file(relativePath: { eq: "FS_logo.png" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        usda: file(relativePath: { eq: "USDA_logo.png" }) {
          childImageSharp {
            fixed(width: 75, height: 50) {
              ...GatsbyImageSharpFixed
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
        <Toolbar m={10}>
          <Typography className={classes.hiformLogo}>
            <Link to='/'>
              <Img fixed={data.hiform.childImageSharp.fixed}/>
            </Link>
          </Typography>
          <Button href="https://www.usda.gov/" color='inherit'>
            <Img fixed={data.usda.childImageSharp.fixed}/>
          </Button>
          <Button href="https://www.fs.fed.us/" color='inherit'>
            <Img fixed={data.forestService.childImageSharp.fixed}/>
          </Button>
          <Button href="https://nemac.unca.edu/" color='inherit'>
            <Img fixed={data.nemac.childImageSharp.fixed}/>
          </Button>
        </Toolbar>
      </ThemeProvider>
      <Divider/>
    </Box>
  )
}