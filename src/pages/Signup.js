import React, { useState,useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import taco from "./taco.png"
import { withRouter } from "react-router-dom";
import API from "../utils/API";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup(props) {
  const classes = useStyles();
  const [login, setLogin] = useState({
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      selectedFile: ""

  })
  const handleInputChange = event => {
      const { name, value } = event.target;
      setLogin({
          ...login,
          [name]: value
      })
  }
  const handleFormSubmit = event => {
      event.preventDefault();
      const data = new FormData();
      data.append('image', login.selectedFile);
      API.signup(data)
        .then(res => {
          // this.setState({
          //   concepts: res.data.concepts,
          //   imageUrl: res.data.imageUrl,
          //   postId: res.data.postId,
          //   show: false
          // });
        })
        .catch(err => console.log(err));
      // API.login(login).then(res=>{
      //     console.log(res.data)
      //     props.history.push("/");
      //     // API.isAuthenticated().then(data => {
      //     //   console.log(data);
      //     // }).catch(err=>{
      //     //   console.log('No bueno')
      //     // })
      // })
      // .catch(err=>{
      //   console.log(err.data)
      //     console.log(err);
      // })
  }

  const onChangeHandler = async (event) => {
    event.preventDefault();
    await setLogin({
      selectedFile: event.target.files[0],
      loadFile: URL.createObjectURL(event.target.files[0])
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <br /><br /><br />
      <CssBaseline />
      <div className={classes.paper}>

        {/* <Avatar className={classes.avatar}> */}
          {/* <LockOutlinedIcon /> */}
        {/* </Avatar> */}
        <img src={taco} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={login.firstname}
              onChange={handleInputChange}
              name="firstname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={login.lastname}
              onChange={handleInputChange}
              name="lastname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={login.email}
              onChange={handleInputChange}
              name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={login.username}
                onChange={handleInputChange}
                name="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={login.password}
                onChange={handleInputChange}
                name="password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <div className="form-group files color">
            <label>Upload Your Image</label>
            <input type="file" className="form-control hidden" name="file" onChange={onChangeHandler}></input>
            
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="green"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <br />  <br />  <br />
    </Container>
  );
}