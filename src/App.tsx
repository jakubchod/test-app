import React from 'react';
import './App.css';

import {Route, Routes } from "react-router-dom";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import { Grid} from '@material-ui/core';


import {Navbar} from './nav';
import { InputForm } from './pages/input_form';
import {Faq} from "./pages/faq";
import {WeatherTab} from "./pages/weather";

function sayHello() {
  alert('You clicked me!');
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: '#ffffff',
      
    },
  }),
);



function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Navbar />
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/weather" element={<WeatherTab/>}/>
        <Route path="/about" element={
          <Grid container justifyContent="center">
            <Box sx={{ width:"75%"}}><button onClick={sayHello}>Hi!</button> 
              <a
                className="App-link"
                href="https://github.com/jakubchod/test-app"
                target="_blank"
              >
              Show repo
              </a>
            </Box>
            </Grid>} />
        <Route path="/contact" element={<InputForm/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
    
    </div>
  );
}

export default App;


