import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import headerImage from '../images/light-coding-background.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar 
      position="static"
      style={{
        background: `url(${headerImage})`
      }}
      >
        <Toolbar>
          <IconButton 
          edge="start" 
          className={classes.menuButton} 
          aria-label="menu"
          style={{
            color: 'black'
          }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography 
          variant="h6" 
          className={classes.title} 
          style={{
            color: 'black'
          }}
          >
            Alumni Books
          </Typography>
          <Button 
          color="inherit"
          style={{
            color: 'black'
          }}
          >
            Login
          </Button>
          <Button 
          color="inherit"
          style={{
            color: 'black'
          }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;