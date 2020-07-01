import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';

const Link = React.forwardRef(function Link(props, ref) {
  return (
    <MuiLink color='inherit' component={GatsbyLink} ref={ref} underline='none' {...props} />
  )
});

export default Link;