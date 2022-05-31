import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Box from '@mui/material/Box';
import { Grid , Button} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);


export const Faq=()=> {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);


  const handleClick1 = () => {
    if(open1 === false){
      setOpen1(true);
      setOpen2(false);
      setOpen3(false);
    }else{
      setOpen1(false);
    }
  };
  const handleClick2 = () => {
    if(open2 === false){
      setOpen1(false);
      setOpen2(true);
      setOpen3(false);
    }else{
      setOpen2(false);
    }
  };
  const handleClick3 = () => {
    if(open3 === false){
      setOpen1(false);
      setOpen2(false);
      setOpen3(true);
    }else{
      setOpen3(false);
    }
  };

  return (
    <Grid container justifyContent="center">
    
  <Box sx={{ width:'75%'}}>
  <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick1}>
        <ListItemText primary="Question1" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick2}>
        <ListItemText primary="Question2" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick3}>
        <ListItemText primary="Question3" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </ListItem>
        </List>
      </Collapse>
    </List></Box></Grid>
  );
}
