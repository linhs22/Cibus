import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Searchcard(props) {
  const classes = useStyles();
  console.log(props)
  const [user, setUser] = useState({
    name: '',
    username: '',
    profilePic: '',
    id: 0,
    isAuthenticated: true
  });

  useEffect(() => {
    API.userExist("mechea")
      .then(res => {
        setUser({
          name: res.data.firstname,
          username: res.data.username,
          profilePic: res.data.profilePic,
          aboutMe: res.data.aboutMe,
          id: res.data.id
        })
      })
  }, []);

   const follow = () => {
    console.log(props.user.id)
    API.followUser(user.id, props.user.id)
      .then(res => {
        console.log(res)
      })
    }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.user.profilePic}
          title={`Image of ${props.user.username}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.user.username}
            {/* {whatever.foodname} */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* {whatever.description} */}
            {/* {whatever.profiledescription} */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={follow} size="small" color="primary">
          Follow
        </Button>
      </CardActions>
    </Card>
  );
}
