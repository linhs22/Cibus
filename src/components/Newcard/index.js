import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    borderRight: ".25px solid lightgrey",
    borderBottom: ".5px solid lightgrey",
    margin:"5%",
    float:"left"
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#3fb0ac",
  },
}));

export default function Newcard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
            {/* {whatever.userimage} */}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          {/* card settings button top right */}
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        // title={whatever.title}
        subheader="September 14, 2016"
        // subheader="{whatever.postdate}"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        // image={whatever.image}
        title="Paella dish"
        // title={whatever.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          description
          {/* {whatever.description} */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{maxwidth:"345px"}}>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
            {/* {whatever.recipe} */}
          </Typography>
          <Typography paragraph>
           Seasonings
           {/* {whatever.comments} */}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
