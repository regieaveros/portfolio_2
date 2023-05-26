import { useRef } from "react";
import { useInView } from "framer-motion";
import {
    Box,
    Container,
    Typography,
    Grid,
} from '@mui/material';
import style from './../styles/Styles.module.css';

const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const skills = [
        {
            id: 1,
            tech: 'HTML',
            percent: '80%',
        },
        {
            id: 2,
            tech: 'CSS',
            percent: '70%',
        },
        {
            id: 3,
            tech: 'JavaScript',
            percent: '65%',
        },
        {
            id: 4,
            tech: 'PHP',
            percent: '50%',
        },
        {
            id: 5,
            tech: 'ReactJS',
            percent: '50%',
        },
        {
            id: 6,
            tech: 'NodeJS',
            percent: '60%',
        },
    ];

    return (
        <Box sx={{ bgcolor: '#293742' }}>
            <Container sx={{ pt: '8rem', pb: '8rem' }} id="about" maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: '3rem' }}>
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
                            About Me
                        </Typography>
                        <Typography className={style.description} variant="p">
                            This is what I do and my current skills.
                        </Typography>
                    </Box>
                </Box>
                <Grid container>
                    <Grid
                        sx={{
                            transform: isInView ? "none" : "translateY(100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                        }}
                        item 
                        xs={12} 
                        sm={12} 
                        md={6} 
                    >
                        <Box
                            sx={{
                                mb: '3rem',
                                width: {
                                    lg: '78%',
                                    md: '85%',
                                    sm: '100%',
                                    xs: '100%',
                                } 
                            }}
                        >
                            <Typography sx={{ display: 'block', mb: '1rem' }} className={style.description} variant="p">
                                Hi&sbquo; My name is Regie Averos&sbquo; I have expertise in converting web design templates into websites&sbquo; focused on building responsive websites and web applications while exploring and learning trend technologies.
                            </Typography>
                            <Typography sx={{ display: 'block', mb: '1rem' }} className={style.description} variant="p">
                                Can do analytical and problem&ndash;solving on certain tasks and projects. Excited to pursue new opportunities to learn&sbquo; grow and contribute more. 
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        sx={{
                            transform: isInView ? "none" : "translateY(-100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                        }}
                        item 
                        xs={12} 
                        sm={12} 
                        md={6} 
                    >
                        <Box>
                            <Typography 
                                sx={{
                                    mb: '1.5rem',
                                    fontSize: '1.2rem',
                                }} 
                                className={style.heading}
                                variant="h4"
                            >
                                Here are the technologies I&apos;ve been using for my projects:
                            </Typography>
                            {skills.map(skill => (
                                <Box key={skill.id} sx={{ mb: '0.8rem' }}>
                                    <Typography
                                        component="h3"
                                        sx={{
                                            fontSize: '1.2rem',
                                            fontFamily: 'OpenSansSemiBold',
                                            color: '#9fabb9',
                                            pb: '0.2rem',
                                        }}
                                    >
                                        {skill.tech}
                                        <Box 
                                            component="span" 
                                            sx={{ float: 'right', color: '#9fabb9' }}
                                        >
                                            {skill.percent}
                                        </Box>
                                    </Typography>
                                    <Box className={style.progress}>
                                        <Box className={style.progressBar} sx={{ width: skill.percent }}>
                                            <Box className={style.progressDot} />
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About;