import React,{useState} from 'react';
import './compare.styles.css';
import Card from '../card/card.component';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { BsFillFunnelFill } from "react-icons/bs";
import FilterdropDown  from '../filter/filter.component';
import Box from '@material-ui/core/Box';
import NestedGrid from '../formrow';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'lightblue'
    },
    listOfApartments: {
        position: 'relative',
        height: '100%',
        width: '100%',
        overflow: 'auto'
    },
    gridStyle: {
        margin: '50px',
        backgroundColor: 'white',
        borderRadius: '10px'
    },
    gridContainer: {
        padding: "50px"
    },
    positions: {
        margin: "50px",
        backgroundColor: "white"
       
    },
    division: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
});

export const Compare = () => {

    const [filterIsOpen,setfilterIsOpen] = useState(false);
    

    const Togglefilter=() => {
        return setfilterIsOpen(!filterIsOpen);
    }


    const classes=useStyles();
    return (
        <React.Fragment>

<Box p={1} className={classes.root}>
            
            <Grid className={classes.gridStyle}>

            <div className={classes.division}>
                <h2 style={{padding:'10px'}}>Compare</h2>           
            <Button color="primary" size='large' variant="contained" style={{height:'40px',borderRadius:'50%',marginRight:'10px'}} onClick={Togglefilter}><BsFillFunnelFill color="white"/></Button>
            </div> 
            <Collapse in={filterIsOpen}>
            <FilterdropDown show={filterIsOpen}  />
            </Collapse>
           

            <div className={classes.listOfApartments}>

                <NestedGrid />

            </div>

            

        {/* <Grid item container spacing={4} className={classes.gridContainer}>
            <Grid item xs={12} md={6} lg={4}>
                <Card />
            </Grid>
             
        
            <Grid item xs={12} md={6} lg={4}>
                <Card />
            </Grid> 
            <Grid item xs={12} md={6} lg={4}>
                <Card />
            </Grid> 
            <Grid item xs={12} md={6} lg={4}>
                <Card />
            </Grid>  
        </Grid>
       
        </Grid> */}
        </Grid>
        </Box>
        </React.Fragment>      
    )
} 