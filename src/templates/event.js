import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Img from "gatsby-image"
import Link from '../components/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

function EventTemplate(props) {
  const classes = useStyles();
  const page = props.data.markdownRemark
  return (
    <Layout>
      <Box mx="auto" p={1}>
        <Typography variant="h3" align="center">
          {page.frontmatter.title}
        </Typography>
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Typography>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={3.5}>
          {page.frontmatter.images.map((image) => (
            <GridListTile key={image}>
              <Link to={image.publicURL}>
                <Img fixed={image.childImageSharp.fixed}/>
              </Link>
            </GridListTile>
          ))}
          </GridList>
        </div>
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
          publicURL
          relativePath
          childImageSharp {
            fixed (width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`