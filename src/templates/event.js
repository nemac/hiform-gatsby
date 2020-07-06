import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Img from "gatsby-image"
import Link from '../components/Link';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "auto",
    height: "auto"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EventTemplate(props) {
  const classes = useStyles();
  const [selectedTile, setSelectedTile] = React.useState(null);
  const [value, setValue] = React.useState([]);
  const page = props.data.markdownRemark

  const handleClickOpen = tile => {
    setSelectedTile(tile);
  };

  const handleClose = () => {
    setSelectedTile(null);
  };

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
          <GridList className={classes.gridList} cols={4}>
          {page.frontmatter.images.map((image) => (
            <GridListTile key={image.name}>
              <img src={image.publicURL} alt=""/>
              <GridListTileBar
                title={image.name}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${image.name}`}
                    className={classes.icon}
                    value={image.id}
                    onClick={() => handleClickOpen(image)}
                  >
                    <ZoomOutMapIcon/>
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
          </GridList>
          <Dialog
              fullScreen
              open={selectedTile !== null}
              onClose={handleClose}
              TransitionComponent={Transition}
          >
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            {selectedTile && (
              <Img fluid={selectedTile.childImageSharp.fluid} />
            )}
          </Dialog>
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
          id
          name
          publicURL
          relativePath
          childImageSharp {
            fluid (quality:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`