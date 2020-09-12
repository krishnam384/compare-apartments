import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({ 
    customCardStyles: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '150px',
        width: '150px'
    }

}));

const CustomCard = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            
            <h4>Apartment Name</h4>
                <img src="https://robohash.org/1?set=set2&size=150x150" />
                <span style={{color:'red'}}>price</span><Button style={{float:'right'}} variant="outlined">Book</Button>
               
                <h6>This is paragraph</h6>
                <a href="#">More Details</a>
            
        </React.Fragment>

    )
};

export default CustomCard;