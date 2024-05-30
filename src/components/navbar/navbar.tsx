import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Theme } from '@mui/material/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    marginLeft: 2,
  }
}));

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar sx={{justifyContent:'space-between'}}>
          <Typography variant="h6" className={classes.title}>
            VanThailand
          </Typography>
          <Grid>
            <Button href='/' color="inherit" className={classes.navButton}>Home</Button>
            <Button href='/vans' color="inherit" className={classes.navButton}>Vans</Button>
            <Button href='/services' color="inherit" className={classes.navButton}>Services</Button>
            <Button href='/contact' color="inherit" className={classes.navButton}>Contact</Button>
            {/* Add more Button components for additional links */}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
