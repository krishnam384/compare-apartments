import React from 'react';
import './header.styles.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import AcUnitIcon from '@material-ui/icons/AcUnit';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      margin: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    typographyStyles: {
        flex: 1
    }
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <MenuIcon />
                
                <Typography variant="h5" className={classes.typographyStyles}> Krishnam</Typography>
                <AcUnitIcon />
            </Toolbar>
        </AppBar>
        </div>
    )
};

export default Header;