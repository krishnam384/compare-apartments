import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Avatar } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardStyle: {

    padding: '50px'

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
});

const SimpleCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <React.Fragment>

  
  
    <Card className={classes.cardStyle}>
    <CardHeader
        // avatar={
        //   <Avatar src={props.avatarSrc} />
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <ShareIcon />
        //   </IconButton>
        // }
        title={props.title}
        subheader={props.subTitle}
      />

    <CardMedia
        className={classes.media}
        image={props.avatarSrc}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" >
          This is Description.
        </Typography>
        
      </CardContent>
      {/* <CardActions>
        <Button size="small" color="secondary" variant="outlined">Buy Now</Button>
        <Button size="small" color="primary" variant="outlined">Add to Cart</Button>
      </CardActions> */}
    </Card>
   
    </React.Fragment>
  );
}

export default SimpleCard;