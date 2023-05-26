import Image from 'next/image';
import { Link, animateScroll } from 'react-scroll';
import { useState, useCallback, useRef } from 'react';
import { useInView } from "framer-motion";
import Burger from '@animated-burgers/burger-rotate';
import '@animated-burgers/burger-rotate/dist/styles.css';
import {
    Box,
    Toolbar,
    useScrollTrigger,
    IconButton,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    AppBar,
    Button,
} from '@mui/material';
import { ArrowForward, ArrowRight } from '@mui/icons-material';
import style from './../../styles/Styles.module.css';
import Logo from './../../public/photos/logo.png';

const Header = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [isActive, setIsActive] = useState(false);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const links = [
        {
            id: 1,
            name: `Home`,
            link: `home`,
        },
        {
            id: 2,
            name: `About`,
            link: `about`,
        },
        {
            id: 3,
            name: `Projects`,
            link: `projects`,
        },
        {
            id: 4,
            name: `Contact`,
            link: `contact`,
        },
    ];

    const toggleButton = useCallback(() => {
        setIsActive((prevState) => !prevState);
    }, []);

    const scrollTop = () => {
        animateScroll.scrollToTop();
    }

    return (
        <AppBar
            ref={ref}
            sx={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
                p: {
                    lg: '0.5rem 2rem',
                    md: '0.5rem 1rem',
                    sm: '0.5rem 1rem',
                    xs: '0.5rem 0.5rem',
                }, 
                background: trigger ? '#354b5c' : 'transparent',
                zIndex: 100,
            }} 
            elevation={trigger ? 4 : 0}
        >
            <Toolbar sx={{ p: '0px !important' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Link to="home" href="#home" onClick={() => scrollTop()}>
                        <Image
                            src={Logo}
                            alt="Logo Image"
                            width={70}
                            height={70}
                            priority
                        />
                    </Link>
                    <Box
                        sx={{
                            display: { 
                                md: 'flex',
                                sm: 'none',
                                xs: 'none' 
                            },
                        }}
                    >
                        {links.map((link) =>(
                            <Box sx={{ display: 'flex', alignItems: 'center' }} key={link.id}>
                                <ArrowRight 
                                    sx={{
                                        p: 0,
                                        m: 0,
                                        mr: '0.2rem',
                                        fontSize: '1.6rem', 
                                        color: '#f1e2bd', 
                                    }} 
                                />
                                <Link
                                    href={`#${link.link}`}
                                    className={`${style.fontMedium} ${style.link}`}
                                    activeClass={style.linkActive}
                                    to={link.link}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    delay={300}
                                    duration={500}
                                >
                                    {link.name}
                                </Link>
                            </Box>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            sx={{
                                textTransform: 'unset',
                                p: '0.5rem 2rem',
                                mr: '1.5rem',
                                fontFamily: 'OpenSansSemiBold',
                                fontSize: '1.1rem',
                                color: '#fff',
                                bgcolor: '#132634',
                                '&:hover': {
                                    bgcolor: '#132634',
                                },
                            }}
                            href="./resume.pdf"
                            target="_blank"
                        >
                            Resume
                        </Button>
                        <Box
                            sx={{ 
                                display: { 
                                    md: 'none',
                                    sm: 'block',
                                    xs: 'block' 
                                },
                                pr: '1rem',
                            }}
                        >
                            <Burger
                                Component="button" 
                                type="button"
                                isOpen={isActive} 
                                onClick={() => toggleButton()} 
                            />
                        </Box>
                    </Box>
                </Box>
                <SwipeableDrawer
                    sx={{
                        '& .MuiPaper-root': {
                            bgcolor: '#2d404f',
                            width: '100%',
                            maxWidth: '375px',
                        },
                        zIndex: 100,
                    }}
                    anchor="left"
                    open={isActive}
                    onOpen={() => setIsActive(true)}
                    onClose={() => setIsActive(false)}
                >
                    <Box
                        sx={{
                            padding: '1.5rem 0 0 1.5rem',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                            sx={{
                                padding: '0.3rem',
                                margin: '0 1rem 0 0',
                                fontSize: '2rem',
                                bgcolor: 'transparent',
                                color: '#fff',
                                '&:hover': {
                                    bgcolor: 'transparent',
                                },
                            }}
                            disableRipple
                            onClick={() => setIsActive(false)}
                        >
                            <ArrowForward color="inherit" fontSize="inherit" />
                        </IconButton>
                    </Box>
                    <List sx={{ pl: '3rem', }}>
                        {links.map((link) =>(
                            <ListItem key={link.id}>
                                <ArrowRight 
                                    sx={{
                                        p: 0,
                                        m: 0,
                                        mr: '0.3rem',
                                        fontSize: '2rem', 
                                        color: '#f1e2bd', 
                                    }} 
                                />
                                <ListItemText>
                                    <Link
                                        key={link.id}
                                        href={`#${link.link}`}
                                        className={`${style.fontMedium} ${style.linkMobile}`}
                                        activeClass={style.linkActive}
                                        to={link.link}
                                        spy={true}
                                        smooth={true}
                                        delay={300}
                                        duration={500}
                                        onClick={() => setIsActive(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>
            </Toolbar>
        </AppBar>
    )
}

export default Header;