import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ActualTable from '../actualTable/materialTable.component';
import './apartmentComparision.styles.css';


const data = [
    {
        name:'Frozen yoghurt', 
        calories:159, 
        fat:6, 
        carbs:10,
        protein:20
    },
    {
        name:'Hot Coffee', 
        calories:15, 
        fat:3, 
        carbs:1,
        protein:200
    },
    {
        name:'Frozen Ice Cream', 
        calories:19, 
        fat:60, 
        carbs:210,
        protein:30
    },
    {
        name:'Frozen Ice Cream', 
        calories:19, 
        fat:60, 
        carbs:210,
        protein:30
    },
    {
        name:'Hot Chocolate', 
        calories:59, 
        fat:62, 
        carbs:102,
        protein:220
    },
    {
        name:'Hot Chocolate', 
        calories:59, 
        fat:62, 
        carbs:102,
        protein:220
    }

]

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
      
    },
    gridStyle: {
        
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

const ApartmentComparision = () => {
    const [spacing, setSpacing] = React.useState(2);

    const classes = useStyles();
    return (

        <React.Fragment>

        

        {/* <Grid conatiner>
            <Grid item xs={2}>
                <Button>Plus</Button>
            </Grid>

        </Grid> */}

        <div className={classes.root}>

        
            {data && data.map((food) => (

                <Grid >
                <ActualTable food={food}/>
                </Grid>

            ))}
        </div>
        </React.Fragment>
    )
}

export default ApartmentComparision;