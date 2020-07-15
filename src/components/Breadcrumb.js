import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from './Link';
import Typography from '@material-ui/core/Typography';

// import { Breadcrumb as GatsbyBreadcrumb } from "gatsby-plugin-breadcrumb";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


const Breadcrumb = React.forwardRef(function Breadcrumb(props, ref) {
  const classes = useStyles();
  const pathnames = props.location.pathname.split('/').filter(x => x);
  console.log(pathnames)
  return (
    <div className={classes.root}>
      <MuiBreadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" to="/" >
          Home
        </Link>
        {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames
                  .slice(0, index + 1)
                  .join("/")}`;

              // Split value so the string can be transformed and parsed later.
              const path = value.split("-");
              // Convert first char of string to uppercase.
              path.forEach((item, i) => {
                  // Only capitalize starting from the second element.
                  if (i > 0) {
                      path[i] =
                          path[i]
                              .charAt(0)
                              .toUpperCase() +
                          path[i].slice(1);
                  }
              });

              // last part is just text all others are links
              return last ? (
                  <Typography
                      color="textPrimary"
                      key={to}
                  >
                      {path}
                  </Typography>
              ) : (
                  <Link
                      color="inherit"
                      key={to}
                      to={"/" + path}
                  >
                      {path}
                  </Link>
              );
          })}
      </MuiBreadcrumbs>
    </div>
  )
});

export default Breadcrumb;
