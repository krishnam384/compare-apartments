import React from 'react';
import './content.styles.css';
import SimpleCard from '../card/card.component';
import { Grid } from '@material-ui/core';

const Content = () => {
    return (
        <Grid container spacing={4}>

            <Grid item xs={12} sm={6} md={4}>
                <SimpleCard 
                    title="Big Monster" 
                    subTitle="This is sub Title" 
                    avatarSrc='https://robohash.org/1?set=set2&size=180x180'
                />
            </Grid>
  

        

        </Grid>
    );
};

export default Content;