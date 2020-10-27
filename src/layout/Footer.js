import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import React from 'react'


const useStyles = makeStyles(theme=>({
  footer: {
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.primary.main,
    boxShadow: " 0px 3px 10px 0px rgba(0,0,0,0.75)",
    color: "#fff",
    padding: "2rem 0",
  },
  links: {
    color: "#fff",
    margin: "0 .15rem",
    marginTop: ".25rem",
    textDecoration: "none",
    transition: "all .4s ease-out",
    '&:hover': {
      textDecoration: "underline",
      color: "#888",
      transition: "all .3s ease-out",
    }
  },
  linkSeparator: {
    color: "#fff",
    margin: "0 .65rem",
    marginTop: ".25rem",
  },
  footCopyright: {
    color: "#888"
  }
}))

export default function Footer() {  
  const classes = useStyles();
    return (
        <footer className={classes.footer}>
          <Container>
            <Grid container justify="center">
              <Grid item>
                <Typography variant="h5">Catflix</Typography>
              </Grid>
              <Grid container item justify="center" style={{marginTop: "1rem"}}>
                <a href="/#" className={classes.links}><Typography style={{margin:"0 .65rem"}}><Facebook fontSize="large" /></Typography></a>
                <a href="/#" className={classes.links}><Typography style={{margin:"0 .65rem"}}><Instagram fontSize="large" /></Typography></a>
                <a href="/#" className={classes.links}><Typography style={{margin:"0 .65rem"}}><Twitter fontSize="large" /></Typography></a>
              </Grid>
              <Grid container item justify="center">
                <a href="/#" className={classes.links}>Info</a>
                <Typography className={classes.linkSeparator}>•</Typography>
                <a href="/#" className={classes.links}>Support</a>
                <Typography className={classes.linkSeparator}>•</Typography>
                <a href="/#" className={classes.links}>Marketing</a>
              </Grid>
              <Grid container item justify="center">
                <a href="/#" className={classes.links}>Terms of use</a>
                <Typography className={classes.linkSeparator}>•</Typography>
                <a href="/#" className={classes.links}>Privacy Policy</a>
              </Grid>
              <Grid container item justify="center">
                <Typography className={classes.footCopyright} variant="overline">&#169; 2020 Catflix</Typography>
              </Grid>
            </Grid>
          </Container>
        </footer>
    )   
}