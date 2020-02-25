import React, { useState,useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Searchbar from "../components/Searchbar";
import Searchcard from "../components/Searchcard";
import Searchcardfood from "../components/Searchcardfood";
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album(props) {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState();
    const [searchType, setSearchType] = useState("Food");
    const classes = useStyles();
    const numberOfUsersToSearch = 20;

    useEffect(() => {
        if(!search) {
            return;
        }
        if( searchType === "Foodie" ) {
            API.getUsers(search, numberOfUsersToSearch)
            .then(res => {
                setResult(res);
            })
        };
        if( searchType === "Food" ) {
            API.getSearchPosts(search, 10)
            .then(res => {
                console.log(res);
            })
        };
    }, [search]);

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Searchbar handleInputChange={handleInputChange} name="searchValue" value={search}/>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {result?
                        result.data.map( (card, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    {searchType === "Foodie"?
                                    <Searchcard user={card}/>
                                    :
                                    <Searchcardfood user={card}/>
                                    }
                                </Card>
                            </Grid>
                        )) :
                        ""
                        }
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}