import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';
import { Breadcrumb as GatsbyBreadcrumb } from "gatsby-plugin-breadcrumb";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Breadcrumb = React.forwardRef(function Breadcrumb(props, ref) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiBreadcrumbs separator="›" aria-label="breadcrumb" component={GatsbyBreadcrumb} ref={ref} {...props} />
    </div>
  )
});

export default Breadcrumb;