import React, { Component } from "react";
import "./Style.css";





class Smallcard extends Component {
  render() {
    return (

<Card className={classes.card}>
<CardMedia
  className={classes.cardMedia}
  image="https://source.unsplash.com/random"
  title="Image title"
/>
<CardContent className={classes.cardContent}>
  <Typography gutterBottom variant="h5" component="h2">
    Heading
</Typography>
  <Typography>
    This is a media card. You can use this section to describe the content.
</Typography>
</CardContent>
<CardActions>
  <Button size="small" color="primary">
    View
</Button>
  <Button size="small" color="primary">
    Edit
</Button>
</CardActions>
</Card>

    )}}

    export default Smallcard