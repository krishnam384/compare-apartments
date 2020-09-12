import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ActualTable from './actualTable/materialTable.component';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SimpleModal from './modal/modal.component';

const data = [
    {
        name:'Frozen yoghurt', 
        calories:'1 Bed Room', 
        fat:'3 Bathroom', 
        carbs:10,
        protein:20
    },
    {
        name:'Hot Coffee', 
        calories:'2 Bed Room', 
        fat:'2 Bathroom', 
        carbs:1,
        protein:200
    },
    {
        name:'Frozen Ice Cream', 
        calories:'3 Bed Room', 
        fat:'1 Bathroom', 
        carbs:210,
        protein:30
    },
    {
        name:'Frozen Ice Cream', 
        calories:'4 Bed Room', 
        fat:'2 Bathrooms', 
        carbs:210,
        protein:30
    },
    {
        name:'Hot Chocolate', 
        calories:'1 Bed Room', 
        fat:'2 Bathrooms', 
        carbs:102,
        protein:220
    },
    {
        name:'Hot Chocolate', 
        calories:'2 Bed Room', 
        fat:'1 Bathroom', 
        carbs:102,
        protein:220
    }

]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  wholeBody: {
    display: 'flex',
    flexDirection: 'row'
  },
  gridStyle: {
      padding: '20px'
  },
  columnNames: {
    display: 'flex',
    flexDirection: 'column'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const handleClick = () => {
    console.log("Hello World!")
    return <SimpleModal />
}

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
      <React.Fragment>
          <div className={classes.wholeBody}>
    <div className={classes.columnNames}>
    <div style={{padding: '20px 70px 50px 50px'}}>
        <AddCircleIcon color='primary' fontSize="large" onClick={handleClick}/>
    </div>
    <div style={{padding: '250px 20px 0px 20px'}}>
        <h3>Bed Rooms</h3>
    </div>
    <div>
        <h3>Bath rooms</h3>
    </div>
    <div>
        <h3>Floor Area</h3>
    </div>

</div>
    <div className={classes.root}>
      <Grid className={classes.gridStyle}>

        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
          
        </Grid> */}
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
      </Grid>
      {data && data.map((food) => (

<Grid className={classes.gridStyle}>
      <ActualTable food={food}/>
      </Grid>

))}
      {/* <Grid className={classes.gridStyle}>
      <ActualTable food={data[0]}/>
      </Grid>
      <Grid className={classes.gridStyle}>
      <ActualTable food={data[1]}/>
      </Grid>
      <Grid className={classes.gridStyle}>
      <ActualTable food={data[2]}/>
      </Grid>
      <Grid className={classes.gridStyle}>
      <ActualTable food={data[3]}/>
      </Grid>
      <Grid className={classes.gridStyle}>
      <ActualTable food={data[4]}/>
      </Grid>
      <Grid className={classes.gridStyle}>
      <ActualTable food={data[5]}/>
      </Grid>
      <Grid className={classes.gridStyle}>
      <ActualTable food={data[5]}/>
      </Grid>
      <Grid className={classes.gridStyle}>
      <ActualTable food={data[5]}/>
      </Grid>
      <Grid className={classes.gridStyle}>
      <ActualTable food={data[5]}/>
      </Grid>
      <Grid className={classes.gridStyle}>
      <ActualTable food={data[5]}/>
      </Grid> */}
    </div>
    </div>
    </React.Fragment>
  );
}
