import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SimpleCard from '../card/card.component';
import { Button } from '@material-ui/core';
import CustomCard from '../../customCard';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCellSpacing: {
    padding: '50px'
  }
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function ActualTable(props) {
  const classes = useStyles();
  const { name, calories, fat, carbs, protein } = props.food;

  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            {/* <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={name}>
              <TableCell component="th" scope="row" >
                <CustomCard />
              </TableCell>
              {/* <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
            <TableRow key={name} className={classes.tableCellSpacing}>
              <TableCell component="th" scope="row">
                {calories}
              </TableCell>
            </TableRow>
            <TableRow key={name} className={classes.tableCellSpacing}>
              <TableCell component="th" scope="row">
                {fat}
              </TableCell>
            </TableRow>
            <TableRow key={name} className={classes.tableCellSpacing}>
              <TableCell component="th" scope="row">
                {carbs}
              </TableCell>
            </TableRow>
            <TableRow key={name} className={classes.tableCellSpacing}>
              <TableCell component="th" scope="row">
                {protein}
              </TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
