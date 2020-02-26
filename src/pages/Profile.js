import React, { useState, useEffect } from 'react'
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Header from "../components/Header"
import NewcardMyFood from "../components/NewcardMyFood";
import NewcardFollFood from "../components/NewcardFollFood";
import "../components/Post/Style.css";
import profpic from "./morgan.jpg"
import API from "../utils/API";


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const [result, setResults] = useState();
  const [searchType, setSearchType] = useState("My Food");
  const [user, setUser] = useState(props.user);

  useEffect(() => {
      if(!user) {
          return;
      }
      if( searchType === "My Food" ) {
        console.log("UserId:v" + props.user.id);
        API.getMyPosts(props.user.id)
        .then(res => {
          console.log(res);
          setResults(res);
        })
      };
      if( searchType === "Followed Food" ) {
        console.log("Followed Food")
        API.getMyFood(props.user.id)
        .then(res => {
          console.log(res);
          setResults(res);
        })
      };
  }, [props.user.id, searchType]);

  const handleSearchType = event => {
    console.log("Hidsd");
    setSearchType(event.target.getAttribute('value'));
    // setResult();
  };

  return (
    <div>
      <Header />
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <br />
              <br />
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {props.user.username}
            </Typography>
              <Typography align="center" color="textSecondary">
                <img src={props.user.profilePic} style={{width:"300px", height:"auto", align:"center"}} />
                <p>{props.user.aboutMe}</p>
            </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color={searchType === "My Food"? "primary" : ""}>
                      <div value="My Food" onClick={handleSearchType}>My Food</div>
                    </Button>
                    {/* <Button variant="contained" color="primary">
                      My Food
                  </Button> */}
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color={searchType === "Followed Food"? "primary" : ""}>
                      <div value="Followed Food" onClick={handleSearchType}>Followed Food</div>
                    </Button>
                    {/* <Button variant="outlined" color="primary">
                      Followed Food
                  </Button> */}
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                        {result?
                        result.data.map( (card, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <NewcardMyFood post={card} />
                                </Card>
                            </Grid>
                        )) :
                        "No results..."
                        }
                    </Grid>
          </Container>
        </main>
      </React.Fragment>
    </div>
  );
}
