import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  cardActions: {
    justifyContent: 'center',
  },
  media: {
    height:140,
  }
}));

function SimpleCard({ content, href, linkText, image }) {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardContent>
        <Typography align="center">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SimpleCard;