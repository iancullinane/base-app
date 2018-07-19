import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
});


function PreviousOrderTable(props) {
  const { classes } = props;

  console.log(props.currentOrder);

  let thisTable = props.currentOrder.map((n, i) => (
        <TableRow key={i}>
          <TableCell>{n.product_id}</TableCell>
          <TableCell numeric>{n.quantity}</TableCell>
        </TableRow>        
      ));

  
  thisTable.push(
    <TableRow key={"end"}>
      <TableCell>Total</TableCell>
      <TableCell numeric>100</TableCell>
    </TableRow>        
  )

  
  // let thisTablePlus = addToEnd(thisTable);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell numeric>Quantity</TableCell>
          </TableRow>
        </TableHead> 
        <TableBody>
          {thisTable}
        </TableBody>        
      </Table>
    </Paper>
  );
}

PreviousOrderTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreviousOrderTable);
