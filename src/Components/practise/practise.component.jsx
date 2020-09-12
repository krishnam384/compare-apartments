import React, { useState } from 'react';
import './practise.styles.css';

//Mui Components
import  { Button,Typography,Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


//Import internal Files
import Header from '../header/header.component';
import Content from '../Content/content.component';

//Internal Mui Files

const useStyles = makeStyles({
    root: {
      backgroundColor: 'red',   
    },
    buttonStyle: (props) => {
        return {
            color: (props.cool ? 'white' : 'yellow'),
            backgroundColor: (props.cool ? 'red' : 'blue'),
            '&:hover': {
                backgroundColor: 'green'
            }
        }
    }
  
  });



const Practise = (props) => {
    const classes = useStyles(props);
    const [test,setTest] = useState(false);
    
 
    return (
        <React.Fragment>
            <Grid container direction="column">
                <Grid item>
                    <Header />
                </Grid>
                <Grid container>
                    <Grid xs={0} sm={2}/>
                    <Grid item xs={12} sm={8}>
                        <Content />
                    </Grid>
                    <Grid xs={0} sm={2}/>
                    
                </Grid>

            </Grid>
        <Typography variant="h1" className={classes.root}>Practise..!!</Typography>
        <hr />

        <Button className={classes.buttonStyle} variant="outlined" onClick={() => setTest(!test)}>Primary</Button>
    
        </React.Fragment>
    )
};

export default Practise;