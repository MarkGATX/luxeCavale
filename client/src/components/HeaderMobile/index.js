import React from "react";
// import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import cavaleLogo from '../../images/cavale_logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import gsap from "gsap";
import { useRef } from "react";
import './HeaderMobile.css'
import { useState } from "react";
import { Drawer } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import CheckroomIcon from '@mui/icons-material/Checkroom';
import DiamondIcon from '@mui/icons-material/Diamond';
import BlenderIcon from '@mui/icons-material/Blender';
import Toolbar from "@mui/material/Toolbar";
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { useMenuContext } from "../../utils/menuContext";
import { Link } from "react-router-dom";
import { memo } from "react";
import StraightenIcon from '@mui/icons-material/Straighten';
import HomeIcon from '@mui/icons-material/Home';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


const sideHeight = 200;
let drawerHeight = 200;
const menuItems = [{ 'Home': HomeIcon }, { 'Men': MaleIcon }, { 'Women': FemaleIcon }, { 'Accessories': DiamondIcon }, { 'Houseware': BlenderIcon }]
const contactItems = [{ 'Sizing': StraightenIcon }, { 'About': InfoIcon }, { 'Contact': CallIcon }]


const HeaderMobile = () => {
    // const [currentDrawer, setCurrentDrawer] = useState(false);
    const [menuAction, setMenuAction] = useState('Open')
    const { isMenuOpen, toggleMenu } = useMenuContext();
    const sideContrastText = useRef();
    const mainContrastText = useRef();
    const sideContrastHorse = useRef();
    const mainContrastHorse = useRef();
    const burger = useRef();


    // function slideDrawer() {
    //     toggleMenu();
    //     console.log(isMenuOpen)
    //     const menuDrawer = document.querySelector('.MuiDrawer-paper')
    //     // true = drawer open, so if false, open drawer
    //     isMenuOpen ? setMenuAction('Open') : setMenuAction('Close')
    //     if (!isMenuOpen) {
    //         gsap.to(sideContrastText.current, { duration: 1, y: -120 })
    //         gsap.to(sideContrastHorse.current, { duration: 1, y: -120 })
    //         gsap.to(mainContrastText.current, { duration: 1, y: -120 })
    //         gsap.to(mainContrastHorse.current, { duration: 1, y: -120 })
    //         gsap.to(burger.current, { duration: 1, y: 90 })
    //         gsap.to(menuDrawer, { duration: 1, ease: 'power1.out', y: 200, zIndex: 1200 })
    //     } else {
    //         gsap.to(menuDrawer, { duration: 1, ease: 'none', y: -200, zIndex: -1 })
    //         gsap.to(sideContrastText.current, { duration: 1, y: 0 })
    //         gsap.to(sideContrastHorse.current, { duration: 1, y: 0 })
    //         gsap.to(mainContrastText.current, { duration: 1, y: 0 })
    //         gsap.to(mainContrastHorse.current, { duration: 1, y: 0 })
    //         gsap.to(burger.current, { duration: 1, y: 0 })

    //     }
    // }

    return (
        <>
            <Grid2 container className='headerContainer' sx={{ width: '100%', height: '120px', backgroundColor: 'headerBack.main', position: 'absolute', justifyContent: 'space-between', overflow: 'hidden', padding: '1em', flexWrap: 'nowrap', alignItems: 'center' }}>

                <Grid2 xs={8} sx={{ width: '100%', textAlign: 'center' }}>
                    <Typography className='headerTitleLightMobile' ref={sideContrastText} variant='h1' component='h1' sx={{ color: 'headerBack.contrastText', position: 'relative', letterSpacing: '.5em', top:'60px' }}>LUXE CAVALLO</Typography>
                </Grid2>
                <Grid2 xs={2}>
                    <img src={cavaleLogo} ref={sideContrastHorse} alt='Gold Luxe Cavale Logo' className='cavaleLogoGoldMobile' height="70px" width="70px"></img>
                </Grid2>
                <Grid2 xs={1}>
                    <Grid2 ref={burger} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <MenuIcon className='menuIcon' sx={{ color: 'headerBack.contrastText' }} />
                        <Typography variant='subtitle2' sx={{ color: 'headerBack.contrastText' }}>{menuAction}</Typography>
                    </Grid2>
                </Grid2>
            </Grid2>

            <Grid2 container sx={{ position: 'absolute', minHeight: '200px', top: sideHeight, overflow: 'hidden' }}>
                <Grid2>
                    <Drawer
                        sx={{
                            width: '100%',

                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                backgroundColor: 'secondary.main',
                                width: '100%',
                                boxSizing: 'border-box',
                                zIndex: '-1',
                                top: '-200px',
                                position: 'absolute',
                                overflow: 'hidden',
                                justifyContent: 'space-between',
                                padding: '1rem 0 1rem 0',
                            },
                        }}
                        variant="permanent"
                        anchor="top"
                    >
                        {/* <Toolbar /> */}
                        <List>
                            {menuItems.map((item, index) => {
                                const text = Object.keys(item)[0];
                                const Icon = Object.values(item)[0];
                                console.log(Icon)
                                return (
                                    text === 'Home' ? (<Link key={index} to={`/`}>
                                        <ListItem disablePadding>

                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <Icon />
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>) : (
                                        <Link key={index} to={`/${text}`}>
                                            <ListItem disablePadding>

                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <Icon />
                                                    </ListItemIcon>
                                                    <ListItemText primary={text} />
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>)

                                );
                            })}
                        </List>
                        <Toolbar />
                        <List>
                            {contactItems.map((item, index) => {
                                const text = Object.keys(item)[0];
                                const Icon = Object.values(item)[0];
                                console.log(Icon)
                                return (
                                    <Link key={index} to={`/${text}`}>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <Icon />
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                );
                            })}
                        </List>
                    </Drawer>
                </Grid2>
            </Grid2>
            <Grid2 container sx={{ width: '100%', height: '120px', position: 'absolute', justifyContent: 'space-between',  padding: '1em', flexWrap: 'nowrap', alignItems: 'center' , top:'120px', overflow:'hidden'}} >
                <Grid2 xs={8} sx={{ width: '100%', textAlign: 'center' }}>
                    <Typography className='headerTitleDarkMobile' ref={sideContrastText} variant='h1' component='h1' sx={{ color: 'text.main', position: 'relative', letterSpacing: '.5em', top:'-60px' }}>LUXE CAVALLO</Typography>
                </Grid2>
                <Grid2 xs={2}>
                    <img src={cavaleLogo} ref={sideContrastHorse} alt='Dark Luxe Cavale Logo' className='cavaleLogoMobile' height="70px" width="70px"></img>
                </Grid2>
                <Grid2 xs={1}>
                    <Grid2 ref={burger} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <MenuIcon className='menuIcon' sx={{ color: 'headerBack.contrastText' }} />
                        <Typography variant='subtitle2' sx={{ color: 'headerBack.contrastText' }}>{menuAction}</Typography>
                    </Grid2>
                </Grid2>
            </Grid2>




        </>
    )
}

export default memo(HeaderMobile);