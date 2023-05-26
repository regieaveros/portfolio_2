import { useRef } from 'react';
import { useInView } from "framer-motion";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Stack,
    Chip,
    IconButton,
} from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';

import style from './../styles/Styles.module.css';

const Projects = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const portfolios = [
        {
            id: 1,
            title: 'Devon | Web Design',
            description: 'A web design template for digital marketing agency.',
            image: '/images/devon.png',
            link: 'https://devon-two.vercel.app/',
            github: 'https://github.com/regieaveros/devon',
            technologies: [
                'NextJS',
                'Material UI'
            ],
        },
        {
            id: 2,
            title: 'Color Note',
            description: 'The design of this project aims to help your daily needs on taking notes for any certain ideas, tips, or anything that would give them an informative idea.',
            image: '/images/note.png',
            link: 'https://project-notes.infinityfreeapp.com/',
            github: 'https://github.com/regieaveros/project-notes',
            technologies: [
                'Laravel',
                'Tailwind CSS',
                'AlpineJS',
                'JavaScript',
                'Axios',
                'Webpack'
            ],
        },
        {
            id: 3,
            title: 'Online Viewing Of Grades',
            description: 'The main goal of the project is to design and develop a system that will let the faculties and students electronically manage grade-related transaction in school in an easy, fast and hassle-free manner.',
            image: '/images/onlineviewinggrades.png',
            link: 'https://onlineviewinggrades.infinityfreeapp.com/',
            github: 'https://github.com/regieaveros/viewinggrades',
            technologies: [
                'CodeIgniter',
                'Bootstrap',
                'CSS',
                'Jquery',
                'JavaScript',
            ],
        },
        {
            id: 4,
            title: 'Legarda Place',
            description: 'Legarda Place is a professionally managed four-storey residential property strategically located near different universities, colleges, and establishments to give the occupants the convenience they need.',
            image: '/images/legarda.png',
            link: 'https://legardaplace.com/',
            github: 'https://github.com/regieaveros/legarda',
            technologies: [
                'Bootstrap',
                'HTML',
                'PHP',
                'CSS',
                'Jquery',
                'JavaScript',
            ],
        },
        {
            id: 5,
            title: 'Portfolio',
            description: 'My Portfolio',
            image: '/images/portfolio.png',
            link: 'https://www.regieaveros.tech/',
            github: '#',
            technologies: [
                'NextJS',
                'Material UI',
                'CSS',
                'JavaScript',
            ],
        },
    ];

    return (
        <Box sx={{ bgcolor: '#2d404f' }}>
            <Container sx={{ pt: '8rem', pb: '8rem' }} id="projects" maxWidth="lg">
                <Box
                    sx={{ 
                        display: 'flex',
                        justifyContent: 'center', 
                        mb: '3rem' 
                    }}
                >
                    <Box 
                        sx={{ 
                            width: {
                                md: '47%',
                                sm: '65%',
                                xs: '95%',
                            },
                            textAlign: 'center',  
                        }}
                    >
                        <Typography
                            ref={ref}
                            sx={{
                                mb: {
                                    sm: '1.2rem',
                                    xs: '1.8rem',
                                },
                                position: 'relative',
                                fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    zIndex: 1,
                                    top: 'calc(100% + 0.2rem)',    
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    borderRadius: '20px',
                                    background: 'linear-gradient(90deg, rgba(54,76,93,1) 20%, rgba(59,86,107,1) 45%, rgba(67,92,112,0.9445028011204482) 100%)',
                                    width: '3rem',
                                    height: '0.2rem',
                                },
                            }}
                            className={style.subtitle}
                            variant="h2"
                        >
                            Projects
                        </Typography>
                        <Typography className={style.description} variant="p">
                            Some projects that I&apos;ve built
                        </Typography>
                    </Box>
                </Box>
                <Grid
                    sx={{
                        transform: isInView ? "scale(1)" : "scale(0)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                    }}
                    container
                    spacing={2}
                    direction="row"
                >
                    {portfolios.map(portfolio => (
                        <Grid key={portfolio.id} item xs={12} sm={12} md={6}>
                            <Card 
                                sx={{ 
                                    position: 'relative',
                                    '&:hover .css-1039x37-MuiCardContent-root': {
                                        top: 0,
                                    },
                                    '&:hover .css-1hpsd32-MuiCardMedia-root': {
                                        transform: 'scale(1.1)',
                                    },
                                    '&:hover .css-1k14h9w-MuiTypography-root:before': {
                                        width: '100%',
                                    },
                                    '&:hover .css-1t43gwu-MuiTypography-root': {
                                        opacity: 1,
                                    },
                                    '&:hover .css-v8ua4g-MuiStack-root': {
                                        opacity: 1,
                                    },
                                    '&:hover .css-1sa19pv-MuiStack-root': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <CardMedia
                                    sx={{
                                        transition: 'transform 500ms ease-in',
                                        width: '100%',
                                        height: {
                                            lg: '100%',
                                            md: '50vh',
                                            sm: '100%',
                                            xs: '65vh',
                                        },
                                        filter: 'grayscale(43%)',
                                    }}
                                    component="img"
                                    image={portfolio.image}
                                    alt={portfolio.title}
                                />
                                <CardContent 
                                    sx={{
                                        transition: 'all 0.8s',
                                        bgcolor: '#2d404fcc', 
                                        position: 'absolute', 
                                        top: 'calc(100% - 4rem)',
                                        height: '100%',
                                        width: '100%',
                                    }}
                                >
                                    <Typography 
                                        sx={{
                                            position: 'relative',
                                            color: '#fff',
                                            fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                                            fontFamily: 'OpenSansSemiBold',
                                            '&:before': {
                                                transition: 'all 0.5s',
                                                transitionDelay: '0.7s',
                                                content: '""',
                                                position: 'absolute',
                                                zIndex: 1,
                                                top: 43,    
                                                left: 0,
                                                background: '#f1e2bd',
                                                width: '0%',
                                                height: '12%',
                                            },
                                        }} 
                                        variant="h5"
                                    >
                                        {portfolio.title}
                                    </Typography>
                                    <Typography 
                                        sx={{ 
                                            opacity: 0,
                                            fontSize: 'clamp(0.8rem, 5vw, 1rem)',
                                            mt: '2rem',
                                            pb: '1rem',
                                            color: '#fff',
                                            transition: 'all 0.5s',
                                            transitionDelay: '0.8s',
                                        }} 
                                        variant="body1"
                                    >
                                        {portfolio.description}
                                    </Typography>
                                    <Stack
                                        sx={{
                                            transition: 'all 0.5s',
                                            transitionDelay: '0.8s',
                                            opacity: 0
                                        }}
                                        direction="row"
                                        flexWrap="wrap"
                                        spacing={0}
                                    >
                                        {portfolio.technologies.map(technology => (
                                            <Box key={technology}>
                                                <Chip
                                                    label={technology}
                                                    sx={{
                                                        mb: '0.5rem',
                                                        mr: '0.5rem',
                                                        fontSize: '0.8rem',
                                                        fontFamily: 'OpenSansSemiBold',
                                                        color: '#9fabb9',
                                                        bgcolor: 'transparent',
                                                        border: '2px solid #9fabb9',
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Stack>
                                    <Stack 
                                        direction="row" 
                                        spacing={2} 
                                        sx={{  
                                            position: 'absolute',
                                            bottom: 20,
                                            right: 20,
                                            transition: 'all 0.5s',
                                            transitionDelay: '0.8s',
                                            opacity: 0
                                        }}
                                    >
                                        <IconButton 
                                            sx={{
                                                p: 0,
                                                bgcolor: 'transparent', 
                                                color: '#b9c2cc',
                                                borderRadius: '0.5rem',
                                                '&:hover': {
                                                    bgcolor: 'transparent',
                                                    color: '#132634',
                                                },
                                            }}
                                            href={portfolio.link}
                                            target="_blank"
                                            disableRipple
                                        >
                                            <OpenInNew sx={{ fontSize: '1.8rem', }} />
                                        </IconButton>
                                        <IconButton 
                                            sx={{
                                                p: 0,
                                                bgcolor: 'transparent', 
                                                color: '#b9c2cc',
                                                borderRadius: '0.5rem',
                                                '&:hover': {
                                                    bgcolor: 'transparent',
                                                    color: '#132634',
                                                },
                                            }}
                                            href={portfolio.github}
                                            target="_blank"
                                            disableRipple
                                        >
                                            <GitHub sx={{ fontSize: '1.8rem', }} />
                                        </IconButton>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Projects