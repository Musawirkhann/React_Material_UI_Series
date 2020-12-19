import React from 'react';
import {AppBar, Toolbar, IconButton, 
        Typography, Button, fade, InputBase} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from  '@material-ui/icons/Menu';
import {AccountCircle} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';


const NavbarScreen = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <AppBar position="static" className={classes.navbarbackground}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} color='inherit' variant='h6' noWrap>
                        React Material UI Series
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder='search'
                        className={classes.searchinput}
                        inputProps={{'aria-label': 'search'}}/>
                    </div>
                    <Button color='inherit' >SignOut</Button>
                    <IconButton edge='end' color="inherit" aria-label="profile image">
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1
    },
    navbarbackground: {
        background: 'linear-gradient(45deg, #acb6e5 30%, #86fde8 90%)',
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }      
    },
    searchIcon: {
        padding: theme.spacing(0),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchinput: {
        color: 'inherit',
        padding: theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%'
    }
}))
export default NavbarScreen;