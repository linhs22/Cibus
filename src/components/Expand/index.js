import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Comment from "../Comment"

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  
  export default function Expand(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Comments</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            {props.comments? 
            props.comments.map( (item, index) => <p><strong>{item.User.username}&nbsp;</strong>{item.comment}</p>)
              : 
              ""}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
       
      </div>
    );
  }